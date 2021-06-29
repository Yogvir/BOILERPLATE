//create a class
class Form {
  constructor() {
    //main screen (6 )

    this.title = createElement("h1");
    this.name = createElement("h2");
    this.input = createInput(" ").attribute("placeholder", "Name");
    this.play = createButton("PLAY");
    this.how = createButton("How to Play ? ");
    this.mission = createButton("Know your Mission ! ");

    //how to play screen (3)
    this.explain1 = createElement("h2");
    this.explain2 = createElement("h2");

    //mission screen(3)
    this.explain3 = createElement("h2");
    this.explain4 = createElement("h2");
  }
  hide() {
    this.title.hide();
    this.name.hide();
    this.input.hide()
    this.play .hide();
    this.how.hide();
    this.mission.hide();
    this.explain1.hide();
    this.explain2.hide();
    this.explain3.hide();
    this.explain4.hide();
  }

  display() {
    background(backgroundImg2);
    //title
    this.title.html("VENOMPHOBIA");
    this.title.position(displayWidth / 2 - 200, 0);
    this.title.style("color", "#0CFFE1");
    this.title.style("font-size", "38px");
    this.title.style("font-family", "Comic Sans MS");
    this.title.style("font-weight", "bold");

    //input box
    this.input.position(displayWidth / 2 - 200, 0);

    this.input.style("color", "#7CFBE1");
    this.input.style("width", "50px");
    this.input.style("height", "40px");
    this.input.style("background-color", "yellow");

    //3 buttons
    this.play.position(displayWidth / 2 + 70, displayHeight / 2 - 40);
    this.play.style("font-size", "38px");
    this.play.style("height", "60px");
    this.play.style("weight", "80px");
    this.play.style("font-family", "Castellar");
    this.play.style("font-weight", "2");
    this.play.style("border-radius", "8px");
    this.play.style("border-color", "#0CFFE1");
    this.play.style("background-color", "#FF217C");

    this.how.position(displayWidth / 2, displayHeight / 2 - 40);
    this.how.style("font-size", "38px");
    this.how.style("height", "60px");
    this.how.style("weight", "80px");
    this.how.style("font-family", "Castellar");
    this.how.style("font-weight", "2");
    this.how.style("border-radius", "8px");
    this.how.style("border-color", "#0CFFE1");
    this.how.style("background-color", "#FF217C");

    this.mission.position(displayWidth / 2 + 170, displayHeight / 2 - 40);

    this.mission.style("font-size", "38px");
    this.mission.style("height", "60px");
    this.mission.style("weight", "80px");
    this.mission.style("font-family", "Castellar");
    this.mission.style("font-weight", "2");
    this.mission.style("border-radius", "8px");
    this.mission.style("border-color", "#0CFFE1");
    this.mission.style("background-color", "#FF217C");

    //functionalities to the buttons
    this.play.mousePressed(() => {
      playerName = this.input.value();
      this.title.hide();
      this.name.hide();
      this.input.hide()
      this.play .hide();
      this.how.hide();
      this.mission.hide();
      this.explain1.hide();
      this.explain2.hide();
      this.explain3.hide();
      this.explain4.hide();
      gameState = "play";
    });
      
    this.how.mousePressed(() => {
     gameState = "how";
      });

      this.mission.mousePressed(() => {
        gameState = "mission";
      });
    } 
  
