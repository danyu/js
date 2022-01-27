const small = [
  "be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe",
  "edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc",
  "fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg",
  "fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb",
  "aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea",
  "fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb",
  "dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe",
  "bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef",
  "egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb",
  "gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce",
];

const large = [
  "bgeacd dbfag bcadegf agdce dgfbce bgc bdgca aedcgf bc abec | gcdfbe cbea bc gbc",
  "bdeag gdbaec cd dgc abcfg ebcd dgfabe cdfeag cgadb bdagfce | becd acfgde bgcaed eadgbc",
  "acbfg bcf ebacg fb fcbgea cbdfge cgeabd agcfd aebf bdaefgc | fbcdeg cfb ebgca bf",
  "bfcde dfgb gecbdf fdc fdcega fd ebdca gfcaedb gcfbe cbagef | dbfec gbfd bcdfe dfc",
  "dbgeaf bad acdfbe ab agbdf bgcdf fdgae fcgbdea fgecda egab | ba dab abd gbae",
  "feagcb cdfagb egda bdg dg fdcagbe ebcga bedfc bgecd dbcgea | eafgbc bcdfage dg egad",
  "bacfedg afbgc dbcgaf afgecd acd bfagce bgda ad adfbc ecbdf | dca dca abdg dcbef",
  "eagfb efcdba faceg gfdce cea afbcegd ac afdegb gafcbe gbac | fegcd geafc edbcaf bcag",
  "cfb bgfce ebgdf fc gdfeab acdbfeg cgeab ecfd badfcg ebcfgd | ecgab eagcb efbacdg fc",
  "adfec ebdcgf bfced bec fagcdeb gbcd cb fbgde deagbf afecgb | bce cb fdgeb bc",
  "bgfaec dcfga ed acedgfb fdebgc dec fdeb gedcba gfced cebfg | cde agcbde gfaecb cde",
  "bgefc cfgbea dfgaecb dg dbcg dcefa dfbegc dgfce afgedb fgd | cfged gdf fbgdea gafecb",
  "fcbade dagbe gacb gaedfc bdaecfg bgfde dbaec baegcd ga dga | ag gad gcab ga",
  "cfgdeb cbfade fac badfc ca gafdce gfdebac bfadg fbdce aceb | ebdcf deagfc ac ebfcd",
  "debfcg fgde cfaedgb ecbag cbeadf gf gbf fdceb fcebg dfagbc | gbfec gf agbce bfcagd",
  "fdcebag cbeagd gafed dfbgc cgedfa beg be edgafb edbfg eabf | gbcfd acgefd cfdageb afged",
  "bgad efdbcg aecfdgb fgebca ga cgade acbedg adfce aeg cgdeb | gdecfb fgdceb adceg ga",
  "acefd efdb cgabfe be fegcbda gbacd cagefd eab acebfd acbed | be debf feacgb becad",
  "edbcag dgefcab ce fgdcb eafc afgceb gfbae cbe degafb bfgce | fcgbd ec dbaegc efgdba",
  "bfcdge gfcbda aegfcdb dg cdgbe dbfce dgb fged cdefba caebg | dbg bgd gdfe dg",
  "bfeadc dbfcgea bgdaf decfg efdabg cgba fbdagc ca fca gdcfa | cafdg gacb bdfeag ac",
  "edbcfg cdgfae gedaf egcfd beagfc fga bcfdgae cgda debfa ag | defgc efabgc fcegadb fegda",
  "gafcb fcgadb gdca gbadf ad fbegd befcag fda ebgdcaf fbaecd | agcbf dbafcg dgafb abgfcd",
  "cga gafce gecbfda dbacgf defac febcg cfbdeg afegcb bgae ga | cdbgef ebdagcf caefg geba",
  "gfebcda ab dfabg abcfgd gdbfc abgc becgdf bcedfa adfge fab | abf fab ba agbc",
  "fagce ceabfgd cdea cbfaeg dgafce egcdf bfaegd gbcdf fde ed | de aedgbf fecagd fcebga",
  "fcbad fe afge ebagd fde fbdegac fgbced fdgeba fabed edcgba | debga bdgae bafdc efag",
  "adbfg ba dbcfga abgdecf gfedb agfdc gcdeaf adfebc bda bacg | befdac ebdafc abd gdbafce",
  "begfd dgfbac dgbac ce bedgac dafceg dgbce ecfdgab ceg ecab | gadfcb gefdb gdeafcb fgcdab",
  "dcfagbe dgbefa gdbcea faebgc fade efabg dge cfdbg fbgde ed | de efbacg dfea dfea",
  "dcfeag bgefcad dcgfe afedb cb bfgaec dcgb bec fcdbe gbecdf | bec agfebc ecb edfba",
  "acdbgfe ebcag fgc feagcb bafc gfceb fc gfadce gcbead dbgef | bceagd fcab gfdceba cfebg",
  "bdegf abgefd fgba dgceab dabcef badfegc egb fadeb gb fdgce | gafb efdba gb dbfage",
  "bfdca cfgb agdfec caf bgcfda becad gbdaf fc ebgfcad bagedf | gefdab cebad cf bgfc",
  "dfbcge bedgaf bgefd cgebda efcb gcfad degfbca bgc fcdbg cb | ecbadg gbfdc bgdfe fcbe",
  "dfeagc bfacge abfc fcegb bdecg bef acfeg bf bcgaedf gedfba | bf ebf fb cfadegb",
  "fbgdc fcbgead egaf acebgd gacdf fad gdaec bfecad fa gcedaf | eafdgc fda degacf geadbc",
  "fcdea gcdbaf cgedbf bd bgde cdb acfgeb efcbg fdecb fedbacg | aebgcf febdc dcb bgdefc",
  "bfdeg dbcefa bdaegf cegdf agdb fdaeb bge gb beacfg edbcafg | gefdb edcfg acbgef egb",
  "afgedbc caebg gef fbec egcdba dfgabe gafcd bfacge agcfe ef | fge eafbdg cgbae cgaefb",
  "cbagfed dceba efgcb bcafde gacedb fdca caebf egfabd fa aef | adegbc cbgfade adcf deabc",
  "gcbd bcegad eagdb fedabc acebdgf gcbea gaebdf gacef bc bce | dbaegc cgfea bcdg ebc",
  "cbfdeag agfbce cagef cbdefg gb gefab gcedfa gfb fdeba abcg | bfg afegb gbf cgab",
  "dea fadgbec dcabe abcdeg cfbad gdec agecb gdefab fbgaec de | dbgfae cdfegab dbgcae beadcg",
  "gabcd aebdgc gcaefbd edac gbfad cebag efcbga dc dcegbf cdb | cbdag agebc afcebg faegcb",
  "gacdbe cdabefg fecgab fe gef cbdgef dcfe gdfeb cbegd dagfb | egf fe efg decgb",
  "cbfea bcgf adcfe ecbgad bf gfebad feb bfagce afdcgbe abgce | cadef bcfg bf dbfcage",
  "fabeg cfeab ebgfcad ebfgad eg edag dfbag feg defcbg fbdcga | efbga fdcegb gbafd gdbecf",
  "cdgfba bga geabdc dacge beadf ebgc agcfde bg gbacdef bgead | cebg fbdae gbec dagfce",
  "fbgdace deafcb ead caedg da decgba aefcg bedcg gdbecf badg | ebfdcg gbad ecagbd egdcb",
  "faebg fg gfca eafbd cgbaef baecdfg cedbgf eabcg efg dgceba | edcgfab feg gf efg",
  "adbec dbcaf ecga dea eabfdg cdbge bafdcge bgdcae ae fedcgb | ead cabdgfe agce egcfbd",
  "gdcef agfb bfgade cebdaf debcagf dbafe egbfd cdageb geb bg | egadbc gcdfe afgb egb",
  "gfcbe cgfabe cdagb debgcf de bdef gde dbgcefa dfecag edcgb | fcegb fdcagbe fcbge edgcbf",
  "gaedcf cfedba dgacb cgbeaf fbge ecafg bfdgace gfacb bfa bf | gcadb decafg adgfec baf",
  "eadg gfadbc eagbcd agbcd cea bdafgce cdfaeb ae gcfbe geacb | ea cdeagb debgacf egad",
  "afecgbd eafd adbgf egfdbc cbeag bgfead egafb fe gdacbf efg | egcab gef dbagfe abgecdf",
  "gafbde geab efdcab badef cfdeg gfa egcdafb fdeag ag abfcdg | fcgde ebfad bgae ebdfa",
  "adbef adbcfg fbgace eac ec egcb afcgb cfeab faedgc dgfebca | gbadfc eca ecgb cgbe",
  "fb efadcb fab gbfeca gfcab baecgd fadgc gfedabc gbef cgaeb | beagdc cabfg bacge gbfe",
  "dfabcg bcdg dagbf aegcbfd db fbd gcbaf gefad feabdc gcbeaf | fagdb bacfdg gabdfc dcgb",
  "ecagbdf dgfac cefag geacdb dcefgb df bdcgfa afbd abdcg fcd | dfc defbcg df afbd",
  "bfadc bcgad acegd bg ceagdfb bag cdaefb fcgb cgadfb gdebfa | cfbadge efbdcag fcdab dcbaf",
  "bdcefa gc cgb egdc ecdbf cfdgba agfbe dfgebc cdgaefb gbfce | cbegf begfc ebcdgf fabge",
  "caedgf egf dcebg cfbeg edgafbc bgdf ebdfcg eacdgb gf eafbc | bgfd efgcb fg afbcegd",
  "gbfae cdabfe degc edb cbdfg ed ebdgf dbfgce baecgdf agdfcb | adcefb ed de cfbgde",
  "fdbcge defabcg fgead befda gacedf ag gdca gea cgeafb fdegc | ga fecgd ga dfegc",
  "ed efcgab edacg adcgbe acgefdb deba fcbedg agfdc bgace ecd | afdcg bceag de gcdeab",
  "facdbe dagec bfcea bcd dfcgbe cbdae bd abdf bgcefda cbegaf | dcb aecbd befac ecfdab",
  "fa fea gafc gfebd dcabge dfbaegc gacfeb abgfe baefcd bcgea | befdg gecfab cafebg agceb",
  "cebad ebdgca bd fbedacg gaefdc gadce becaf gebd cfbagd cbd | dcgfea abcgdf cdb bd",
  "cfbgdae cgfdb cabgef df bdfa bgfac gcadef dfc fcgadb egbdc | df faedgc dcegb dcgbf",
  "cbfg gecfa adfbge gfbcdea eabfcd fg bgfeca acedg fga bafce | efbgac dcfabe cebafd decag",
  "gdcbef dcfage acgde fgbea gedbac bc bgace gdaefbc ecb dacb | abdc bfgea ebfgcd adcbge",
  "gafe cfbad aedcfbg adbgce cebgfa agcbe gf gbedcf gcabf gcf | bcega begcfa gafbc feagbcd",
  "cabefg ce ecfb dcebagf gface afged fbcga afcdbg eca cegdab | aec ec gafecdb bdgcaf",
  "bgdcae cedga bdgaecf cd afegd dbac dgc efagcb gefdcb cegba | efbgca bdecgaf caegbd dgc",
  "aebgd cfageb ecdagb beagc bcfdeag dfgab de ebfdcg dge adec | ed gfebca de fdcegab",
  "ebcdagf fcga gfbaed gf dgfaec ecfad adcbef gdcef gbdce feg | dfcae fge feg fbegcda",
  "fba cegadbf fa deaf deabg fedbag dgcbf agebdc gafbd bgfeac | bfa bfa fgcbead fbedgca",
  "cdgef dgbcaf gadcb edacgb agfdc adbfce gaebcfd fa abgf dfa | gbfdac acfgd gfcda fegdc",
  "dcagbf cfda fcdbge cf bafcg bdgace adbcg agebf bcgedaf gcf | dcbegf bgdac gafcbd cgbda",
  "degfac eafcb dfacg gbcaedf gb dfbg afbgc bag bcgeda gfbdac | dgcefa dgbf bga fcgad",
  "deg fgdb feabd dg gefac fedbca eacgfbd ebacgd abedgf dfaeg | egfda gadfe edg dfbae",
  "degf fcagde cgdebaf cgf cafgd gf fadce cgfeba gcbda fcaebd | cdbag bdcag egdf dacgb",
  "fdgb bagfdc dbcaf fb abdceg fba fbeacgd geafcb afdce bgadc | bf fba dbafc gadcb",
  "aegdb fdagceb bafce fad dgabfe df cagbed fdeg aefdb gfacdb | becgad adfbe afd badfe",
  "fdbg gfabc fcabd fd abcegf gadbcfe ebcad dcf dcfbga fagdec | bagcfe gfacbe fd cagebf",
  "cgfd egdca fdaceb abegd egabcf eacfg ecbfgda dca fdcage dc | egcaf ecbdgfa abcfed dcgf",
  "efdgba cgfeda ac gabecdf efagd adcef fac cefbd gcea dagbfc | afebcdg ca bcfed ca",
  "acbfeg bg fecbgd fgdeac acebgfd gbe bagc afecg fbead begfa | agcbdfe bg fegba badegfc",
  "eadbgc edfba bfecdg acfb egfad ba bea dfceb dcaebf beagdcf | ab eafbd abe adcfgbe",
  "fbega afdce gd agcebf becgad bgdeaf fbgd gde ebgfdca efgad | cegdab cefbga fbgd geadf",
  "cag agfce gfacde gbcdaf ag gead fbgec cdefa bdafcge bdefac | cfead gca adge bdagcf",
  "dc cebfa egacfdb dcf edbfc cbdgfa fdebg gefdba cged fdecbg | dcf eafbc bgacdf dc",
  "edbfg fdacge dcgae baegcd bacfgd ecaf geabdfc ecdfg fgc cf | defcag dbfgca ebfdcga cebdga",
  "fdgec gd gfd efcbd fdagbc bedg fabedgc gaefc becadf fdbecg | gacfbd fbdcag dgbe edcbf",
  "fec dgebf fbdc efbdcga afegcd befagd fdcgeb fc egcfb cgeab | bdefgc dfegba degabfc fc",
  "cdb gdfc dc cbdega eadbf egfacb gfcebad cgbfda acbdf bagfc | dgaecb cd bafed dcb",
  "dcbga ag cgdaef fgbdeac daebc fbag cag fgcdb ebfgcd fbcgad | ag faegcdb acgdfe dfgcba",
  "dabef fa ebacfd dfa bdfec fbgdca cbfegd dbcegaf bgaed efca | gdaeb afd eadbf fa",
  "bed dgab gfced afgbedc dfbge geafb efadbc febdga cafgeb db | fgeba gdba aegfcb gfecd",
  "da gbacf becdaf ebcfgad ecad cgfbde fedgab dbfca fecbd abd | ad egbfdc bad fcbag",
  "efc bgfceda dfbcag ecbg efagd acbgf fbagec aecfg ce bfeacd | egfac ec afecgb fbeacgd",
  "aedfbc gaced fabg ab bdgfc gefbcd adb gdbac acdegbf gcfbad | ba bcgdf ebfcda bafegcd",
  "cdgfb abegdc fgeacbd feba ecafgd gebfda ef efd dbfeg bdeag | dfe egfdb agefdb bedga",
  "cagfb ef fcdgae cfe cgafdb bcedg fbdgcae bcegf feba acgfeb | gefdac egfacd cgebd feadbgc",
  "bfgedca cabfgd gbac ebdfa ag abgfd dga egfdac bdcgf gbcefd | cafged bgadf ceafgd ag",
  "gebda bc eagdbfc ebdcg cdbgfa cgb ecdgfa cefb gfdec fbgecd | dfgbac cebf dgbecf fcbgade",
  "dfbcag dafgc bfd fdgcae gebda ecafbd gfadb gfcb fb dacgbef | gbdfa dagcf dagfc fbaced",
  "cd dfebg fcdgb cadb gdeacf eafcbgd gfceab cdg abgcf dgbfca | dc fbadcg cd adbc",
  "becafd dbfa feb fb abgcef adgefc cefda bgced edcfb bedgfac | fcdabe bf feb dfab",
  "gbadfe fdcage acgef fed ed decg abgfce adcef gebfadc fabcd | ecdg afbcd afdgce fde",
  "fcaedb dgbca fdcg efgbdca fbgca befag caf bagfdc dbaegc fc | fca gfacb bgceda fc",
  "cabed fbed fd cfd fagecd bfdca bfcdaeg acfgb bedcaf dcgbea | aebfdc ebfd bdcaf fcdgea",
  "agdbfc fagbc fgdc dgacebf bcgaef fda ceabd bdfca fbgead fd | fda fdcegab bgafc edbafg",
  "cbgfa bfdgea bfdgc ga fga aecbdf gcae egbcaf bcfgdea cefab | ga fcabe fgbdc gfbac",
  "cgafe cbagdfe afbce afegdb efgda gebcda gc gdcf cag eagdcf | befca gafed eadbcg gca",
  "agfce edgcba egbac gcbf fagbde gdacebf agf cdaef gbeacf gf | fecag bgace gdfbaec bgcfdea",
  "be gaeb gdeaf fcdab cbegfd fgeacd efdab fbe cgebfda dagebf | feb dfgacbe faedcg egfbad",
  "dfcba cgfdbae gda afedcb bgca bagcfd ga gbdef eadcfg bgafd | bgfad gfebd ag efabdc",
  "edgafb dgef agbedc gf abfgec fcdgeba adfbg abdeg fga cfbda | dafecbg badfg bcagdef fag",
  "fgc cgfbe ebgaf cbfa cgedbfa cf bgced gecfab defbag fgdcae | gfc cgf gbdfea fcg",
  "cga bcadfge aefdgc edgca dafc gdafbe aefcbg agefd ca cdegb | debcg faecgb cga gac",
  "dbcaf gcadebf eafcgb dbcefa gbdf cbfdga bcg adbcg gb edacg | afecbg cbg bfcad cabfdg",
  "fd dgaeb def fgecb fdebac feadbg eabdgc dfgeb becfdga gafd | fbgce egadb bdgea fagd",
  "cedbgf dbcgf febcad dgeafcb efcagd bfge cfg bdcga dbcfe fg | gcf cbgda gcf cadfegb",
  "gfabc agc degbaf fgaecb gaefb ca cefa bedgac fedgbca gcfbd | begdca gbdcf cag eacf",
  "ebfa be fgbcd afcegd cbe febcd faced egfdcba dbface aecbgd | ceb ceb cbfadeg feab",
  "gbfad cdeabgf bdeag de afcdge ade cdbe ebacg geafbc adcbeg | cbdefga gaceb ed bdce",
  "fcedbag adfeg fadebg cbgda fdeb fba bf egdcfa gfadb cfbgae | bf fegad gabdf dgcba",
  "abde debfgca acfegd ae fgcbe dabgc gbadfc cgeba cgeabd aeg | eag bcfgdae gfebc aegbc",
  "afdeb caegfd dcgb bcafge egabfcd fgd cgfbad dgbaf fcgab gd | aebdfgc bcdg agfebcd fdabg",
  "ecbafg acdbfe bfge cfaeb cedga cfega dafgbc afg gf bcfgaed | cbdfga fg efagc geacf",
  "ecafbg adgfecb fdeac agbd cbgdf cfgbda agf ag bedcgf agcdf | ga ga fag cfdbg",
  "gcdbe cbadefg cdf dfea df gfaebc facbed cfbae bagcdf ebfdc | afde aecfb cbfdea caedfgb",
  "gcfb beafgd fdg deagc cfbed fg gacdfeb gdcbef fcebad gedfc | cdbef dgf dfg bcfdgea",
  "dgebfac eacdbf bdc abgdc adbeg cadgf cbfg cegfad gcbfda cb | cafdeg fdacge facgd bcd",
  "cdeag becf fgdbac fc gbfaced edgfc dgebaf gbfdec edgfb cgf | gafdeb daegc bcdfge egdfab",
  "aegd cgd abfcd cabgde fdegbc dg ecagb dagfbec cbegfa badcg | ecagbfd debcgf agde bacfd",
  "cfdge gb abfed bdg cbge gfedb bgfcdae cbdagf begcdf fcdega | cgbe bgd cfbgda fcedg",
  "egdfca eafdcb ecdag dbgfac gefa ag bcfadge agc gcbed dacfe | ebafcdg acefd fdcae agc",
  "afbgec edgb dafeg fegab agfdc de eda fbdgcea dfaecb fdegab | ead aed cfebad bceafg",
  "dbgc gbeaf acfebd agd afecbgd fabdc ceagfd gbfda cbfagd dg | gcdb efdacb gfdbca gbdc",
  "afcedg gbad dgecb gcefb acdbeg dg abedc dcg dabcef gbdcfea | cgdeaf beacfd cbade cgdbe",
  "ea egfdba dgceaf daec cfgbe eag befgdac fegca cadfg fabgdc | fgceb adfgc abcfgde gaefcd",
  "agdebfc dbgca egb egfd abfde agdfbe fcbade fgeabc dgbea ge | bdgca debaf aedgb fegacb",
  "efcbd ecgd fbecgd adgbf egacbf bfcgdae ebg fdebg ge dcebfa | gfceba cbdfeg eg fgceadb",
  "dc befgac cdb aced gcbfead dcgefb adfbg acgbd cabeg eacdbg | edcabg bdc dgcaeb acbgefd",
  "afgbc dbaf ebcfg ba ecfgdab adcfg bca fcaegd cgabdf gcabed | bfgce egadbc cbgaf acdbefg",
  "cagbd adg cegafd acfgebd bdaec gbfd gd gbafdc bgacf faegcb | gebacf dg gda agdbc",
  "bc cdgba adfcg ebadg cfbdae ebfgad dgbfcea cba bgec gbdace | bc cb dafgeb cab",
  "gae bfegc edfac gdca ga begdaf cgeaf edafcg bafedc cfbedga | adfcge ecdfag fabcde aecfdb",
  "cdfge db eabcf fdb bade cbfed cbfdaeg gfbdca dcbefa cgfabe | dbf cbagdef db abed",
  "efa facg beadcg gacfde cbfed dcefbag adceg fa gedbfa cfdea | agecd gcbaed afcde eacdg",
  "dbgca dfbeg fcg adbcgf bafgce fdca cgbdf gabdcfe dbecga cf | gacefb cabdg dfca fcg",
  "dbfcae gc decg ebadc cga abegf cbfaegd cbage gabfcd agdebc | edbcga gebca cebda baegdc",
  "becagd gefcdba bgaef gfadcb fgd fadc bdacg dfagb fd ecdbgf | dgf fgaeb cdaf fd",
  "egfcab dcfgea caebg ag cbeafd edfabgc gfba bcdeg acg ecafb | cfbaeg gac acgfed eabcg",
  "gbc gfbad fgbac beadgf cg fbeac gdfbce dbgcaf bgcfead cgda | gacd edfgbc cbg gafbed",
  "fgdba begcad fg gfd fdacb debfag egdba adfcbge fgbedc afeg | afdbg bdaeg badfg eagcdb",
  "cefgdb fdecga beafg agd acbd badge cgfdeba cebdg ad dacbeg | cabd cedafg cfedag fgaeb",
  "fgc cdefb beafcg dcfbg adbgfe cgad acefbgd adbfg cg afdgcb | fegcdab bagfecd gfdcb gcad",
  "cbagfe cbedgaf bfgde cfdeab gfeba df fgda dcbeg afebgd bfd | fd adfg ebgcd fcabge",
  "ebgaf ad ebacgd adfgb cadf abfdcg badgecf cdgfb bad ebcgfd | bdegcfa cfda fbaeg gbcfad",
  "adfcg dabecg gaebfcd ecfbag bgacf gdc bgdf cbfagd eadcf gd | dg cfgab fcgab agbfce",
  "ecfgdb dcgbfa fdage ecda ad ebfag dfa bfadecg fadecg cegfd | ad dgefc cdae bgdecf",
  "agcfed eabdfcg aec ce gacbd gadec geafd cefd bagdef cgafbe | ce aefbdgc egcbfa gaecfd",
  "gdace fe bdgafc efa dbafecg fgeb bdafce beadfg egdfa dgfab | ecgda fe fbgad fedabg",
  "fg bdgcefa gabed defga fbeacd bdcafg cfeg gfd edcfga fdeac | agfde fg fcbade dfgea",
  "dcgfbe egdfc gcbd dc geafd becdaf gcabfe cde efbcg gedbfca | dc fgead dgcef gdcb",
  "gdefa efadbc cfdebga adfebg eaf ebag ea adfbg cfdeg acgfdb | fgdbaec cabgfed dgafe efa",
  "fecb fcegbda dgeaf eagdbc eb dbegfc cfgbad beg gbedf fbgdc | bcef dfegb gbdfca dgcbafe",
  "befg bafde afgdc degfa cdeafbg edafbc dge eagcdb gdbafe eg | dge efbad becgda aegdbf",
  "ac adfgc cedfg bedgac cda ecfagd degbcf fecabdg afec badfg | gdfab dcgaf fgced cegafdb",
  "cda badcg edcgb geca ca bdaegc dbfaec decgbf agfbd ecdgfab | ac bdfag ca edgbfc",
  "fgac febgca fg ebacf bgfecd gfb gbcfdea badeg bfage bedfca | gbefcda fg bdfceg gcfa",
  "bcgfade ce fcge dbgcfa cdafe badgec acgfd gceadf befad edc | bagcfed ecfda fcgad dce",
  "ebacfg efbad fcbaedg age dfagc adefg cdge eacgfd ge dgfabc | geabfc cdfagb eafdgc gae",
  "abd cgbde da gdcaeb cagd baecd faceb afdebg ceagbdf egfdbc | agdc gadc gedbcaf bcafe",
  "eg bdfgec dcfbe facebg efg gabcedf dcgfe cedfab afgcd debg | ecgdf cgefbd cdgef feg",
  "eagf efbdgc dga dcefg cdgfea bcdea cdgfab ga gdeafbc ecdga | gcdae aedgc ga ecdab",
  "ga cbedg eacfdg acg eabdcf ebafgc adgf cfeda egadc dacefbg | dfag fbcage bafgce acgde",
  "gfea cgdfeb efabc agfedcb gfc afegbc gf cdfbae abgfc dcbag | caebdf beafcd caebgf baecf",
  "efd gefa gedcab dcfab cfdea ecdgafb fbdceg egdfac ef agcde | gafcde ef aefg cadfb",
  "bafecdg deafbg fadeg bga deagbc gebfc bafd efbag ba dcgeaf | gedaf ba dgbaecf ba",
  "ag dga geabfd becadf gbaecd abecd aceg bagcd cfgdb cebdgaf | egfbad aegbcfd cgae dacbe",
  "bcdgeaf gbfda afcged gfebd fa dgfcbe efab agf bdcga dafgbe | gafedb efbgda ecagfd fgdbe",
  "degafc feba fgbcde bafegcd bge adegb be dfega efadgb cgbda | dbegcfa acbgd faeb acefdg",
  "gdcfeb ea fceab fgbca adfbeg eadc cdebafg cebdf aef fecabd | cefba fae dcea efa",
  "agfde dbega fg dcfg ecadfb cegbaf adfec adecgf adebgcf agf | dgfc gcfade afbecg dcfage",
  "fbade caebg becadf fgdb gfa dafgbec fg afgeb fbeagd gaedfc | eacfbd bgeafcd fg efbad",
  "gbdacf aefd ed geadcf cegfd fcgeadb dbeacg cadgf ecgfb dge | gbacfd beacgd ecgadf cgfbda",
  "adebgf gdf cefgdba fd gcfba efad dbgeca agebd afgbd fdegbc | deaf gfbdea df dbaeg",
  "adgbf cbfg fagde facebgd gbd acdbf badegc baecdf gbfdac gb | bdagfc gcfabed fdcab cdfab",
  "dbgace cbdfg ab dfagb abef abgfde gaedf bad ecdafg gcdbeaf | ba cbaedg ba dfbga",
  "bgcade acbedgf gbef cef cdbfa ef cbefd afgecd bgdce fbcgde | ef ef fce dgecfba",
  "gbfced abegc cde acbde fcgaeb cd gebacd agcd gfabdec abdef | gdca gacd dcbae bdegafc",
  "gb facdb fedcab fgb gadebf aegfc dgcb cabdgf gbcfa eafcgdb | fegbad adfcb dafgbe fdcba",
  "gfbaed fcabde gdbfc bdeafgc dgb agfcdb cgda fcdab gfbec gd | becadf facdeb dg agbdcf",
];

