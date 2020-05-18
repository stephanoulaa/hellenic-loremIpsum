Questions:
    - how many paragraphs
    - another question
    - option for <p> tags


Old Code:

<div id="question1">
    <p>Favorite Comfort Food?</p>
    <input type="radio" id="pastitsio" name="question1" value="pastitsio">
    <label for="pastitsio">Pastitsio</label>
    <br>
    <input type="radio" id="moussaka" name="question1" value="moussaka">
    <label for="moussaka">Moussaka</label>
</div>

<div id="question2">
    <p>What are you topping your dinner off with?</p>
    <input type="radio" id="oregano" name="question2" value="oregano">
    <label for="oregano">Oregano</label>
    <br>
    <input type="radio" id="lemon" name="question2" value="lemon">
    <label for="lemon">Lemon</label>
</div>

<div id="question3">
    <p>Where are you drinking Ouzo on the beach this Summer?</p>
    <input type="radio" id="santorini" name="question3" value="santorini">
    <label for="santorini">Santorini</label>
    <br>
    <input type="radio" id="milos" name="question3" value="milos">
    <label for="milos">Milos</label>
    <br>
    <input type="radio" id="zakynthos" name="question3" value="zakynthos">
    <label for="zakynthos">Zakynthos</label>
</div>

<div id="question4">
    <p>How many times do you get asked if your life is similar to "My Big Fat Greek Wedding"?</p>
    <input type="radio" id="malaka" name="question4" value="malaka">
    <label for="malaka">Lol too many times</label>
    <br>
    <input type="radio" id="malakaki" name="question4" value="malakaki">
    <label for="malakaki">I'm uncomfortable with this question...</label>
</div>

<div id="question5">
    <p>Want to add some paragraph tags?</p>
    <input type="radio" id="yes-tags" name="question5" value="</p>">
    <label for="yes-tags">Yes!</label>
    <br>
    <input type="radio" id="OXI" name="question5" value="OXI">
    <label for="OXI">OXI</label>
</div>


// QUESTION 1 VARIABLES
var pastitsio = document.getElementById('pastitsio');
var moussaka = document.getElementById('moussaka');

// QUESTION 2 VARIABLES
var oregano = document.getElementById('oregano');
var lemon = document.getElementById('lemon');

// QUESTION 3 VARIABLES
var santorini = document.getElementById('santorini');
var milos = document.getElementById('milos');
var zakynthos = document.getElementById('zakynthos');

// QUESTION 4 VARIABLES
var malaka = document.getElementById('malaka');
var malakaki = document.getElementById('malakaki');

// QUESTION 5 VARIABLES
var yesTags = document.getElementById('yes-tags');
var noTags = document.getElementById('OXI');




the function:

 //adds my pre-existing array to empty textarea
    textarea.innerHTML = joinMyWords;
    
    // QUESTION 1: add in user choice
    if(pastitsio.checked) {
      textarea.innerHTML += ' ' + pastitsio.value;
    } else if(document.getElementById('moussaka').checked) {
      textarea.innerHTML += ' ' + moussaka.value;
    }
    
    // QUESTION 2: add in user choice
    if(oregano.checked) {
      textarea.innerHTML += ' ' + oregano.value;
    } else if(document.getElementById('lemon').checked) {
      textarea.innerHTML += ' ' + lemon.value;
    }
    
    // QUESTION 3: add in user choice
    if(santorini.checked) {
      textarea.innerHTML += ' ' + santorini.value;
    } else if(document.getElementById('milos').checked) {
      textarea.innerHTML += ' ' + milos.value;
    } else if(document.getElementById('zakynthos').checked) {
      textarea.innerHTML += ' ' + zakynthos.value;
    }
    
    // QUESTION 4: add in user choice
    if(malaka.checked) {
      textarea.innerHTML += ' ' + malaka.value;
    } else if(document.getElementById('malakaki').checked) {
      textarea.innerHTML += ' ' + malakaki.value;
    }
    
    // var textarea2 = textarea.innerHTML;
    
    // QUESTION 5: add in user choice
    if(yesTags.checked) {
        // add: beginning with unshift, end with push
        textarea.innerHTML += yesTags.value;
        // console.log("yas tags");
    } else if(document.getElementById('OXI').checked) {
        textarea.innerHTML += ' ' + noTags.value;
        // console.log("nah tags");
    }
























