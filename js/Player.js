class Player {
  constructor (){
    this.xposition = 0;
    this.yposition = 0; 
    this.name = null;
    this.score = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "player" + playerCount;
    database.ref(playerIndex).set({
      name:this.name,
      score:this.score,
      xposition:this.xposition,
      yposition:this.yposition
      
    });
 }
}