    displayhowtoplay() {
        this.title.hide();
        this.name.hide();
        this.input.hide()
        this.how.hide();
        //?
        background(backgroundImg2);
//title element

this.title.html("Instructions");
this.title.position(displayWidth / 2 - 200, 0);
this.title.style("color", "#0CFFE1");
this.title.style("font-size", "38px");
this.title.style("font-family", "Comic Sans MS");
this.title.style("font-weight", "bold");
        


this.explain1.html("1.Click on mission to know your mission");
this.title.position(displayWidth / 2 - 200, 0);
this.title.style("color", "#0CFFE1");
this.title.style("font-size", "38px");
this.title.style("font-family", "Comic Sans MS");
this.title.style("font-weight", "bold");
        
this.explain2.html("2.Complete the mission till the timer stops,beware of the creatures! ");
this.title.position(displayWidth / 2 - 200, 0);
this.title.style("color", "#0CFFE1");
this.title.style("font-size", "38px");
this.title.style("font-family", "Comic Sans MS");
this.title.style("font-weight", "bold");

this.explain3.html("3.If you get caught by any of the creatures or run out of lives,thr venom will kill you!!!!!! ");
this.title.position(displayWidth / 2 - 200, 0);
this.title.style("color", "#0CFFE1");
this.title.style("font-size", "38px");
this.title.style("font-family", "Comic Sans MS");
this.title.style("font-weight", "bold");


this.explain4.html(" 4. The creatures will appear at certain places, you never know when they come, so play carefully.");
this.title.position(displayWidth / 2 - 200, 0);
this.title.style("color", "#0CFFE1");
this.title.style("font-size", "38px");
this.title.style("font-family", "Comic Sans MS");
this.title.style("font-weight", "bold");


this.explain5.html(" 5. GOOD LUCK!!!");
this.title.position(displayWidth / 2 - 200, 0);
this.title.style("color", "#0CFFE1");
this.title.style("font-size", "38px");
this.title.style("font-family", "Comic Sans MS");
this.title.style("font-weight", "bold");
        
this.play.position(displayWidth / 2 + 70, displayHeight / 2 - 40);
this.play.style("font-size", "38px");
this.play.style("height", "60px");
this.play.style("weight", "80px");
this.play.style("font-family", "Castellar");
this.play.style("font-weight", "2");
this.play.style("border-radius", "8px");
this.play.style("border-color", "#0CFFE1");
this.play.style("background-color", "#FF217C");

this.mission.style("font-size", "38px");
    this.mission.style("height", "60px");
    this.mission.style("weight", "80px");
    this.mission.style("font-family", "Castellar");
    this.mission.style("font-weight", "2");
    this.mission.style("border-radius", "8px");
    this.mission.style("border-color", "#0CFFE1");
    this.mission.style("background-color", "#FF217C");

      
  }

  displaymission() {
    
    this.title.hide();
    this.name.hide();
    this.input.hide()
    this.mission.hide();
    //?
    background(backgroundImg2);

        this.title.html("Your Mission");
        this.title.position(displayWidth / 2 - 200, 0);
        this.title.style("color", "#0CFFE1");
        this.title.style("font-size", "38px");
        this.title.style("font-family", "Comic Sans MS");
        this.title.style("font-weight", "bold");
                
        
        
        this.explain3.html("1. Your mission is to collect the diamond within the given time. There will be creatures appearing at certain places,save yourself from them.   ");
        this.title.position(displayWidth / 2 - 200, 0);
        this.title.style("color", "#0CFFE1");
        this.title.style("font-size", "38px");
        this.title.style("font-family", "Comic Sans MS");
        this.title.style("font-weight", "bold");
                
        this.explain4.html("1. if the creatures touch you, you will be destroyed by the venom.    ");
        this.title.position(displayWidth / 2 - 200, 0);
        this.title.style("color", "#0CFFE1");
        this.title.style("font-size", "38px");
        this.title.style("font-family", "Comic Sans MS");
        this.title.style("font-weight", "bold");
                
        this.play.position(displayWidth / 2 + 70, displayHeight / 2 - 40);
        this.play.style("font-size", "38px");
        this.play.style("height", "60px");
        this.play.style("weight", "80px");
        this.play.style("font-family", "Castellar");
        this.play.style("font-weight", "2");
        this.play.style("border-radius", "8px");
        this.play.style("border-color", "#0CFFE1");
        this.play.style("background-color", "#FF217C");
        
        this.how.style("font-size", "38px");
            this.how.style("height", "60px");
            this.how.style("weight", "80px");
            this.how.style("font-family", "Castellar");
            this.how.style("font-weight", "2");
            this.how.style("border-radius", "8px");
            this.how.style("border-color", "#0CFFE1");
            this.how.style("background-color", "#FF217C");
        
  
  }
  displayPlayScreen() {
    this.title.hide();
    this.name.hide();
    this.input.hide()
    this.play .hide();
    this.how.hide();
    this.mission.hide();
    this.explain1.hide();
    this.explain2.hide();
    this.explain3.hide();
    this.explain4.hide();
  }
}
