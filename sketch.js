
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Composite = Matter.Composite;
 
var engine;
var world;
var boxes = [];
 
var ground;
var gSlider;


function setup() {
  var canvas =  createCanvas(400, 400);
  

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
    
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
ground  = new Ground(0,350,500,20);
}
 

 
function draw() {
    Engine.update(engine);
   
 
  // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
     // Draw all the elements including the slider that 
    ground.display();
    gSlider.mousePressed(Box);

}

function mousePressed() {
 // Every time a mouse press occures create a new box.
for(var i = 0; i<1;i++){
 var y = random(330,290)
boxes[i] = new Box(mouseX,y,30,30);
boxes[i].show();
}
}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
function Box(x, y, w, h, options) {

    // add options such as friction and restitution. Experiment with the values
    var options = {
      friction:0,
      restitution: 0.4
    }
this.x = x;
this.y = y;
this.w = w;
this.h = h;
 
    // create your box using the function arguments
    // x - x-coordinate
    // y - y-coordinate
    // w - width of the box
    // h - height of the box

 this.body = Bodies.rectangle(this.x,this.y,this,w,this.h);

    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    this.show = function () {
      fill('red');
      rect(this.x,this.y,this.w,this.h);
      push();
      pop();
    }
}