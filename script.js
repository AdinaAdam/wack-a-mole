/*
 *querySelector()
 *querySelectorAll()
 *cum se foloseste forEach()
 *Math.floor(), Math.random()
 *'return' - keyword 
 *'if' statements
 *classList.remove()/ .add()
 *setTimeout(), setInterval()
 *ES6 arrow functions vs regular functions
 * metodele: bind(), call(), apply() --> intrebari frecvente la interviu!!! -- RESEARCH! --> MAI SMPLU CU SINTAXA NOUA DE ES6 arrow functions!
 */

/* 
? document.querySelectorAll('hole'); --> va crea o lista de noduri
? ca un array simplificat --> se vor selecta toate elementele cu clasa hole
? am salvat elementele selectate in variabila holes
 */

// ? var declarate cu const nu isi schimba valoarea si sunt asignate la prima incarcare a paginii - sunt selectii
const holes = document.querySelectorAll('.hole');

// ? afisare lista de noduri NodeList - ar trebui sa arate 6 elemente in consola
//* console.log(holes);
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const countdownBoard = document.querySelector('.countdown');
const startButton = document.querySelector('.startButton');


// ? var declarate global - global scope; vizibile in intreaga aplicatie
let lastHole;
let timeUp = false;
// ? 20000 milisecunde = 20 secunde
let timeLimit = 20000;
let score = 0;
let countdown;

function pickRandomHole(holes){
  const randomHole = Math.floor(Math.random()* holes.length);
  // * Math.random()* holes.length --? va alege un nr aleatoroiu intre 1-6 -- sunt 6 gauri
  // *  Math.floor() --> nr aleatoriu poate fi si zecimala si math.floor rotunjeste in jos zecimala --> numeree alese intre 0-5 --> primul element din lista de noduri este 0
  const hole = holes[randomHole];

  if(hole===lastHole){
    return  pickRandomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function popOut(){
  // ? cat timp va sta afisata cartita in milisecunde
  const time = Math.random() * 1300 + 400;
  // ? let si const sunt variabile block scope!!! => exista doar intre {} => pot sa am 2 var const cu acelasi nume dar in blocuri diferite
  const hole = pickRandomHole(holes);

  // ? adaug clasa up - dupa ce s-a ales o gaura random
  // ? clasa up din css --> va face cartita sa apara; initial ea este ascunsa
  hole.classList.add('up');

  // ? setez un interval --> cat timp sa fie afisata cartita
  // ? functia setTimeout are ca parametrii --> o functie si variabila time, delcarata pe randul 53 - cat timp sta afisata cartita
  // ? in corpul functiei facem sa dispara cartita --> scoatem clasa up
  setTimeout(function(){
    // ? scoatem clasa up --> o sa dispara cartita
    hole.classList.remove('up');
    if(!timeUp) popOut();
    // ? daca var timeUp (declarata pe randul32 e falsa-- adica daca are valoarea true, pt ca initial are val false --> se va apela din nou functia popOut --> care va afisa o cartita in gaura random cu un interval de timp, se va aaduga din nou clasa up si iar va porni cronometrul cu setTimeout -- se creeaza un loop infinit )
  }, time);
}
// popOut();

function startGame(){
  countdown = timeLimit/1000;
  scoreBoard.textContent = 0;
  scoreBoard.style.display = 'block';
  countdownBoard.textContent = countdown;
  timeUp = false;
  score = 0;
  popOut();
  setTimeout(function(){
      timeUp = true;
  }, timeLimit);

  let startCountdown = setInterval(function(){
      countdown = countdown - 1;
      countdownBoard.textContent = countdown;
      if(countdown < 0){
        countdown = 0;
        clearInterval(startCountdown);
        countdownBoard.textContent = "Time's up! Thank's for playing!";
      }
  }, 1000);
}

startButton.addEventListener('click', startGame);

function whack(event){
  score++;
  this.style.backgroundImage = 'url("assets/yoda2.png")';
  // ? face disable la restul interactiunilor cu mouse => nu pot sa dau click de mai multe ori pe aceiasi cartita
  this.style.pointerEvents = 'none';
  setTimeout(() => {
    this.style.backgroundImage = 'url("assets/yoda1.png")';
    // ? se poate face click doar o data pe cartita --> scorul nu se va adauga decat o data pe cartita ochita
    this.style.pointerEvents = 'all';
  }, 800);
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', whack));




