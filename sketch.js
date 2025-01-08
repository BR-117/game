/*

The Game Project Part 4

Game interaction

*/

//delcared variables 
var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isPlummeting;
var isFalling;

var collectable;

var trees_x;
var treePos_y;

var cameraPosX;

var lives;

var wrongWay;

var collectables = [
	{ x_pos: -950, y_pos: 415, size: 22, isFound: false },
    { x_pos: 120, y_pos: 415, size: 22, isFound: false },
    { x_pos: 570, y_pos: 415, size: 22, isFound: false },
    { x_pos: 690, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 810, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 930, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 1110, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 1250, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 1300, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 1350, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 1400, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 1450, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 1500, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 1550, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 1600, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 1650, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 1700, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 1750, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 1910, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 1940, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 1970, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 2100, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 2140, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 2180, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 2220, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 2260, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 2300, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 2340, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 2380, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 2420, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 2460, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 2500, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 2540, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 2580, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 2620, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 2660, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 2700, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 2740, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 2780, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 2920, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 2960, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 3000, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 3040, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 3080, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 3120, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 3160, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 3200, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 3240, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 3280, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 3320, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 3360, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 3400, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 3440, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 3480, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 3620, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 3680, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 3740, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 3800, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 3980, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 4120, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 4160, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 4200, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 4240, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 4400, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 4480, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 4560, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 4640, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 4720, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 5340, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 5420, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 5500, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 5580, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 5660, y_pos: 415, size: 22, isFound: false },
	{ x_pos: 5720, y_pos: 415, size: 22, isFound: false },


];

var canyons = [
    { x_pos: 1000, width: 200 },
	{ x_pos: 1135, width: 200 },
	{ x_pos: 1800, width: 200 },
	{ x_pos: 2000, width: 200 },
	{ x_pos: 2800, width: 200 },
	{ x_pos: 3500, width: 200 },
	{ x_pos: 3870, width: 200 },
	{ x_pos: 4000, width: 200 },
	{ x_pos: 4270, width: 200 },
	{ x_pos: 4900, width: 200 },
	{ x_pos: 5200, width: 200 },
	{ x_pos: 5770, width: 200 },
	{ x_pos: 5900, width: 200 },
];

var game_score;

var flagpole = {
    x_pos: 6000,
    isReached: false,
};

var jumpSound;
var coinSound;
var canyonFall;
var musicStarted = false;
var win;
var loss;

var treasure = [
	{ x_pos: -1000, y_pos: 415, size: 22, isFound: false },
]

//setup is used to setup the game characters functionality, items as well as the map.
function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	lives = 3;

	musicStarted = false;

	startGame();
}


function preload() {
    // Load your character image
    characterImg = loadImage("char_life.png");

	soundFormats('mp3','wav');
    
    //load your sounds here
    jumpSound = loadSound('assets/jump.wav');
    jumpSound.setVolume(0.8);

	coinSound = loadSound('assets/coin.mp3');
	coinSound.setVolume(0.07);

	canyonFall = loadSound('assets/waterdrop.wav');
	canyonFall.setVolume(0.4);

	music = loadSound('assets/music.mp3');
	music.setVolume(0.15);

	win = loadSound('assets/win.mp3');
	win.setVolume(0.2);

	loss = loadSound('assets/loss.mp3');
	loss.setVolume(0.2);

}

