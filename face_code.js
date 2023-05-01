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
function orangeAlienFace(tilt_value, eye_value, mouth_value, feather_value, Fdet_value,Brow_value, Ear_value, Pup_value) {
  const bg_color3 = [122, 67, 43];
  const fg_color3 = [58, 31, 4];

  let headSize = 10;
  let eyeSize = 2;
  let centerX = 0;
  let Iy = -4;
  let distactBetweenEyes = 3;
  let MouthDrop = 7;
  let arrweight = 0.3; //stroke weight best working for arrangement
  
  ////////////// Rotate face (slider 1) //////////////
  angleMode(DEGREES);
  rotate(tilt_value);
  strokeWeight(arrweight);


////////////// Ear detail (slider 7) //////////////

////// Diamond //////
if (Ear_value < 2 ) {
  strokeWeight(arrweight);
  noFill();
  //fill(224, 27, 27);
  ellipse(-5.5, -4, 2, 2);//left ear
  ellipse(5.4, -4, 2, 2);//left ear
  line(-6.5,-4,-6.5,-1); //left earring
  line(6.4,-4,6.5,-1); //right earring
  
  //rotate squares into diamonds
  push();
  fill(224, 27, 27);//red
  rotate(45);//degrees
  square(-5.5, 3.7, 1);//left earring diamond
  square(3.3, -6, 1);//right earring diamond
  pop();
}

////// ball //////
if (Ear_value === 3) {
  strokeWeight(arrweight);
  noFill();
  //fill(224, 27, 27);
  ellipse(-5.5, -4, 2, 2);//left ear
  ellipse(5.4, -4, 2, 2);//right ear
  line(-6.5,-4,-6.5,-1); //left earring
  line(6.4,-4,6.5,-1); //right earring
  fill(224, 27, 27); //red
  ellipse(-6.5, -0.5, 1, 1);//left earring ball
  ellipse(6.5, -0.5, 1, 1);//right earring ball
}

////// Tri //////
if (Ear_value > 1) {
  strokeWeight(arrweight);
  noFill();
  //fill(224, 27, 27);
  ellipse(-5.5, -4, 2, 2);//left ear
  ellipse(5.4, -4, 2, 2);//right ear
  line(-6.5,-4,-6.5,-1); //left earring
  line(6.4,-4,6.5,-1); //right earring
  line(-6.5,-4,-6.5,-1); //left earring
  line(6.4,-4,6.5,-1); //right earring
  fill(56, 214, 39);//Green
  triangle(-6.5, -1, -7, 0, -6, 0 ); //left tri
  triangle(6.5, -1, 7, 0, 6, 0 );// right tri
}

////////////// head shape //////////////
 // ellipse(centerX, 0, headSize, headSize);
  fill(207, 146, 93); //brown
  stroke(0); //black
  triangle(-4.7,3.1,0,6.5,4.7,3.1); //bottom half of mask
  //quad(-4.8,3,-2,6,3,6,4.9,3);
  rect(-5, -7, headSize, headSize); //top half of mask
  
////////////// Mouth shape (slider 2) //////////////

////// Rect //////
   if (mouth_value < 2) {
     fill(255);
     rect(-2.5,1,5,1.5);
   }
 
 ////// round rect //////
   if (mouth_value > 1) {
     fill(255);
     rect(-2, 1.5, 4, 1, 0.2);
   } 

   ////// circle //////
   fill(255); //white
   stroke(0); //black
   if (mouth_value > 2.9 ) {
     fill(255); // white
     ellipse(0,1.5,4.5,2.5); 
   }
////////////// Eye shape (slider 3) //////////////
  
////// 2 traditonal eyes //////
  if (eye_value === 1 || eye_value == 3) {
    strokeWeight(arrweight);
    stroke(0);
    fill(234, 242, 170); //creamish
    ellipse(centerX, Iy, eyeSize,eyeSize);
   
  }
////// middle eye //////
  if (eye_value >= 2) {
    fill(234, 242, 170); //creamish
    stroke(0);
    ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
    ellipse(centerX + distactBetweenEyes, Iy, eyeSize );
  }

  ////////////// Head detail (slider 4) //////////////
  // singular feather
  fill(bg_color3);
  stroke(0);
  if (feather_value >= 1) {
    //fill(0);                 
    line(0,-7, 0,-10);
    line(0,-7, 0, -5)
  }

////// triple black feather //////
  if (feather_value >= 2) {
    fill(0);
    stroke(0);
    line(0,-7, 0,-10);
    line(0,-7, 3, -10);
    line(-3,-10, 0, -7);
  }

  ////// triple feather (multi) //////
  if (feather_value >= 3) {
    fill(0);
    stroke(224, 27, 27); //red
    line(0,-7, 3, -10);
    stroke(255, 251, 0); //yellow
    line(-3,-10, 0, -7);
    stroke(56, 214, 39); // green
    line(0,-7, 0,-10);


  }

  ////////////// Face detail (slider 5) //////////////
  if (Fdet_value <= 1) {
    stroke(arrweight-0.5);
    fill(56, 214, 39);
    ellipse(0, -6, 1,1)

  }

////// tri details //////
  if (Fdet_value === 2) {
    stroke(0);
    fill(56, 214, 39);
    triangle(-4,-1,-3,-2.8,-2,-1);
    triangle(4,-1,3,-2.8,2,-1);
  }
////// {} //////
  if (Fdet_value === 3) {
    push();
    fill(56, 214, 39);
    textSize(2);
    rotate(90);
    text('{', -2.5, 3.5);
    text('{', -2.5, -2.5);
    pop();
  }
 
////////////// Eyebrow detail (slider 6) //////////////

//////Upwards/////
if (Brow_value > 2) {
  stroke(arrweight-0.8);
  fill(224, 27, 27);
  rotate(-15);
  rect(2.5, -4.5, 3,0.5); //Left eyebrow
  rotate(30);
  rect(-5, -4.5, 3,0.5); //right eyebrow
}

//////Downwards//////
if (Brow_value < 2) {
  stroke(arrweight-0.8);
  fill(224, 27, 27);
  rotate(-15);
  rect(-3, -6.5, 3,0.5); //Left eyebrow
  rotate(30);
  rect(0, -6.5, 3,0.5); //right eyebrow
}

//////side? (idk how to describe it)//////
if (Brow_value === 2) {
  stroke(arrweight-0.8);
  fill(224, 27, 27);
  rect(-4.3, -5.5, 2.8,0.5); //Left eyebrow
  rect(1.7, -5.5, 2.8,0.5);  //right eyebrow
}

////////////// Pupil detail (slider 8) //////////////

////// Black //////
if (Pup_value === 1){
  noStroke();
  fill(0);
  ellipse(-3,-4,0.5,0.5);
  ellipse(3,-4,0.5,0.5);
}

////// White //////
if(Pup_value === 3){
  noStroke();
  fill(255);
  ellipse(-3,-4,0.5,0.5);
  ellipse(3,-4,0.5,0.5);
}

////// Empty //////
if(Pup_value === 2){
////// This is purposly empty //////
}

//////Eye changes//////



////////////// Beard detail (slider 9) //////////////


}
////////////// end of face 1 (Thinius)//////////////



