let imagenFondo;
let imagenInicio;
let personaje;
let x = 0;
let posY = 100
let dY = 3 
let estado = 0 //0 será igual a menu, 1 sera el juego y 2: gameOver
let wallX = []
let wallY = []
let pared
let puntaje = 0
let puntajeMax = 0
let recordAnterior = 0
let musicaJuego
let musicaRecord
let letra

function preload() {
  //se carga todo con load y luego que quieres
  letra = loadFont('./font/HARRYP__.TTF')
  imagenFondo = loadImage('./images/fondoHP.jpg');
  personaje = loadImage('./images/harrypotter.gif');
  imagenInicio = loadImage('./images/FondogatoHP.jpg')
  pared = loadImage('./images/pared.png')
  musicaJuego = loadSound('./sounds/musicHP.mp3')
  musicaRecord = loadSound('./sounds/aplauso.wav')
}
 
function setup() {
  noCursor()
  createCanvas(1000,512)
 
}
 
function draw() {
textFont(letra)
  if(estado === 1){
    imageMode(CORNER)
  background(255)
  image(imagenFondo,x,0);
  image(imagenFondo,x + imagenFondo.width, 0)
  x = x - 5
  dY = dY+1
  posY = posY + dY
  if(x <= 0 -imagenFondo.width){
    x=0;
  }
  //Obstaculos
  
  for ( let i = 0; i < wallX.length; i++)
    {
        imageMode(CENTER)
        image(pared,wallX[i],wallY[i]-500)
        image(pared,wallX[i],wallY[i]+500)

        if (wallX[i] < 0)
        {
          wallX[i] = width
          wallY[i] = random(200,300)
        }
        
    //Puntaje
    if (wallX[i] === 100)
   {
      puntaje++
     puntajeMax = max(puntaje, puntajeMax)
   }
   wallX[i] = wallX[i] - 5 //Para que se muevan los obstaculos
   if (posY < -80 || posY > height + 80 
          || (abs(wallX[i] - 100) <  80 
          && abs(wallY[i] - posY) > 100))
   {
    musicaJuego.stop()
    estado = 0
   }
      }
  //personaje
  textSize(25)
  image(personaje, 100, posY,80,80);
  fill(0)
  text("Puntaje: " + puntaje, width/2-80,500)
  } 
  else if (estado === 0)
  {
    background(0)
    imageMode(CORNER)
    cursor()
    image(imagenInicio,0,0,1000,600)
    textSize(50)
    
    text("Puntaje Maximo: " + puntajeMax, 600,450)
    text("Haga click para comenzar",600,400)
    if (puntajeMax > recordAnterior)
    {
     if(!musicaRecord.isPlaying())
      musicaRecord.play()
    }
  }
}

function mousePressed(){
  if (estado == 0)
  {
    estado=1
    posY = 100
    x = 0
    dY = 3

    wallX = [500,800,1100]
    wallY [0] = random(200,300)
    wallY [1] = random(200,300)
    wallY [2] = random(200,300)
    puntaje = 0
    recordAnterior = puntajeMax
    noCursor()

    if (musicaRecord.isPlaying())
    {
      musicaRecord.stop()
    }
    musicaJuego.loop()
  }
  
  //posY = 100
  dY = -15

}