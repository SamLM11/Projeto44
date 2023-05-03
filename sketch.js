const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

let engine;
let world;

var ash;
var gengar,pikachu;
var back;

function preload() {
    back = loadImage("background.png");
    gengar = loadImage("gengar.png");
    ash = loadImage("Ash.png");
    pikachu = loadImage("pikachu.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    engine = Engine.create();
    world = engine.world;

    gengar = createSprite();
    ash = createSprite();
    pikachu = createSprite();
}

function draw() {
    background(back);
    Engine.update(engine);


    drawSprites()
}