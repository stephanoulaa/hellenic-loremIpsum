var myWords = [ 'olive oil', 'tzatziki', 'ouzo', 'spanakopita'];

//function getMyWords() {
//    return Math.floor(Math.random() * (myWords.length) );
//}
//var randomIndex = getMyWords();
// my pre-existing words will be randomly printed with the var myOutput
//var myOutput = myWords[randomIndex];

// join myWords together as a string
var joinMyWords = myWords.join(' ');

// retrieves textarea element
var textarea = document.getElementById('output');



// QUESTION 1 VARIABLES
var pastitsio = document.getElementById('pastitsio');
var moussaka = document.getElementById('moussaka');

// only call this when user clicks "Ready" button
function printToTextarea() {
    
    //adds my pre-existing array to empty textarea
    textarea.innerHTML = joinMyWords;
    
    // QUESTION 1: add in user choice
    if(pastitsio.checked) {
      textarea.innerHTML += ' ' + pastitsio.value;
    }else if(document.getElementById('moussaka').checked) {
      textarea.innerHTML += ' ' + moussaka.value;
    }

}