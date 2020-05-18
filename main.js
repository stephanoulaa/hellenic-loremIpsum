var myWords = [ 'olive oil', 'feta', 'den pistevo', 'tzatziki', 'ouzo', 'spanakopita', 'french fries', 'extra tzatziki', 'greek yogurt', 'lamb', 'frappe me yala', 'xristos anesti', 'alithos anesti', 'yiayia', 'pappou', 'ela vre', 'kane oti nomizeis', 'Mykonos', 'pita', 'mediterranean', 'Thessaloniki', 'meli', 'Sparta', 'greek', 'John Stamos', 'mastiha', 'kalamatiano', 'ela', 'hellenic', 'galaktoboureko', 'tiropita', 'voula', 'toula', 'roula', 'soula', 'kalamata olives', 'melomakarona', 'kala xristouyenna', 'nick nick nick nick nick nick nick nick niko', 'pastitsio', 'moussaka', 'souvlaki', 'How Do You Pronounce Gyro', 'lemon', 'oregano', 'cinnamon', 'honey', 'Corfu', 'Milos', 'Lesvos', 'Crete', 'euro', 'Monastiraki', 'Plaka', 'oxi', 'tiganites patates', 'soco freta', 'freddo', 'frappe', 'cafe elliniko', 'i\'m a fun thea', 'retsina', 'vanilia', 'bouzouki', 'kalamatiano', 'cinnamon', 'calamari', 'octopodi', 'Kalamata' ];

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
    } else if(document.getElementById('moussaka').checked) {
      textarea.innerHTML += ' ' + moussaka.value;
    }
    

}