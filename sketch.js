const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

let engine;
let world;

var ash,ashImg;
var bgSound;
var obstacle,obstacleFly;
var gengarImg,pikachuImg,staraptorImg,hariyamaImg,diglettImg,dragonightImg;
var back;

function preload() {
    back = loadImage("background.png");
    ashImg = loadImage("Ash.png");

    bgSound = loadSound("Monkeys-Music.mp3");

    gengarImg = loadImage("gengar.png");
    staraptorImg = loadImage("staraptor.png");
    hariyamaImg = loadImage("hariyama.png");
    diglettImg = loadImage("diglett.png");
    dragonightImg = loadImage("dragonight.png");
    pikachuImg = loadImage("pikachu.png");
  }
  
  function setup() {
    createCanvas(windowWidth, windowHeight);

    bgSound.play();
    bgSound.loop();
    bgSound.setVolume(0.4);
    
    engine = Engine.create();
    world = engine.world;
    
    obstaclesGroup = new Group();
    obstaclesFlyGroup = new Group();
    
    ash = createSprite(windowWidth - 1300,windowHeight - 150);
    ash.addImage(ashImg);
  }
  
  function draw() {
    background(back);
    Engine.update(engine);
    
    spawnObstacles();
    spawnFlyObstacles();
    
    //if (obstacle.x < windowWidth / 2) {
      //    obstacle.velocityX = 0
    //}
    
    drawSprites()
  }

function spawnObstacles() {
    if(frameCount % 250 === 0) {
        obstacle = createSprite(windowWidth + 100,windowHeight - 170);
        //obstacle.debug = true;
        obstacle.velocityX = -3;
        
        //gere obstáculos aleatórios
        var rand = Math.round(random(1,3));
        switch(rand) {
          case 1: obstacle.addImage(hariyamaImg);
          obstacle.scale = 0.3
            break;
          case 2: obstacle.addImage(pikachuImg);
            obstacle.scale = 0.9
            break;
          case 3: obstacle.addImage(diglettImg);
            obstacle.scale = 0.4
            obstacle.position.y = windowHeight - 100
            break;
          default: break;
        }
        
        //atribua dimensão e tempo de vida ao obstáculo           
        //obstacle.scale = 0.5;
        //adicione cada obstáculo ao grupo
        obstaclesGroup.add(obstacle);
      }
}

function spawnFlyObstacles() {
    if(frameCount % 180 === 0) {
        obstacleFly = createSprite(windowWidth + 100, windowHeight - 500);
        //obstacleFly.debug = true;
        obstacleFly.velocityX = -4;
        
        //gere obstáculos aleatórios
        var rand = Math.round(random(1,3));
        switch(rand) {
          case 1: obstacleFly.addImage(gengarImg);
            obstacleFly.scale = 1.5
            break;
          case 2: obstacleFly.addImage(dragonightImg);
          obstacleFly.scale = 0.5;
            break;
          case 3: obstacleFly.addImage(staraptorImg);
          obstacleFly.scale = 0.5;
          default: break;
        }
        
        //adicione cada obstáculo ao grupo
        obstaclesFlyGroup.add(obstacleFly);
      }
}