  // make input form felids
  
  
  Description: Journal(name, date, entry)
  Test:"It should make a new object called journal"
  Code: const newJournal = Journal()
  Expected Output:
  
  
  Description: Journal.prototype.testLog = function(){}
  Test: Will log a test message
  Code:
  Expected Output:{"this is a test message"}
  
  Description: Journal.prototype.findVowel = function(){}
  Test: Will count user entry and find and show number of vowels.
  Code:
  Expected output "This String" = 2
  
<!--   
  Test: "It should return 1 if a passage has just one word."
  Code:
  const text = "hello";
  wordCounter(text);
  Expected Output: 1```
   -->
   
   Test: it should return true if letter is a vowel
   Code:
   findVowel("a")
   findVowel("e")
   findVowel("i")
   findVowel("o")
   findVowel("u")
   Expected Output: true
   
   Test: it should return false if letter is not a vowel
   Code:findVowel("b")
   Expected Output: false
   
   Test: it should return true if letter is consonant.
   code:
   findConsonant("b")
   findConsonant("c")
   Expected Output: true
   
   Test: it should return false if letter is not a consonant.
   code:
   findConsonant("a")
   findConsonant("e")