const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 var engine,world,box1,box2,ground1; 
 function setup()
  {
     createCanvas(400,400); 
     engine = Engine.create();
      world = engine.world; 
    box1 = new box(150,76,50,50)
    box2 = new box(140,66,50,50)
    ground1 = new ground(200,380,400,20)
     }
      function draw()
       { 
         background("black");
         Engine.update(engine)
         box1.display()
         box2.display()
         ground1.display()
         }
