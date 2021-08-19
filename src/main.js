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
    console.log(inputName)
    console.log(inputText)
    
    // inputText.toLowerCase();
    const userEntry = new Journal(inputName, inputText);
    $("#outputUserText").html(inputText)
    $("#userNameOutput").html(inputName)
    $("#userNameShow").show()
    // const userArray = userEntry.inputText.split(" ");
    //the function or prototype to loop through text to find counts
    // the function to show and display all things
    //remember to remove alerts and console logs
    // console.log(userEntry.findVowel('U'));
    // console.log(userEntry.findVowel('G'));
    // console.log(userEntry.findConsonant('B'));
    // console.log(userEntry.findConsonant('O'));
    userEntry.findLetterCount()
    $("#vowelNumber").html(userEntry.vowelCount)
    $("#consonantsNumber").html(userEntry.consonantCount)
    $("#wordNumber").html(userEntry.wordCount)
    console.log(userEntry);
    
  });
});