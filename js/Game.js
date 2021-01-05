class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
      background(bg_form);
      player1 = createSprite(400,50,20,20);
      player2 = createSprite(400,750,20,20);

      player1.addImage(player1_img);
      player2.addImage(player2_img);

      player1.scale = 0.05;
      player2.scale = 0.05;
      
    }
  }
  play(){
    form.hide();
    background(bg_game);
    
   // player2.y = 750;
   if(player2.y >=400){
     // player2.x = mouseX;
      player2.y = mouseY;
   }
   drawSprites();
    }
}