const original_map = {
  abceefg: 0,
  cf: 1,
  acdeg: 2,
  acdfg: 3,
  bcdf: 4,
  abdfg: 5,
  abdefg: 6,
  acf: 7,
  abcdefg: 8,
  abcdfg: 9,
};
function countNumber_part1(ary) {
  let total = 0;
  ary.forEach((l) => {
    let output = l.split(" | ")[1];
    // console.log(output);
    output.split(" ").forEach((str) => {
      if ([2, 3, 4, 7].indexOf(str.length) !== -1) total++;
    });
  });
  return total;
}

function countNumber_part2(ary) {
  let total = 0;
  ary.forEach((l) => {
    let [patterns, output] = l.split(" | ");

    total += decode(patterns.split(" "), output.split(" "));
  });
  return total;
}

function decode(patterns, outputs) {
  //get 1,4,7,8
  let nums = [];
  let len5 = [],
    len6 = [];
  patterns.forEach((p) => {
    if (p.length === 2) nums[1] = p;
    if (p.length === 3) nums[7] = p;
    if (p.length === 4) nums[4] = p;
    if (p.length === 5) len5.push(p);
    if (p.length === 6) len6.push(p);
    if (p.length === 7) nums[8] = p;
  });

  //   console.log(len5);
  //   console.log(len6);

  const getDiffs = (short, long) => {
    let diffs = [];
    for (let i = 0; i < long.length; i++) {
      if (short.indexOf(long[i]) === -1) diffs.push(long[i]);
    }
    return diffs;
  };

  // 1 diff 7 => a
  let a = getDiffs(nums[1], nums[7])[0];
  //find 3
  nums[3] = len5.find(
    (p) => p.indexOf(nums[1][0]) !== -1 && p.indexOf(nums[1][1]) !== -1
  );

  // get b and find 9 by compare with three
  let b;
  nums[9] = len6.find((p) => {
    let diffs = getDiffs(nums[3], p);
    if (diffs.length === 1) {
      // => b
      b = diffs[0];
      return true;
    }
  });

  // a & 4 diff 9 => g
  let g = getDiffs(nums[4] + a, nums[9])[0];

  // 1 & a & g diff 3 => d
  let d = getDiffs(nums[1] + a + g, nums[3])[0];
  console.log("a=", a, "g=", g, "d=", d);
  nums[0] = len6.find((p) => p.indexOf(d) === -1);
  nums[6] = len6.find((p) => p !== nums[0] && p !== nums[9]);
  nums[5] = len5.find((p) => {
    let diffs = getDiffs(p, nums[6]);
    if (diffs.length === 1) {
      e = diffs[0];
      return true;
    }
  });
  nums[2] = len5.find((p) => p.indexOf(e) !== -1);
  nums[3] = len5.find((p) => p !== nums[2] && p !== nums[5]);
  console.log(nums);
  // adg & 3 diff 4 => b
  //   let b = diffs(a + g + nums[3], nums[4]);
  // abdg diff 5 => f

  // abdfg diff 9 => c
  // abcdfg diff 8 => e
  nums.forEach((n, i) => {
    nums[i] = n
      .split("")
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join("");
  });
  console.log(nums);
  let result = "";
  outputs.forEach((n, i) => {
    outputs[i] = n
      .split("")
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join("");
    result += nums.indexOf(outputs[i]) + "";
  });
  //   console.log(result);
  return parseInt(result);
}

console.log(countNumber_part1(small));
console.log(countNumber_part1(large));

console.log(countNumber_part2(small));
console.log(countNumber_part2(large));
