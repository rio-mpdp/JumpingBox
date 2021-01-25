var canvas,a,b,c,d,e;
var music;
var music2;
var music3;
var music4;


function preload(){
    music = loadSound("music.mp3");
    music2 = loadSound("blackpink2.mp3");
    music3 = loadSound("blackpink.mp3");
    music4 = loadSound("blackpink3.mp3");
}


function setup(){
    canvas = createCanvas(530,430);
    edges = createEdgeSprites()

    a= createSprite(200,400,110,15)
    a.shapeColor="blue"
    b= createSprite(320,400,110,15)
    b.shapeColor="yellow"
    c= createSprite(80,400,110,15)
    c.shapeColor="red"
    d= createSprite(440,400,110,15)
    d.shapeColor="#20CD4B"
    e= createSprite(Math.round(random(20,480)),100,20,20)
    e.velocityX=2
    e.velocityY=2
    e.shapeColor="white"
   
}

function draw() {
    background("black");
    if(e.isTouching(a)){ 
        e.shapeColor="blue"
       music2.play()
      music4.stop() 
     music3.stop()
    }
    if( e.isTouching(b)){
        e.shapeColor="yellow"
      music4.stop()
     music3.stop()
      music2.stop()          
    }
    
    if( e.isTouching(d)){
        e.shapeColor="#20CD4B"
             
       music3.play()
     music2.stop()
       music4.stop()
    }
    if( e.isTouching(c)){
        e.shapeColor="red"
        music2.stop()
        music3.stop()
       music4.stop()
        e.velocityX=0
        e.velocityY=0
        }
    
    e.bounceOff(edges)
    e.bounceOff(d)
    e.bounceOff(c)
    e.bounceOff(b)
    e.bounceOff(a)
    
   drawSprites();
   
}