//draw function allows us to draw the functioning game characters and maps to make it more interactive
//such as the for loops on where the camera is following the character
function draw()
{

	///////////DRAWING CODE//////////

	//move the camera on character
	cameraPosX = (gameChar_x - 500);
	
	//music
	if (!musicStarted) {
        music.play();
        music.loop(); // Optional: Uncomment this if you want the music to loop.
        musicStarted = true;
	}

	//sky
	background(70,156,224);

	//draw some ground
	noStroke();
	fill(60,180,150);
	rect(0, floorPos_y, width, height - floorPos_y); 

	//game score
	textSize(20);
	fill(255);
	noStroke();
	text("Score: " + game_score, 20, 30);

	// lives 
	fill(255);
	noStroke();
	text("Lives: ", 20, 50);

	//check flag
	checkFlagpole();

	//camera
	push();

	translate(-cameraPosX, 0);

	//draw mountain loop
	for(var i = 0; i < mountain_x.length; i++) {
		noStroke();
    	fill(85, 85, 85);
    	triangle(
			mountain_x[i] + mountain.width / 2,
			mountain.y_pos,
			mountain_x[i],
			mountain.y_pos + mountain.height,
			mountain_x[i] + mountain.width,
			mountain.y_pos + mountain.height
    	);
		fill(231, 231, 231);
		beginShape();
			vertex(mountain_x[i] + 120, mountain.y_pos + 53);
			vertex(mountain_x[i] + 200, mountain.y_pos);
			vertex(mountain_x[i] + 190, mountain.y_pos + 40);
			vertex(mountain_x[i] + 260, mountain.y_pos + 70);
			vertex(mountain_x[i] + 18, mountain.y_pos + 120);
		endShape();
	}	

	//draw trees loop
	for(var i = 0; i < trees_x.length; i++) {

		// for(var j = 0; j < 100)
		//trunk
		noStroke();
		fill(255, 204, 231);
		rect(trees_x[i] + 10, treePos_y + 25, 10, 120);

		//lolipop like bush 
		noStroke();
		fill(141,221,240, 300);  
		ellipse(trees_x[i] + 15, treePos_y + 30, 60, 60);
		fill(80,176,202, 200);  
		ellipse(trees_x[i] + 20, treePos_y + 30, 60, 60);
		
	} 

	//wrong way text label on the map placed like trees and mountains
	noStroke();
	fill(255);
	textSize(20);
	text("WRONG WAY HOMIK!", -535, 200);

	noStroke();
	fill(255);
	textSize(20);
	text("FOUND SECRET TREASURE!", -1800, 200);

	//draw clouds loop
	drawClouds();

	//draw flagpole
	renderFlagpole();

	//draw treasure
	drawTreasure();

	//draw the canyon
	drawCanyon(canyon);

	//collectable
	for (var i = 0; i < collectables.length; i++) {
        drawCollectable(collectables[i]);
        checkCollectable(collectables[i]);
    }

	//canyon
	for (var i = 0; i < canyons.length; i++) {
        drawCanyon(canyons[i]);
    }

	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
		fill(255);
		rect(gameChar_x - 15, gameChar_y - 50, 30 )
		triangle(gameChar_x - 3, gameChar_y - 50, 
		gameChar_x - 2, gameChar_y - 58, 
		gameChar_x - 12, gameChar_y - 50);
		triangle(gameChar_x + 11, gameChar_y - 50, 
		gameChar_x + 12, gameChar_y - 58, 
		gameChar_x + 2, gameChar_y - 50);
		fill(0)
		rect(gameChar_x - 8, gameChar_y - 41, 4, 2);
		fill(0);
		rect(gameChar_x -2, gameChar_y - 41, 4, 2);
		fill(178,66,66);
		ellipse(gameChar_x - 3.5, gameChar_y - 31, 5, 5);
		fill(185,45,105)
		rect(gameChar_x - 6.5, gameChar_y - 33, 2, 3);
		rect(gameChar_x -2.5, gameChar_y - 33, 2, 3);
		fill(255,185,185);
		rect(gameChar_x - 4.5, gameChar_y - 36, 3, 3);

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
		fill(255);
		rect(gameChar_x - 15, gameChar_y - 50, 30 );
		triangle(gameChar_x - 2, gameChar_y - 50, 
		gameChar_x - 10, gameChar_y - 58, 
		gameChar_x - 10, gameChar_y - 50);
		triangle(gameChar_x + 13, gameChar_y - 50, 	
		gameChar_x + 5, gameChar_y - 58, 
		gameChar_x + 5, gameChar_y - 50);
		fill(0)
		rect(gameChar_x - 2, gameChar_y - 41, 4, 2);
		fill(0);
		rect(gameChar_x + 4, gameChar_y - 41, 4, 2);
		fill(178,66,66);
		ellipse(gameChar_x + 3, gameChar_y - 31, 5, 5);
		fill(185,45,105)
		rect(gameChar_x - 0.5, gameChar_y - 33, 2, 3);
		rect(gameChar_x + 4.5, gameChar_y - 33, 2, 3);
		fill(255,185,185);
		rect(gameChar_x + 1.5, gameChar_y - 36, 3, 3);

	}
	else if(isLeft)
	{
		// add your walking left code
		fill(255);
		rect(gameChar_x - 15, gameChar_y - 29, 30 )
		triangle(gameChar_x - 5, gameChar_y - 27, 
		gameChar_x - 15, gameChar_y - 27, 
		gameChar_x - 5, gameChar_y - 37);
		triangle(gameChar_x + 8, gameChar_y - 27, 
		gameChar_x - 2, gameChar_y - 27, 
		gameChar_x + 8, gameChar_y - 37);
		fill(0)
		rect(gameChar_x - 8, gameChar_y - 19, 3, 3);
		fill(0);
		rect(gameChar_x + 1, gameChar_y - 19, 3, 3);
		fill(255,185,185);
		rect(gameChar_x - 4.5, gameChar_y - 14, 3, 3);
		fill(255,145,205)
		rect(gameChar_x - 6.5, gameChar_y - 11, 2, 3);
		rect(gameChar_x - 1.5, gameChar_y - 11, 2, 3);

	}
	else if(isRight)
	{
		// add your walking right code
		fill(255);
		rect(gameChar_x - 15, gameChar_y - 29, 30 )
		triangle(gameChar_x + 1, gameChar_y - 27, 
			gameChar_x - 10, gameChar_y - 27, 
			gameChar_x - 10, gameChar_y - 37);
		triangle(gameChar_x + 13, gameChar_y - 27, 
			gameChar_x + 3, gameChar_y - 27, 
			gameChar_x + 3, gameChar_y - 37);
		fill(0)
		rect(gameChar_x -4, gameChar_y - 19, 3, 3);
		fill(0);
		rect(gameChar_x + 4, gameChar_y - 19, 3, 3);
		fill(255,185,185);
		rect(gameChar_x, gameChar_y - 14, 3, 3);
		fill(255,145,205)
		rect(gameChar_x - 1.5, gameChar_y - 11, 2, 3);
		rect(gameChar_x + 2.5, gameChar_y - 11, 2, 3);

	}
	else if(isFalling || isPlummeting)
	{

		fill(255);
		triangle();
		fill(255);
		rect(gameChar_x - 15, gameChar_y - 50, 30 )
		fill(255);
		rect(gameChar_x - 12, gameChar_y - 56, 6 );
		rect(gameChar_x + 5, gameChar_y - 56, 6 )
		fill(0)
		rect(gameChar_x - 5, gameChar_y - 41, 4, 2);
		fill(0);
		rect(gameChar_x + 1, gameChar_y - 41, 4, 2);
		fill(178,66,66);
		ellipse(gameChar_x, gameChar_y - 31, 5, 5);
		fill(185,45,105)
		rect(gameChar_x - 3.5, gameChar_y - 33, 2, 3);
		rect(gameChar_x + 1.5, gameChar_y - 33, 2, 3);
		fill(255,185,185);
		rect(gameChar_x - 1.5, gameChar_y - 36, 3, 3);

	}
	else
	{
		// add your standing front facing code
		fill(255);
		rect(gameChar_x - 15, gameChar_y - 29, 30 )
		fill(255);
		rect(gameChar_x - 12, gameChar_y - 35, 6 );
		rect(gameChar_x + 6, gameChar_y - 35, 6 )
		fill(0)
		rect(gameChar_x -6, gameChar_y - 19, 3, 3);
		fill(0);
		rect(gameChar_x + 3, gameChar_y - 19, 3, 3);
		fill(255,185,185)
		rect(gameChar_x - 3.5, gameChar_y - 11, 2, 3);
		rect(gameChar_x + 1.5, gameChar_y - 11, 2, 3);
		fill(255,185,185);
		rect(gameChar_x - 1.5, gameChar_y - 14, 3, 3);

	}

	pop();

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here

	//left movement speed
	if(isLeft && !isPlummeting) {
		gameChar_x -= 3;
	} 

	//right movement speed
	if(isRight && !isPlummeting) {
		gameChar_x += 3;
	}

	
	//8. gravity 
	if(gameChar_y < floorPos_y) {
		gameChar_y += 2;
	} else {
		isFalling = false;
	}

	//check if player is dead
	checkPlayerDie()

	// Drawing the life tokens
    var tokenSize = 20; // token size
    var tokenSpacing = 5; // spacing
    var startX = 90; // X start position
    var startY = 43; // Y position all tokens
    
    noStroke();
    
    for (var i = 0; i < lives; i++) {
        var xPos = startX + i * (tokenSize + tokenSpacing);
        image(characterImg, xPos - tokenSize / 2, startY - tokenSize / 2, tokenSize, tokenSize);
    }

}