////////////// start of face 2 (Thirdius) //////////////
/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function blockyFace(thinness_value,eye_value) {

  ////////////// Face shape//////////////
  noStroke();
    fill(121, 92, 50);
    let head_width = map(thinness_value, 0, 100, 8, 20);
    //ellipse(0,-3, 9,9);
    rect(-5,-5,10,7,1);
    rect(-4,2,2,3);

  
    // eyes

////// 2 traditonal eyes //////
if (eye_value === 1 || eye_value == 3) {
  strokeWeight(arrweight);
  stroke(0);
  fill(234, 122, 244); //creamish
  ellipse(centerX, Iy, eyeSize,eyeSize);
 
}
////// middle eye //////
if (eye_value >= 2) {
  fill(234, 122, 244); //creamish
  stroke(0);
  ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
  ellipse(centerX + distactBetweenEyes, Iy, eyeSize );
}

  }

////////////// End of face 2 (thickius) //////////////

////////////// Start of face 3 (Thirdius)//////////////

////////////// head shape //////////////
function simplePurpleFace(Ear_value, Brow_value) {

  let headSize = 10;
  let eyeSize = 2;
  let centerX = 0;
  let Iy = -4;
  let distactBetweenEyes = 3;
  let MouthDrop = 7;
  let arrweight = 0.3; //stroke weight best working for arrangement

  fill(255);
  ellipse(0,-5,15,10);
  fill(153, 121, 80); //Brown
  noStroke();
  stroke(0);
  noFill();
  ellipse(0,5,5,5);//bottom shelf of face shape
  fill(255); //Brown
  ellipse(0,-1,12,12)//top half of face shape

////////////// Eye shape (slider 3) //////////////
  fill(255, 217, 114);
  ellipse(-3, 0, 3);
  ellipse( 3, 0, 3);


////////////// Eyebrow detail (slider 6) //////////////

//////Upwards/////
if (Brow_value > 2) {
  stroke(arrweight-0.8);
  fill(255, 217, 114);
  rotate(-15);
  rect(2.5, -4.5, 3,0.5); //Left eyebrow
  rotate(30);
  rect(-5, -4.5, 3,0.5); //right eyebrow
}

//////Downwards//////
if (Brow_value < 2) {
  stroke(arrweight-0.8);
  fill(255, 217, 114);
  rotate(-15);
  rect(-3, -6.5, 3,0.5); //Left eyebrow
  rotate(30);
  rect(0, -6.5, 3,0.5); //right eyebrow
}

//////side? (idk how to describe it)//////
if (Brow_value === 2) {
  stroke(arrweight-0.8);
  fill(255, 217, 114);
  rect(-4.3, -2.5, 2.8,0.5); //Left eyebrow
  rect(1.7, -2.5, 2.8,0.5);  //right eyebrow
}

}
////////////// End of face 3 (Thirdius) //////////////