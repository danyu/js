const examples = [
  "D2FE28",
  "38006F45291200",
  "EE00D40C823060",
  "8A004A801A8002F478",
  "620080001611562C8802118E34",
  "C0015000016115A2E0802F182340",
  "A0016C880162017C3686B18A3D4780",
];

const examples_for_values = [
  "C200B40A82",
  "04005AC33890",
  "880086C3E88112",
  "CE00C43D881120",
];

const large =
  "E058F79802FA00A4C1C496E5C738D860094BDF5F3ED004277DD87BB36C8EA800BDC3891D4AFA212012B64FE21801AB80021712E3CC771006A3E47B8811E4C01900043A1D41686E200DC4B8DB06C001098411C22B30085B2D6B743A6277CF719B28C9EA11AEABB6D200C9E6C6F801F493C7FE13278FFC26467C869BC802839E489C19934D935C984B88460085002F931F7D978740668A8C0139279C00D40401E8D1082318002111CE0F460500BE462F3350CD20AF339A7BB4599DA7B755B9E6B6007D25E87F3D2977543F00016A2DCB029009193D6842A754015CCAF652D6609D2F1EE27B28200C0A4B1DFCC9AC0109F82C4FC17880485E00D4C0010F8D110E118803F0DA1845A932B82E200D41E94AD7977699FED38C0169DD53B986BEE7E00A49A2CE554A73D5A6ED2F64B4804419508B00584019877142180803715224C613009E795E58FA45EA7C04C012D004E7E3FE64C27E3FE64C24FA5D331CFB024E0064DEEB49D0CC401A2004363AC6C8344008641B8351B08010882917E3D1801D2C7CA0124AE32DD3DDE86CF52BBFAAC2420099AC01496269FD65FA583A5A9ECD781A20094CE10A73F5F4EB450200D326D270021A9F8A349F7F897E85A4020CF802F238AEAA8D22D1397BF27A97FD220898600C4926CBAFCD1180087738FD353ECB7FDE94A6FBCAA0C3794875708032D8A1A0084AE378B994AE378B9A8007CD370A6F36C17C9BFCAEF18A73B2028C0A004CBC7D695773FAF1006E52539D2CFD800D24B577E1398C259802D3D23AB00540010A8611260D0002130D23645D3004A6791F22D802931FA4E46B31FA4E4686004A8014805AE0801AC050C38010600580109EC03CC200DD40031F100B166005200898A00690061860072801CE007B001573B5493004248EA553E462EC401A64EE2F6C7E23740094C952AFF031401A95A7192475CACF5E3F988E29627600E724DBA14CBE710C2C4E72302C91D12B0063F2BBFFC6A586A763B89C4DC9A0";

const binaryMap = {
  0: "0000",
  1: "0001",
  2: "0010",
  3: "0011",
  4: "0100",
  5: "0101",
  6: "0110",
  7: "0111",
  8: "1000",
  9: "1001",
  A: "1010",
  B: "1011",
  C: "1100",
  D: "1101",
  E: "1110",
  F: "1111",
};

// literal value
function parseTypeID_4(packet) {
  console.log("Type Id 4", packet);
  let { curPos, binaryStr } = packet;
  let step = 5;
  let isLastGroup = binaryStr[curPos];
  let valueStr = "";
  while (isLastGroup !== "0") {
    valueStr += binaryStr.substring(curPos + 1, curPos + step);

    curPos += step;
    isLastGroup = binaryStr[curPos];
  }
  valueStr += binaryStr.substring(curPos + 1, curPos + step);
  let value = parseInt(valueStr, 2);

  // packet.valueSum += value;

  curPos += step;

  packet.curPos = curPos;

  return value;
}

// might sub pack
function parseTypeID_Not4(packet, typeID) {
  console.log("Not Type Id 4", packet);
  // parse length
  let { curPos, binaryStr } = packet;
  let lengthTypeId = binaryStr[curPos++];

  let packetValues = [];

  if (lengthTypeId == "0") {
    // 15 bits => len
    let subPackLen = parseInt(binaryStr.substring(curPos, curPos + 15), 2);
    console.log(
      "sub packet len = ",
      subPackLen,
      ",",
      binaryStr.substring(curPos, curPos + 15)
    );

    packet.curPos = curPos + 15;
    const end = packet.curPos + subPackLen;
    console.log("[Start] Length type id = 0", packet);

    while (packet.curPos < end) packetValues.push(decodePacket(packet));
    console.log("[end] Length type id = 0 ", packet);
    // }
  } else {
    // 11 bits => num
    let subPackNum = parseInt(binaryStr.substring(curPos, curPos + 11), 2);
    //     if (isNaN(subPackNum)) return;
    packet.curPos = curPos + 11;
    console.log("Number of sub packets = ", subPackNum);
    let countSubPack = 0;
    while (countSubPack < subPackNum) {
      packetValues.push(decodePacket(packet));
      countSubPack++;
    }
  }

  console.log("[.....] = ", packetValues);
}

const VERSION_LEN = 3;
const TYPE_ID_LEN = 3;

function decodePacket(packet) {
  console.log("decodePacket", packet);
  let { binaryStr, curPos } = packet;

  const version = binaryStr.substring(curPos, curPos + VERSION_LEN);
  curPos += VERSION_LEN;
  packet.versionSum += parseInt(version, 2);

  const typeID = parseInt(binaryStr.substring(curPos, curPos + TYPE_ID_LEN), 2);
  curPos += TYPE_ID_LEN;

  packet.curPos = curPos;

  if (!version) return; // 000-> end

  if (typeID == 4) {
    return parseTypeID_4(packet);
  } else {
    return parseTypeID_Not4(packet, typeID);
  }
}
function parse_Part1(input) {
  console.log("=========>>>");
  let binaryStr = input.split("").reduce((acc, ch) => acc + binaryMap[ch], "");
  console.log(binaryStr);
  let packet = { versionSum: 0, binaryStr, curPos: 0, value: 0 };
  let value = decodePacket(packet);
  console.log("=========<<<", input, packet.versionSum, value);
}
// parse_Part1(examples[0]);
// parse_Part1(examples[1]);
// versionSum_Part1(examples[2]);
// parse_Part1(examples[3]);
// parse_Part1(examples[4]);
// parse_Part1(examples[5]);
// parse_Part1(examples[6]);
// parse_Part1(large);
examples_for_values.forEach((v) => parse_Part1(v));
// (examples_for_values[0]);
