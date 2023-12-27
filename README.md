## Whack-A-Mole Game

### Project Description

This Whack-A-Mole game is an interactive, browser-based application that offers a fun and engaging way to test reflexes and timing. 
Players whack moles as they pop out of their holes, aiming to achieve the highest possible score within a set time limit.

### Key Features

* ** Random Mole Pop-up** --> Moles appear at random from one of several holes 
* **Timed Gameplay** --> The game is time-limited
* **Score Tracking** --> Each successful whack increases the player's score
* **Countdown Timer** --> Keeps players informed about the remaining game time
* **Start/Restart Functionality** --> Players can start a new game or restart the current game using the start button
* **Interactive Moles** --> When a mole is hit, its image changes to indicate a successful hit (becomes temporarily unclickable to prevent score manipulation)
* **Dynamic Difficulty** --> The appearance time of the moles is randomized

### Technical Implementation

* Built using HTML, CSS, and JavaScript, with a focus on DOM manipulation and event handling
* Utilizes `Math.random()` and `Math.floor()` to determine the random appearance of moles
* Implements `setTimeout()` and `setInterval()` for timing control, including mole appearance and game countdown
* ES6 arrow functions 
* The game's logic ensures that the same hole is not selected consecutively for mole appearance
