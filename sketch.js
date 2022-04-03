var bg,bgImg;
var player,playerImg;
var ground;
var bomb, bombImg,bombGroup;
var explosion, explosionImg, explosionGroup;


function preload(){

bgImg = loadImage('vbfWrq.jpeg');

playerImg = loadImage('basketball_guy-removebg-preview.png');

bombImg = loadImage('cartoon-bomb-vector-24560563-removebg-preview.png');

explosionImg = loadImage('explosion.png');
    
}

function setup(){


createCanvas(1200,700);

bg = createSprite(600,350);
bg.addImage(bgImg);
bg.scale = 0.5;

player = createSprite(100,600);
player.addImage(playerImg);
player.scale = 0.4;



ground = createSprite(100,675,2200,100);

ground.shapeColor = "#bee7a5";




}

function draw(){

background("black");


if(keyDown("space")   && player.y >= 500){
    player.velocityY = -12;


}
player.velocityY = player.velocityY + 0.5;
player.collide(ground);

drawSprites();




}