function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//left
	if (isPlummeting == true) {
		isLeft = false;
		isRight = false;
		isFalling = false;
		console.log("falling! can't jump")
		} else if(key == "a") {
			isLeft = true;
			console.log("isLeft");
		} //right
		else if(key == "d") {
			isRight = true;
	
			console.log("isRight");
		} // 7. jump 9. prevent double jumping
		else if(key == "w" || key == " ") {
			console.log("jump")
			if(!isFalling) {
				gameChar_y = gameChar_y - 100;
				isFalling = true;
				jumpSound.play();
			}
		} else {
			isPlummeting = false;

	 	}
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	if(key == "a") {
		isLeft = false;
		console.log("isLeft stopped");
	}

	if(key == "d") {
		isRight = false;
		console.log("isRight stopped");
	}

}

function drawClouds() {

	for(var i = 0; i < clouds_x.length; i++) {
		noStroke();
		fill(255, 255, 255);
		ellipse(clouds_x[i] + 225, 100, 100, 100);
		noStroke();
		fill(255, 255, 255);
		ellipse(clouds_x[i] + 180, 110, 80, 60);
		noStroke();
		fill(255, 255, 255);
		ellipse(clouds_x[i] + 265, 110, 80, 60);
	}

}

function drawCollectable(t_collectable) {
    if (!t_collectable.isFound) {
        fill(255, 215, 0);
        ellipse(t_collectable.x_pos, t_collectable.y_pos, t_collectable.size, t_collectable.size);
        fill(204, 163, 0); // Dark yellow for 3D effect
        ellipse(t_collectable.x_pos + t_collectable.size - 20, t_collectable.y_pos + t_collectable.size * 0.01, t_collectable.size - 4, t_collectable.size - 1);
    }
	
}

