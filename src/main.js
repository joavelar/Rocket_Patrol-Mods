/*
Name: Jose Velarde-Ruiz
Project Title: RocketPatrol-mods
Date: 04/18/2022
Time It Took: Roughly 11 hrs 

Breakdown:
* Implement a simultaneous two-player mode (30)
- I implemented two player mode, that share score.
- had help from william morales wrmorale

* Implement a new timing/scoring mechanism that
adds time to the clock for successful hits (20)
- I made the time increase for when one of the players
hits a spaceship.

* Create new artwork for all of the in-game assets
(rocket, spaceships, explosion) (20)
- I changed the sprites for all of the spaceships, and
rockets, and I changed the color of the explosion to make
it feel more like my own.

* Create a new title screen 
(e.g., new artwork, typography, layout) (10)
- I changed the color of the main title screen,
also changed the typograghy, and changed the color
of the strings.

* Display the time remaining (in seconds) on the screen (10)
- I made the time be shown on the right side of the play
scene.
- had help from william morales wrmorale

* Create a new scrolling tile sprite for the background (5)
- Made a new tile sprite and added it to the background of
my game.

* Allow the player to control the Rocket after it's fired (5)
- I allowed the player to control the rocket after the rocket
is fired, however the player controls it at a reduced speed.
*/ 
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;

// for second player
let keyP, keyL2, keyR2;