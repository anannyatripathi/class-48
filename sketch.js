//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;
var bg, background2, background3, background4, background5;
var answer1, answer2, answer3, answer4, answer5, list;
var button1;
var score=0;
var gameState = 0;
var check;


function preload()
{
	bg =loadImage("background.png");
	background2 =loadImage("background2.jpg");
	background3 =loadImage("background3.jpg");
	background4 =loadImage("background4.jpg");
	background5 =loadImage("background5.jpg");

	answer1 =loadImage("yourname.jpg");
	answer2 =loadImage("yourage.jpg");
	answer3 =loadImage("atowel.jpg");
	answer4 =loadImage("abank.jpg");
	answer5 =loadImage("piano.jpg");
	list=loadImage("list.jpg")
	
	
}

function setup() {
	createCanvas(displayWidth,displayHeight);
 	
	check1=createSprite(500,300,100,100);
 	//check.invisible=true;
	check2=createSprite(650,300,100,100);
	check3=createSprite(800,300,100,100);
	check4=createSprite(650,450,100,100);
}


function draw() {
	rectMode(CENTER);
  	//background(bg);
  
  	textSize(20);
 	text("Quiz",1570,515);

	if(gameState === 0)
 	{
		background(bg);
		check1.visible = false;
		check2.visible = false;
		check3.visible = false;
		check4.visible = false;
		stroke("white");
		strokeWeight(3);
		textSize(40);
		text("Welcome to the QUIZ GAME",350,200);
		text("Press SPACE to start the game ",350,300);
		text("keep the answers in your mind while clicking on the 'NextQuestion' ",20,450);
		
 	}

	if(keyDown("space")){
		gameState = 1;
		background(background5);
	}

	if(gameState === 1){
		strokeWeight(3);
		stroke("black");
		textSize(37);
		text("1-What belongs to you but is used more by others ?",270,200);
		text("You will get to know all the answers in the end . Click on next question",20,500);
		text("NextQuestion", 400,300);
		check1.visible = false;
	}

	if(mousePressedOver(check1)){
		background(background3);
		score++;
		gameState=2;
	}

	if(gameState === 2){
	//	background(background3);
		strokeWeight(3);
		stroke("black");
		textSize(37);
		text("2-what goes up and dosen't come down ?",250,200);
		text("You will get to know all the answers in the end . Click on next question",20,500);
		text("NextQuestion", 520,300);
		check2.visible = false;
	}

	if(mousePressedOver(check2)){
		background(background2);
		//check.addImage(answer1);
		score++;
		gameState=3;
	}

	if(gameState === 3){
		strokeWeight(3);
		stroke("black");
		textSize(37);
		text("3-What getts wetter as it dries ?",400,200);
		text("You will get to know all the answers in the end . Click on next question",20,500);
		text("NextQuestion", 700,300);
		check3.visible = false;
	}

	if(mousePressedOver(check3)){
		background(background4);
		score++;
		gameState=4;
	}
	if(gameState === 4){
		strokeWeight(3);
		stroke("black");
		textSize(40);
		text("4-I have branches , but no fruits,trunk or leaves .what am I ?",130,200);
		text("To know all the answers Click on AllAnswers",150,600);
		text("AllAnswers",580,450);
		check3.visible = false;
	}

	if(mousePressedOver(check4)){
		background(list);
		score++;
		gameState=5;

	}
	if(gameState === 5){
		strokeWeight(3);
		stroke("black");
		textSize(55);
		text(" ALL ANSWERS LIST ",400,100);
		text("1- Your Name",200,250);
		text("2- Your Age ",200,400);
		text("3- A Towel ",750,250);
		text("4- A Bank ",750,400);
		
	}


  drawSprites();
 
}



