var myWords = [ 'olive oil', 'feta', 'tzatziki', 'ouzo', 'greek yogurt', 'lamb', 'did you know the root of that word is Greek', 'xristos anesti', 'alithos anesti', 'Yiayia', 'Pappou', 'ela vre', 'kane oti nomizeis', 'Mykonos', 'pita', 'mediterranean', 'Thessaloniki', 'meli', 'Sparta', 'greek', 'John Stamos', 'mastiha', 'kalamatiano', 'Hellenic', 'voula', 'toula', 'roula', 'soula', 'kalamata olives', 'melomakarona', 'kala xristouyenna', 'nick nick nick nick nick nick nick nick niko', 'lamb', 'pastitsio', 'moussaka', 'souvlaki', 'How Do You Pronounce Gyro', 'lemon', 'oregano', 'cinnamon', 'honey', 'Corfu', 'Milos', 'Crete', 'your life must be exactly like My Big Fat Greek Wedding', 'Monastiraki', 'Plaka', 'oxi', 'tiganites patates', 'John Stamos', 'kafeneio', 'Zembekiko', 'Retsina', 'bouzouki', 'kalamatiano', 'Kalamata' ];

var myHungryWords = [ 'extra tzatziki', 'tiropita', 'frappe me yala', 'honey', 'tiganites patates', 'soco freta', 'freddo', 'frappe', 'cinnamon', 'calamari', 'octopodi', 'melomakarona', 'galaktoboureko', 'tiropita', 'koulourakia', 'soco freta', 'freddo', 'frappe', 'John Stamos' ];

// join myWords and myHungryWords together each as a string
var joinMyWords = myWords.join(' ');
var joinHungryWords = myHungryWords.join(' ');

// add variables for p tags, spacing
var openingTag = '<p>';
var closingTag = '</p>';
var paragraphSpace = '  \n    ';

// retrieves textarea element
var textarea = document.getElementById('output');


// QUESTION 1 VARIABLES
var paragraph1 = document.getElementById('paragraph1');
var paragraph2 = document.getElementById('paragraph2');
var paragraph3 = document.getElementById('paragraph3');

// QUESTION 2 VARIABLES
var hungry = document.getElementById('hungry');

// QUESTION 3 VARIABLES
var ptags = document.getElementById('ptags');
var ptagsNo = document.getElementById('ptagsNo');


// only call this when user clicks "Ready" button
function printToTextarea() {
    
    
    
    if (paragraph1.checked && hungry.checked && ptags.checked) {
        // print 1 paragraph, plus hungry, plus p tags
        textarea.innerHTML += openingTag + joinMyWords + joinHungryWords + closingTag;
        
    } else if (paragraph1.checked && hungry.checked && ptagsNo.checked) {
        // print 1 paragraph, plus hungry
        textarea.innerHTML += joinMyWords + joinHungryWords;
        
    } else if (paragraph1.checked && hungry.checked == false && ptags.checked) {
        // print 1 paragraph, plus p tags
        textarea.innerHTML += openingTag + joinMyWords + closingTag;
        
    } else if (paragraph1.checked && hungry.checked == false && ptagsNo.checked) {
        // print 1 paragraph
        textarea.innerHTML += joinMyWords;
        
    } else if (paragraph2.checked && hungry.checked && ptags.checked) {
        // 2 paragraphs, plus hungry, plus p tags
        textarea.innerHTML += openingTag + joinMyWords + joinHungryWords + closingTag + paragraphSpace + openingTag + joinMyWords + joinHungryWords + closingTag;
        
    } else if (paragraph2.checked && hungry.checked && ptagsNo.checked) {
        // print 2 paragraphs, plus hungry
        textarea.innerHTML += joinMyWords + joinHungryWords + paragraphSpace + joinMyWords + joinHungryWords;
        
    } else if (paragraph2.checked && hungry.checked == false && ptags.checked) {
        // print 2 paragraphs, plus p tags  
        textarea.innerHTML += openingTag + joinMyWords + closingTag + paragraphSpace + openingTag + joinMyWords + closingTag;
        
    } else if (paragraph2.checked && hungry.checked == false && ptagsNo.checked) {
        // print 2 paragraphs
        textarea.innerHTML += joinMyWords + paragraphSpace + joinMyWords;
        
    } else if (paragraph3.checked && hungry.checked && ptags.checked) {
        // 3 paragraphs, plus hungry, plus p tags
        textarea.innerHTML += openingTag + joinMyWords + joinHungryWords + closingTag + paragraphSpace + openingTag + joinMyWords + joinHungryWords + closingTag + paragraphSpace + openingTag + joinMyWords + joinHungryWords + closingTag;
        
    } else if (paragraph3.checked && hungry.checked && ptagsNo.checked) {
        // print 3 paragraphs, plus hungry
        textarea.innerHTML += joinMyWords + joinHungryWords + paragraphSpace + joinMyWords + joinHungryWords + paragraphSpace + joinMyWords + joinHungryWords;
        
    } else if (paragraph3.checked && hungry.checked == false && ptags.checked) {
        // print 3 paragraphs, plus p tags     
        textarea.innerHTML += openingTag + joinMyWords + closingTag + paragraphSpace + openingTag + joinMyWords + closingTag + paragraphSpace + openingTag + joinMyWords + closingTag;
        
    } else if (paragraph3.checked && hungry.checked == false && ptagsNo.checked) {
        // print 3 paragraphs
        textarea.innerHTML += joinMyWords + paragraphSpace + joinMyWords + paragraphSpace + joinMyWords;
        
    }
}



