var canvas, backgroundImage , bg_form;
var player1 , player2;
var gameState = 0;
var playerCount;

var database;

var form, player, game;

function preload(){
  bg_form = loadImage("images/bgform.jpg");
  bg_game = loadImage("images/BG.jpg");
  player1_img = loadImage("images/bluedisc.png");
  player2_img = loadImage("images/golddisc.png");
}

function setup(){
  canvas = createCanvas(800,800);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.play();
    strokeWeight(5);
    line(0,400,800,400);
  }
}
