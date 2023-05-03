/*
 * Not much to see here as i did tests with arrangements, not anything buy a test playground
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors
const bg_color1 = [98, 42, 15];
function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}

function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  noStroke();

  // draw a 7x4 grid of faces
  let w = canvasWidth / 1;
  let h = canvasHeight / 1;
  for(let i=0; i<4; i++) {
    for(let j=0; j<7; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;
     
//////////////center face //////////////
        let eye_value = int(random(2,4));
        let tilt_value = random(-45, 45);
        let mouth_value = random(3,4);
        let feather_value = random(3,4);
        let Fdet_value = random(1,4);
        let Brow_value = random(1,4);
        let is_cyclops = random(0, 100);
        let Ear_value = random(0,100);
        let Pup_value = random(0,100);

        if(is_cyclops < 10) {
          eye_value = 1;
          tilt_value = random(-5, 5);
          mouth_value = random(0, 1.7);
          feather_value = random(0,1);
          Fdet_value = random(0,1);
          Brow_value = random(0,1);
          Ear_value = random(0,1);
          Pup_value = random(0, 1);
        }

        push();
        translate(x, y);
        scale(w/50, h/55);
        
        UnoUno(tilt_value, eye_value, mouth_value,feather_value, Brow_value, Ear_value, Pup_value);
        üçüç(tilt_value, eye_value, mouth_value,feather_value, Brow_value, Ear_value, Pup_value);
        
        //simplePurpleFace(tilt_value, eye_value, mouth_value, feather_value, Fdet_value,Brow_value, Ear_value);
        //blockyFace();
        pop();
      
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
