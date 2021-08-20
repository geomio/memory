
export default function Journal(name, entry) {
  this.name = name;
  this.entry = entry;
  this.wordCount = 0;
  this.vowelCount = 0;
  this.consonantCount = 0;
  this.teaser  = ""
}

Journal.prototype.testLog = function() {
  return console.log("this is a test message")
}

Journal.prototype.findVowel = function(testLetter) {
  const vowel = ["a", "e", "i", "o","u"]
  if (vowel.includes(testLetter.toLowerCase())) {
    return true
  } else {
    return false
  }
}

Journal.prototype.findConsonant = function(testLetter) {
  const consonant = ["b", "c", "d", "f","g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
  if (consonant.includes(testLetter.toLowerCase())) {
    return true
  } else {
    return false
  }
}

Journal.prototype.findLetterCount = function() {
  let userInputTextArray = this.entry.split(" ")
  let vowelCounter = 0
  let consonantCounter = 0
  this.wordCount = userInputTextArray.length
  for (let index = 0; index < userInputTextArray.length; index++) {
    const word = userInputTextArray[index];
    const letterArray = word.split("")
    letterArray.forEach(letter => {
      if (this.findConsonant(letter)){
       consonantCounter ++
      } else if ( this.findVowel(letter)) {
        vowelCounter ++
      }
    }); 
  }
  this.vowelCount = vowelCounter
  this.consonantCount = consonantCounter
}

Journal.prototype.teaserOutput = function() {
  let userTextShow = this.entry.split(" ")
  if ( userTextShow.length >= 7) {
    userTextShow.length = 8
    this.teaser = userTextShow.join(" ")
  } else {
    this.teaser = userTextShow.join(" ")
  }
}
