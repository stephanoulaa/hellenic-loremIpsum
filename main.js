var myWords = [ 'olive oil', 'feta', 'tzatziki', 'ouzo', 'greek yogurt', 'lamb', 'did you know the root of that word is Greek', 'xristos anesti', 'alithos anesti', 'Yiayia', 'Pappou', 'ela vre', 'kane oti nomizeis', 'Mykonos', 'pita', 'mediterranean', 'Thessaloniki', 'meli', 'Sparta', 'greek', 'John Stamos', 'mastiha', 'kalamatiano', 'Hellenic', 'galaktoboureko', 'tiropita', 'voula', 'toula', 'roula', 'soula', 'kalamata olives', 'melomakarona', 'kala xristouyenna', 'nick nick nick nick nick nick nick nick niko', 'lamb', 'pastitsio', 'moussaka', 'souvlaki', 'How Do You Pronounce Gyro', 'lemon', 'oregano', 'cinnamon', 'honey', 'Corfu', 'Milos', 'Crete', 'your life must be exactly like My Big Fat Greek Wedding', 'Monastiraki', 'Plaka', 'oxi', 'tiganites patates', 'soco freta', 'freddo', 'frappe', 'John Stamos', 'kafeneio', 'Zembekiko', 'Retsina', 'bouzouki', 'kalamatiano', 'cinnamon', 'calamari', 'octopodi', 'Kalamata', 'koulourakia' ];

var myHungryWords = [ 'extra tzatziki', 'tiropita', 'frappe me yala', 'honey', 'tiganites patates', 'soco freta', 'freddo', 'frappe', 'melomakarona', 'John Stamos' ];

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
var paragraph1 = document.getElementById('paragraph1');
var paragraph2 = document.getElementById('paragraph2');
var paragraph3 = document.getElementById('paragraph3');

// QUESTION 2 VARIABLES
var hungry = document.getElementById('hungry');


// only call this when user clicks "Ready" button
function printToTextarea() {
    
    // QUESTION 1: add in user choice
    if(paragraph1.checked && hungry.checked == false) {
        //console.log("print 1 paragraph");
        textarea.innerHTML += myWords.join(' ');
    } else if(paragraph1.checked && hungry.checked) {
        //console.log("print 1 paragraph AND food");
        textarea.innerHTML += myWords.join(' ') + myHungryWords.join(' ');
    } else if(paragraph2.checked && hungry.checked == false) {
        //console.log("print 2 paragraphs");
        textarea.innerHTML += myWords.join(' ') + '  \n    ' + myWords.join(', ');
    } else if(paragraph2.checked && hungry.checked) {
        //console.log("print 2 paragraphs AND food");
        textarea.innerHTML += myWords.join(' ') + myHungryWords.join(' ') + '  \n    ' + myWords.join(', ') + myHungryWords.join(' ') + '  \n    ';
    } else if(paragraph3.checked && hungry.checked == false) {
        //console.log("print 3 paragraphs");
        textarea.innerHTML += myWords.join(' ') + '  \n    ' + myWords.join(', ') + '  \n    ' + myWords.join(' ');
    } else if(paragraph3.checked && hungry.checked) {
        //console.log("print 3 paragraphs AND food");
        textarea.innerHTML += myWords.join(' ') + myHungryWords.join(' ') + '  \n    ' + myWords.join(', ') + myHungryWords.join(' ') + '  \n    ' + myWords.join(' ') + myHungryWords.join(' ');
    }
    
}
















