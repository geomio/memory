export default function Journal(name, entry) {
  this.name = name;
  this.entry =entry;
}

Journal.prototype.testLog = function() {
  return console.log("this is a test message")
}

Journal.prototype.findVowel = function(testLetter) {
  const vowel = ["a", "e", "i", "o","u"]
  if (vowel.includes(testLetter)) {
    return true
  } else {
    return false
  }
}

Journal.prototype.findConsonant = function(testLetter) {
  const consonant = ["b", "c", "d", "f","g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
  if (consonant.includes(testLetter)) {
    return true
  } else {
    return false
  }
}