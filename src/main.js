import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Journal from './journal.js';

$(document).ready(function() {
  $('form#userTextForm').submit(function(event) {
    // let vowelCounter = 0
    // let consonentCounter = 0
    const inputName = $('input#userNameInput').val();
    const inputText = $('textarea#enterTextHere').val();
    const userEntry = new Journal (inputName, inputText);
    // const userArray = userEntry.inputText.split(" ");
    //the function or prototype to loop through text to find counts
    // the function to show and display all things
    //remember to remove alerts and console logs
    console.log(userEntry.findVowel('u'));
    console.log(userEntry.findVowel('g'));
    console.log(userEntry.findConsonant('b'));
    console.log(userEntry.findConsonant('o'));
    console.log(userEntry);
    event.preventDefault();
  });
});