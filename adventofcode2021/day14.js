const small = {
  template: "NNCB",
  rules: [
    "CH -> B",
    "HH -> N",
    "CB -> H",
    "NH -> C",
    "HB -> C",
    "HC -> B",
    "HN -> C",
    "NN -> C",
    "BH -> H",
    "NC -> B",
    "NB -> B",
    "BN -> B",
    "BB -> N",
    "BC -> B",
    "CC -> N",
    "CN -> C",
  ],
};
const large = {
  template: "SVKVKCCBNHNSOSCCOPOC",
  rules: [
    "KK -> B",
    "CS -> P",
    "VV -> O",
    "KO -> S",
    "PO -> N",
    "PH -> K",
    "BV -> O",
    "VH -> V",
    "PF -> P",
    "HB -> B",
    "OB -> V",
    "FC -> F",
    "OS -> H",
    "NB -> P",
    "SH -> S",
    "KV -> K",
    "SO -> C",
    "NP -> B",
    "NV -> F",
    "CP -> O",
    "KS -> N",
    "FP -> B",
    "VN -> V",
    "NC -> S",
    "FH -> N",
    "CB -> V",
    "PV -> B",
    "NH -> B",
    "NF -> H",
    "PC -> B",
    "NO -> N",
    "CN -> P",
    "KF -> B",
    "VF -> S",
    "CC -> K",
    "CF -> N",
    "PS -> S",
    "NK -> N",
    "PB -> H",
    "BP -> O",
    "FK -> N",
    "BO -> S",
    "OH -> C",
    "VB -> S",
    "VP -> F",
    "FO -> V",
    "KB -> C",
    "SK -> H",
    "CO -> H",
    "HV -> H",
    "SV -> B",
    "BF -> O",
    "SS -> K",
    "VK -> S",
    "HS -> B",
    "HF -> P",
    "PK -> F",
    "BS -> O",
    "BB -> O",
    "VC -> P",
    "OP -> F",
    "NS -> P",
    "SB -> C",
    "NN -> K",
    "HC -> S",
    "HH -> B",
    "FN -> P",
    "OO -> V",
    "VO -> N",
    "ON -> P",
    "FV -> K",
    "HK -> S",
    "FS -> V",
    "HO -> V",
    "PN -> B",
    "KH -> B",
    "CH -> C",
    "KP -> S",
    "BH -> O",
    "BK -> B",
    "FB -> H",
    "VS -> S",
    "HP -> O",
    "SP -> P",
    "OV -> F",
    "OF -> H",
    "OC -> V",
    "KN -> H",
    "BC -> F",
    "BN -> F",
    "CK -> K",
    "SN -> P",
    "SF -> K",
    "KC -> C",
    "SC -> C",
    "HN -> V",
    "OK -> O",
    "FF -> V",
    "CV -> V",
    "PP -> V",
  ],
};

function polymer_part1(input, step) {
  const { template, rules } = input;

  const rulesMap = rules.reduce((acc, cur) => {
    const [pattern, insert] = cur.split(" -> ");
    acc[pattern] = insert;
    return acc;
  }, {});

  const cntMap = {};
  const totalLen = 0;

  function updateCntMap(ch) {
    if (!cntMap[ch]) cntMap[ch] = 0;
    cntMap[ch]++;
  }

  function countChDiff(templ) {
    for (let i = 0; i < templ.length; i++) updateCntMap(templ[i]);
    console.log(cntMap);
    let min = Number.MAX_VALUE;
    let max = 0;
    Object.values(cntMap).forEach((n) => {
      min = Math.min(min, n);
      max = Math.max(max, n);
    });
    return max - min;
  }

  function applyRule(templ) {
    let newTempl = "",
      j = 0;
    for (; j < templ.length - 1; j++) {
      let curSeg = templ[j] + templ[j + 1];
      // updateCntMap(templ[j]);
      if (rulesMap[curSeg]) {
        newTempl += templ[j] + rulesMap[curSeg];
        // updateCntMap(rulesMap[curSeg]);
      } else {
        newTempl += templ[j];
      }
    }

    newTempl += templ[j];
    // updateCntMap(templ[j]);

    return newTempl;
  }

  let i = 0,
    curTempl = template;

  while (i < step) {
    // console.log(i, curTempl, curTempl.length);
    curTempl = applyRule(curTempl);
    i++;
  }

  //   console.log(cntMap);
  return countChDiff(curTempl);
}

function polymer_part2_faster(input, step) {
  const { template, rules } = input;

  const rulesMap = rules.reduce((acc, cur) => {
    const [pattern, insert] = cur.split(" -> ");
    acc[pattern] = insert;
    return acc;
  }, {});

  let cntMap = {};
  const mem = {};
  const totalLen = 0;
  let min = Number.MAX_VALUE;
  let max = 0;

  function updateCntMap(ch, map) {
    if (!map[ch]) map[ch] = 0;
    map[ch]++;
  }

  function countChDiff(cntMap) {
    let min = Number.MAX_VALUE;
    let max = 0;
    Object.values(cntMap).forEach((n) => {
      min = Math.min(min, n);
      max = Math.max(max, n);
    });
    return max - min;
  }

  function applyRule(templ) {
    let map = {};
    j = 0;
    for (; j < templ.length - 1; j++) {
      updateCntMap(templ[j], map);
      mergeCount(map, recurCnt(templ[j] + templ[j + 1], step));
    }

    updateCntMap(templ[j], map);

    return map;
  }

  function recurCnt(pair, stepsLeft) {
    if (stepsLeft == 0) return null;
    let key = pair + "," + stepsLeft;
    if (mem[key]) {
      return mem[key];
    }

    let ch = rulesMap[pair];
    if (!ch) return null;

    let map = {};
    updateCntMap(ch, map);
    mergeCount(map, recurCnt(pair[0] + ch, stepsLeft - 1));
    mergeCount(map, recurCnt(ch + pair[1], stepsLeft - 1));

    mem[key] = map;
    return map;
  }

  function mergeCount(map, localMap) {
    if (!localMap) return;
    Object.keys(localMap).forEach((k) => {
      //   console.log(map);
      if (!map[k]) map[k] = 0;
      map[k] += localMap[k];
    });
  }

  cntMap = applyRule(template, step);
  //   console.log(cntMap);
  //   console.log(mem);
  console.log(countChDiff(cntMap));
}

// console.log(polymer_part1(small, 20));
// console.log(polymer_part1(large, 10));
// for (let i = 1; i < 41; i++) {
//   polymer_part2_faster(small, i);
// }

polymer_part2_faster(small, 40);
polymer_part2_faster(large, 40);
