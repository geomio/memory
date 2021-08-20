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
  Code:
  findVowel("b")
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
   
  Test: "It should return true if  vowel is upper or lower case"
  Code:  
  findVowel("A")
  findVowel("E")
  Expected Output: true

  Test: "It should return false if consonant is upper or lower case"
  Code:  
  findVowel("B")
  Expected Output: false
  
  Test: "It should return true if  consonant is upper or lower case"
  Code:  
  findConsonant("B")
  findConsonant("C")
  Expected Output: true

  Test: "It should return false if vowel is upper or lower case"
  Code:  
  findVowel("A")
  Expected Output: false

  Test: "it should count user consonants 
  Code:
  findVowelConsonantCount("Cat")
  Expected Output: Consonants count = 2
  
  Test: "it should count user vowel
  Code:
  findVowelConsonantCount("Cat")
  Expected Output: Vowel Count = 1
  
  Test: "it should count user words
  Code:
  findVowelConsonantCount("Cat")
  Expected Output: Word Count = 1
  
  Test: "It should display up to 8 words of user text"
  Code:
  teaserOutput("here are words one two three this is a string that is so long")
  Expected Output: it will show user "here are words one two three this is"