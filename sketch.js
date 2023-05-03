const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

let engine;
let world;

var ash;
var gengar,pikachu,staraptor,hariyama,diglett,dragonight;
var back;

function preload() {
    back = loadImage("background.png");
    ash = loadImage("Ash.png");

    gengar = loadImage("gengar.png");
    staraptor = loadImage("staraptor.png");
    hariyama = loadImage("hariyama.png");
    diglett = loadImage("diglett.png");
    dragonight = loadImage("dragonight.png");
    pikachu = loadImage("pikachu.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    engine = Engine.create();
    world = engine.world;

    ash = createSprite(windowWidth - 1300,windowHeight - 150);
    //ash = addImage();

    gengar = createSprite();
    //gengar = addImage();

    staraptor = createSprite();
    //staraptor = addImage();

    hariyama = createSprite();
    //hariyama = addImage();

    diglett = createSprite();
    //diglett = addImage();

    dragonight = createSprite();
    //dragonight = addImage();

    pikachu = createSprite();
    //pikachu = addImage();
}

function draw() {
    background(back);
    Engine.update(engine);


    drawSprites()
}