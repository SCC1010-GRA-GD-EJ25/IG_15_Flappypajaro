let imagenFondo;
let imagenInicio;
let personaje;
let x = 0;
let posY = 100
let dY = 3 
let estado = 0 //0 será igual a menu, 1 sera el juego y 2: gameOver
 
function preload() {
  //se carga todo con load y luego que quieres
  imagenFondo = loadImage('./images/fondojuego00.png');
  personaje = loadImage('./images/miku00.gif');
}
 
function setup() {
  noCursor()
  createCanvas(1000,512)
 
}
 
function draw() {

  if(estado == 1){
  background(255)
  image(imagenFondo,x,0);
  image(imagenFondo,x + imagenFondo.width, 0)
  x = x - 5
  dY = dY+1
  posY = posY + dY
  if(x <= 0 -imagenFondo.width){
    x=0;
  }
  image(personaje, 100, posY,60,60);
  } 
  else if (estado == 0)
  {
    cursor()
    image(imagenFondo,0,0)
    textSize(50)
    fill(255)
    text("Haga click para comenzar",100,100)
  }
  {

  }
}

function mousePressed(){
  if (estado == 0)
  {
    estado=1
    posY = 100
    x = 0
    dY = 3
    noCursor()
  }
  
  //posY = 100
  dY = -15

}