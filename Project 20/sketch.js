var background, backgroundImage;
var cat, catImage, catImage4;
var mouse, mouseImage1, mouseImage2;

function preload() {
    backgroundImage = loadImage("images/garden.png");
    //cat = loadAnimation("images/cat2.png","images/cat3.png");
    catImage = loadImage("images/cat1.png");
    catWalk = loadAnimation("images/cat2.png","images/cat3.png");
    catImage4 = loadImage("images/cat4.png");
    //mouse = loadImage("images/mouse1.png");
    mouseImage1 = loadImage("images/mouse1.png");
    mouseImage2 = loadImage("images/mouse2.png");
    mouseImage3 = loadAnimation("images/mouse3.png", "images/mouse2.png");

    
}

function setup(){
    createCanvas(1000,800);
    cat =createSprite(800, 600, 150, 100);
    cat.addImage("normalCat",catImage);
    cat.scale = 0.25;
    mouse =createSprite(100, 600, 40, 40);
    mouse.addImage("normalMouse",mouseImage1);
    mouse.scale = 0.25

}

function draw() {

    background(backgroundImage);
    if (cat.x < mouse.x +100){
        cat.x = mouse.x +100;
        cat.addImage("cat4",catImage4);
        cat.changeImage("cat4",catImage4);
        mouse.addImage("mouse2", mouseImage2);
        mouse.changeImage("mouse2",mouseImage2);
    }

    drawSprites();
}


function keyPressed(){

  if (keyCode === LEFT_ARROW){
  mouse.addAnimation("mouseTeasing", mouseImage3);
  mouse.changeAnimation("mouseTeasing");
  //mouse.frameDelay = 25;

  cat.addAnimation("catWalking", catWalk)
  cat.changeAnimation("catWalking");
  cat.velocityX = -5;
 //cat.frameDelay = 25;
}



}
