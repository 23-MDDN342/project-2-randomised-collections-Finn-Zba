/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */
function orangeAlienFace(tilt_value, eye_value, mouth_value, feather_value, Fdet_value,Brow_value) {
  const bg_color3 = [122, 67, 43];
  const fg_color3 = [58, 31, 4];

  let headSize = 10
  let eyeSize = 2;
  let centerX = 0;
  let Iy = -4
  let distactBetweenEyes = 3
  let MouthDrop = 7
  let arrweight = 0.3 //stroke weight best working for arrangement
  
////////////// Rotate face (slider 1) //////////////
  angleMode(DEGREES);
  rotate(tilt_value);
  strokeWeight(arrweight);

////////////// head shape //////////////
 // ellipse(centerX, 0, headSize, headSize);
  fill(207, 146, 93); //brown
  stroke(0); //black
  triangle(-4.8,3.1,0,8,4.9,3.1); //bottom half of mask
  rect(-5, -7, headSize, headSize); //top half of mask
  
////////////// Mouth shape (slider 2) //////////////
   fill(0);
   stroke(0); //black
   if (mouth_value >= 1) {
     //fill(0);
     ellipse(0,1.1,1,1);
 
   }
   if (mouth_value >= 2) {
     fill(0);
     ellipse(0,1.1,3,3);
 
   }
 
   if (mouth_value >= 3) {
     fill(0);
     noStroke();
     quad(1, 1, 2, 2, 3, 3, 4, 4)
 
   } 

////////////// Eye shape (slider 3) //////////////
  
  // 2 traditonal eyes
  if (eye_value === 1 || eye_value == 3) {
    strokeWeight(arrweight);
    stroke(0);
    fill(232, 26, 12);
    ellipse(centerX, Iy, eyeSize,eyeSize);
   
  }
// middle eye
  if (eye_value >= 2) {
    fill(255);
    stroke(0);
    ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
    ellipse(centerX + distactBetweenEyes, Iy, eyeSize );
  }

  ////////////// Head detail (slider 4) //////////////
  // feather
  fill(bg_color3);
  stroke(0);
  if (feather_value >= 1) {
    //fill(0); 
    line(0,-7, 0,-10);
  }
// feather
  if (feather_value >= 2) {
    fill(0);
    line(0,-7, 0,-10);
    line(0,-7, 3, -10);
    line(-3,-10, 0, -7);
  }

  if (feather_value >= 3) {
    fill(0);
    stroke(235, 219, 38);
    line(0,-7, 0,-10);
  }

  ////////////// Face detail (slider 5) //////////////
  if (Fdet_value >= 1) {
    stroke(arrweight-0.5);
    fill(224, 27, 27);
   // ellipse(0, -5, 1,1);
  }

  if (Fdet_value >= 2) {
    fill(56, 214, 39);
   // triangle(-2,-6,0,-4,2,-6);
  }

  if (Fdet_value >= 3) {
    fill(56, 214, 39);
    //square(-2,-6,2,2);
  }
 
////////////// Eyebrow detail (slider 6) //////////////

//////Upwards/////
if (Brow_value > 2) {
  stroke(arrweight-0.8);
  fill(224, 27, 27);
  rotate(-15)
  rect(2.5, -4.5, 3,0.5); //Left eyebrow
  rotate(30)
  rect(-5, -4.5, 3,0.5); //right eyebrow
}

//////Downwards//////
if (Brow_value < 2) {
  stroke(arrweight-0.8);
  fill(224, 27, 27);
  rotate(-15)
  rect(-3, -6.5, 3,0.5); //Left eyebrow
  rotate(30)
  rect(0, -6.5, 3,0.5); //right eyebrow
}

//////side? (idk how to describe it)//////
if (Brow_value === 2) {
  stroke(arrweight-0.8);
  fill(224, 27, 27);
  rect(-4.3, -5.5, 2.8,0.5); //Left eyebrow
  rect(1.7, -5.5, 2.8,0.5);  
}

////////////// Ear detail (slider 7) //////////////







////////////// Nose detail (slider 8) //////////////




////////////// Beard detail (slider 9) //////////////



////////////// end of face 1 (Thinius)//////////////

}
////////////// start of face 2 (thickius) //////////////
/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function blockyFace(thinness_value) {
  ////////////// Face shape//////////////
  noStroke();
    fill(121, 92, 50);
    let head_width = map(thinness_value, 0, 100, 8, 20);
    rect(-head_width/2, -9, head_width, 18);
  
    // eyes
    fill(234, 122, 244);
    ellipse(-2, -4, 1);
    ellipse( 2, -4, 1);
  }

////////////// End of face 2 (thickius) //////////////

////////////// Start of face 3 (Thirdius)//////////////
function simplePurpleFace() {
  fill(153, 121, 80); //Brown
  noStroke();
  
  stroke(0);
  ellipse(0,5,6,8);//bottom shelf of face shape
  ellipse(0,-2.5,15,15)//top half of face shape


  // eyes
  fill(255, 217, 114);
  ellipse(-3, 0, 3);
  ellipse( 3, 0, 3);
}
////////////// End of face 3 (Thirdius) //////////////