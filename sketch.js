var hypnoticBall, database;
var position;
var gamestate = 0;
var playercount = 0;
var form;
var game;
var player;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game()
  game.getState()
  game.start()
}

function draw(){
  background("white");
  if(playercount < 4){
    gamestate = 0
  }
  if(playercount == 4){
    gamestate = 1
    game.update(gamestate)
  }

    drawSprites();
  
}