export default function Journal(name, date, entry) {
  this.name = name;
  this.date = date;
  this.entry =entry;
};

Journal.prototype.testLog = function() {
  return console.log("this is a test message")
};

Journal.prototype.findVowel = function() {
  
};