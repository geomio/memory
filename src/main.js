import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Journal from './journal.js';

$(document).ready(function() {
  $('form#userTextForm').submit(function(event) {
    event.preventDefault();
    const inputName = $('input#userNameInput').val();
    const inputText = $('textarea#enterTextHere').val();
    const userEntry = new Journal(inputName, inputText);
    userEntry.teaserOutput()
    $("#outputUserText").html(userEntry.teaser)
    $("#userNameOutput").html(inputName)
    $("#userNameShow").show()
    userEntry.findLetterCount()
    $("#vowelNumber").html(userEntry.vowelCount)
    $("#consonantsNumber").html(userEntry.consonantCount)
    $("#wordNumber").html(userEntry.wordCount)
    $("#countList").show()
    console.log(userEntry);
    
  });
});