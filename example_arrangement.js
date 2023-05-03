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
const bg_color1 = [51, 50, 46];
let img;
function preload() {
  img = loadImage('space.jpg');
  image(img,960,500);
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


///////// Grid settings /////////
  // draw a 3x1 grid of faces
  //This is the council of masks

  let w = canvasWidth / 3;
  let h = canvasHeight / 1;
  for(let i=0; i<3; i++) {
    for(let j=0; j<1; j++) {
      let y = h+0  + h*i;
      let x = w+0 + w*j;
      let m = 1;
    
    
///////// Face 1 (Uno-Uno) /////////    
      if (i === 0) {

        let eye_value = int(random(1,2,3));
        let tilt_value = int(random(-10, 10));
        let mouth_value = int(random(1, 3));
        //let is_cyclops = randomint((1, 3));
        let feather_value = int(random(1,3));
        let Fdet_value = int(random(0,3));
        let Brow_value = int(random(1,3));
        let Ear_value = int(random(1,3));
        if(i < 1) {
          eye_value = int(random(1,2,3));  
          tilt_value = random(-10, 10);
          mouth_value = int(random(1, 3));
          feather_value = int(random(1,3));
          Fdet_value = int(random(0,3));
          Brow_value = int(random(0,3));  
          Ear_value = int(random(0,3));
        
        }
        stroke(5);
        push();
        translate(x+150, y-200);
        scale(w/30, h/35);
        stroke(5);
        UnoUno(tilt_value, eye_value, mouth_value, feather_value, Fdet_value,Brow_value, Ear_value);
        pop();


        push();
        translate(x+450, y-200);
        scale(w/30, h/35);
        DvaDva(tilt_value, eye_value, mouth_value, feather_value, Fdet_value,Brow_value, Ear_value);
        pop();



        push();
        translate(x-150, y-200);
        scale(w/30, h/35);
        üçüç(tilt_value, eye_value, mouth_value, feather_value, Fdet_value,Brow_value, Ear_value)
        pop();
;

      }

/*      
      else if (m === 01) {
///////// Face 2 (Dva-Dva) /////////

        // all other faces
        push();
        translate(x=175, y=250);
        scale(w/30, h/35);
        if((i+j)%2 === 0) {
          let eye_value = random(1,3);
          let tilt_value = random(-20, 20);
          let mouth_value = random(1, 4);
          let is_cyclops = random(0, 3);
          let feather_value = random(1,3);
          let Fdet_value = random(1,3);
          let Brow_value = random(1,3);
          let Ear_value = random(1,3);
          if(is_cyclops === 0) {
            eye_value = random(1,3);  
            tilt_value = random(-5, 5);
            mouth_value = random(5, 10);
            feather_value = random(0,3);
            Fdet_value = random(0,3);
            Brow_value = random(0,3);  
            Ear_value = random(0,3);
          }


            DvaDva(tilt_value, eye_value, mouth_value, feather_value, Fdet_value,Brow_value, Ear_value)
          pop();
        }

////////// Face 3 (üçüç) /////////      
      else if (j === 0 ) {
        push();
          translate(x, y);
          scale(w/200, h/250);
          let eye_value = random(1,3);
          let tilt_value = random(-20, 20);
          let mouth_value = random(1, 4);
          let is_cyclops = random(0, 3);
          let feather_value = random(1,3);
          let Fdet_value = random(1,3);
          let Brow_value = random(1,3);
          let Ear_value = random(1,3);
          if(is_cyclops === 0) {
            eye_value = random(1,3);  
            tilt_value = random(-5, 5);
            mouth_value = random(5, 10);
            feather_value = random(0,3);
            Fdet_value = random(0,3);
            Brow_value = random(0,3);  
            Ear_value = random(0,3);
          }
          //thinness_value = random(1);
          stroke(5);
          üçüç(tilt_value, eye_value, mouth_value, feather_value, Fdet_value,Brow_value, Ear_value);
          //translate(x-300, y-700);
          //scale(w/500, h/450)
          //translate(x-300, y-700);         
          if((i+j)%2 == 0) {
            pop();
          }
          
          
        }
       // pop();
      }
    }
  }

}
*/
//          blockyFace(thinness_value)
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
}
  }
}