class Form {
  constructor() {
     this.input = createInput("Name");
     this.button = createButton('Play');
     this.button2 = createButton('Reset')
     this.title = createElement('h1')
     this.greeting = createElement('h2');
  }
   hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    this.title.hide();
    
   }

  display(){
    
    this.title.html("Drone Battle Game");
    this.title.position(250, 0);
    
    this.input.position(250, 160);
    this.button.position(250, 200);
    this.button2.position(15,20)

    this.button2.mousePressed(()=>{
      player.updateCount(0)
      game.update(0);
    });

     this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

     var name = this.input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      
      this.greeting.html("Hello " + name )
      this.greeting.position(130, 160)
    });
    
  }
}
