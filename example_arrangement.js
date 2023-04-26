/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

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

// global variables for colors
const bg_color1 = [98, 42, 15];

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


///////// Grid settings /////////
  // draw a 3x1 grid of faces
  //This is the council of masks

  let w = canvasWidth / 3;
  let h = canvasHeight / 1;
  for(let i=0; i<3; i++) {
    for(let j=0; j<1; j++) {
      let y = h/2  + h*i;
      let x = w+150 + w*j;
    
    
///////// Face 1 (Thineus) /////////    
      if (i == 0) {

        let eye_value = 2;
        let tilt_value = random(-20, 20);
        let mouth_value = random(1, 3);
        let is_cyclops = random(0, 100);
        let feather_value = random(0,100);
        let Fdet_value = random(0,100);
        let Brow_value = random(0,100);
        if(is_cyclops < 10) {
          eye_value = 1;
          tilt_value = random(-5, 5);
          mouth_value = random(5, 10);
          feather_value = random(0,3);
          Brow_value = random(0,3);  
        
        }
        push();
        translate(x, y);
        scale(w/25, h/25);
        orangeAlienFace(tilt_value, eye_value, mouth_value,feather_value, Fdet_value, Brow_value);
        
        pop();
      }
      else if (i > 0) {
///////// Face 2 (Thickius) /////////

        // all other faces
        push();
        translate(x-300, y-500);
        scale(w/40, h/40);
        if((i+j)%2 == 0) {
          simplePurpleFace();
          pop();
        }

////////// Face 3 (Thirdius) /////////      
        if (i > 0 ) {
          push();
          thinness_value = random(1);
          blockyFace(thinness_value);
          
          
        }
        pop();
      }
    }
  }
}
//          blockyFace(thinness_value)
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
