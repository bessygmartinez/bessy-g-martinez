let wordInterval;
let currentWord = 0;
let words = [];
let wordArray = [];

function startWords () {
  try {
    words = document.getElementsByClassName('word');

    currentWord = 0;
    wordArray = [];
    
    words[currentWord].style.opacity = 1;
    for (let i = 0; i < words.length; i++) {
      splitLetters(words[i]);
    }
    
    changeWord();
    clearInterval(wordInterval);
    wordInterval = setInterval(changeWord, 3500);
  } catch (error) {
    console.log("No words found!");
  }
}

function changeWord() {
  let cw = wordArray[currentWord];
  let nw = currentWord === words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (let i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (let i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord === wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*70);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*70));
}

function splitLetters(word) {
  let content = word.innerText;
  word.innerText = '';
  let letters = [];
  for (let i = 0; i < content.length; i++) {
    let letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerText = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}