let wordsDictionary = [
	"html",
	"css",
	"javascript",
	"jquery",
	"ajax",
	"react",
	"angular",
	"node js",
	"express js",
	"redux",
	"chart js",
	"bootstrap",
	"php",
	"yii",
	"laravel",
	"codigniter",
	"mysql",
	"mongo db",
	"asp .net",
	"java",
	"python",
	"django",
	"ruby",
	"c++",
	"webpack",
	"hammer js",
	"http",
	"server",
	"programming",
	"artificial inteligence",
	"development",
	"website",
	"app",
	"frontend",
	"backend",
	"cross platform",
	"xml",
	"api",
	"algorithm",
	"ssl",
	"enrypt",
	"decrypt",
	"code",
];

function escapCharofLetter(letter) {
	let validChars = /[a-z1-9]/i
	if(!validChars.test(letter)) letter = "\\"+letter;
	return letter;
}

function escapCharofWord(word) {
	return word
		.split("")
		.map(letter => escapCharofLetter(letter))
		.join("")
}

function letterCheck(letter) {
  return (new RegExp(escapCharofLetter(letter), "ig"))
}

function search(dict, text, limit) {
	let trimedText = text.trim();
	if(trimedText.length === 0) return {found:false, matches:[]};
	// This is to store the found matches
  let matches1 = [];
  let matches2 = [];
  let matches3 = [];
  let matches4 = [];
	// This is to avoid dublicated matches
	function push1(word) {if(!matches1.includes(word)) matches1.push(word)}
	function push2(word) {if(!matches2.includes(word)) matches2.push(word)}
	function push3(word) {if(!matches3.includes(word)) matches3.push(word)}
	function push4(word) {if(!matches4.includes(word)) matches4.push(word)}

  let wordPattern = new RegExp(escapCharofWord(trimedText), 'i')
  let textArray = trimedText.split("");

  let break1 = false;
  let break2 = false;
  let break3 = false;
  let break4 = false;

  let len = dict.length;
  let count = 0;
	while (count < len) {
    const word = dict[count];
    // Level 1
    if (!break1) {
      if(matches1.length <= limit){
        if (word === trimedText) push1(word);
      } else {
        break1 = true;
      }
    }
    // Level 2
    if (!break2) {
      if(matches2.length <= limit){
        if (word.toLocaleLowerCase().includes(trimedText.toLocaleLowerCase())) push2(word)
      } else {
        break2 = true;
      }
    }
    // Level 3
    if (!break3) {
      if(matches3.length <= limit){
        if (wordPattern.test.word) push3(word)
      } else {
        break3 = true;
      }
    }
    // Level 4
    if (!break4) {
      if (matches4.length <= limit) {
        if(textArray.every(letter => letterCheck(letter).test(word))) push4(word);
      } else {
        break4 = true;
      }
    }
    if (break1 && break2 && break3 && break4) break
    count++;
  }
	// Concating the matches
	let matches = [];
	function push(word) {if(!matches.includes(word)) matches.push(word)}
	matches1.forEach(word=> {if(!matches.length <= limit) push(word)})
	matches2.forEach(word=> {if(!matches.length <= limit) push(word)})
	matches3.forEach(word=> {if(!matches.length <= limit) push(word)})
	matches4.forEach(word=> {if(!matches.length <= limit) push(word)})
	// return found matches
	return (matches.length > 0) ? {found:true, matches} : {found:false, matches};
}

// console.log(search("tmlh"));
// console.log(search("cs"));
// console.log(search("sscro"));
// console.log(search("xyz"));
// console.log(search("  "));
// console.log(search(" c+ "));