function checkCollectable(t_collectable) {
    if (dist(gameChar_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos) < 25 && !t_collectable.isFound) {
        t_collectable.isFound = true;
        game_score += 1;
		coinSound.play();
    }
}

function drawTreasure() {
	if (!treasure.isFound) {
		 // cheese triangle
		 fill(252,216, 0); // yellow cheese
		 stroke(0);
		 strokeWeight(0.2);
		 beginShape();
		 vertex(-1780, 430);  // bottom left
		 vertex(-1720, 430); // bottom right
		 vertex(-1750, 390);  // top point of triangle
		 endShape(CLOSE);
	   
		 // Draw holes in the cheese
		 fill(212,181,0);//darker holes
		 noStroke();
		 
		// small medium large holes
		 ellipse(-1760, 415, 10, 10);
		 
		 ellipse(-1745, 410, 12, 12);
		 
		 ellipse(-1750, 422, 10, 10);
	}
}

function drawCanyon(t_canyon) {

	noStroke();
    fill(190,112,147);
    rect(t_canyon.x_pos, 431, 90, 145);
    fill(0,57,38);
    rect(t_canyon.x_pos - 10, 431, 10, 145);
    rect(t_canyon.x_pos + 90, 431, 10, 145); 
	fill(117,201,233);
	rect(t_canyon.x_pos, 431, 90, 145);

	//canyon fall
	if (gameChar_x > t_canyon.x_pos - 5 && gameChar_x < t_canyon.x_pos + 95 && gameChar_y >= floorPos_y) {
        isPlummeting = true;
        console.log("You have fallen!");
		canyonFall.play();
    }
	
	if (isPlummeting) {
        gameChar_y += 5;
    }

}

function renderFlagpole() {
    // Flagpole
    strokeWeight(5);
    stroke(14,83,91);
    line(flagpole.x_pos, floorPos_y - 2, flagpole.x_pos, floorPos_y - 150);

    // Flag
    noStroke();
    if (flagpole.isReached) {
        fill(255, 220, 230);
        rect(flagpole.x_pos, floorPos_y - 150, 50, 30);
        
        // text display
        fill(255);
        textSize(60);
        textAlign(CENTER);
        text("LEVEL COMPLETE!", flagpole.x_pos, floorPos_y - 210);
        
        noLoop(); 
        return;
    } else {
        fill(255, 220, 230);
        rect(flagpole.x_pos, floorPos_y - 30, 50, 30);
    }
}

function checkFlagpole() {
    if (dist(gameChar_x, gameChar_y, flagpole.x_pos, gameChar_y) < 15) {
        flagpole.isReached = true;
		music.stop();
		win.play();
    }
}

function checkPlayerDie() {
    // character below floor
    if (gameChar_y > floorPos_y + 200) {
        //decrements lives
		lives -= 1;
        if (lives > 0) {
            //game state reset
            gameChar_x = width / 2;
            gameChar_y = floorPos_y;
            isPlummeting = false;
            startGame();
        } else {
            // gameover
            noLoop();  // stops draw looping
            fill(255);  // Red colordd for the Game Over message
            textSize(60);
            textAlign(CENTER, CENTER);
            text("GAME OVER!", width / 2, height / 2 - 30);
			music.stop();
			loss.play();
        }
    }
}

function music() {
	if(!music.isPlaying()) {
		music.play();
	}
}

function startGame() {
	
	isLeft = false;
	isRight = false;
	isPlummeting = false;
	isFalling = false;

	cameraPosX = 0;

	mountain = {
        x_pos: 70, 
        y_pos: 300,
        width: 400, 
        height: 132,
	}

	mountain_x = [-640, 80, 170, 1350, 2200, 3500, 4100, 5200, 6100];

	canyon = {
		x_pos: 200,
		width: 100,
	}

	trees_x = [20, 740, 1097, 1280, 1900, 2700, 3100, 3400, 4200, 4700, 5100, 5700];
	treePos_y = height/2 - 1;

	clouds_x = [-1300, 20, 80, 840, 1450, 1500, 1800, 2800, 3600, 4300, 4900, 5600];

	game_score = 0;	
}