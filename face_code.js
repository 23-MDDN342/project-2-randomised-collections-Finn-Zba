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
function orangeAlienFace(tilt_value, eye_value, mouth_value, feather_value) {
  const bg_color3 = [122, 67, 43];
  const fg_color3 = [58, 31, 4];

  let headSize = 10
  let eyeSize = 2;
  let centerX = 0;
  let Iy = -4
  let distactBetweenEyes = 3
  let MouthDrop = 7
  
////////////// Rotate face (slider 1) //////////////
  angleMode(DEGREES);
  rotate(tilt_value);

////////////// head shape //////////////
  noStroke();
  fill(122, 67, 43);
  
 // ellipse(centerX, 0, headSize, headSize);
  rect(-5, -7, headSize, headSize);
  fill(122, 67, 43);
  triangle(-5,3,0,8,5,3);
  
////////////// Mouth shape (slider 2) //////////////
   // feather
   fill(bg_color3);
   stroke(0);
   if (mouth_value >= 1) {
     //fill(0);
     ellipse(0,0,1,1);
 
   }
 // feather
   if (mouth_value >= 2) {
     fill(0);
     ellipse(0,0,3,3);
 
   }
 
   if (mouth_value >= 3) {
     fill(0);
     noStroke();
     quad(1, 1, 2, 2, 3, 3, 4, 4)
 
   } 

  
////////////// Eye shape (slider 3) //////////////
  
  // 2 traditonal eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color3);
    ellipse(centerX, Iy, eyeSize-1,eyeSize);
   
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


////////////// end of face 1 //////////////
}


function simplePurpleFace() {
  fill(153, 121, 80);
  noStroke();
  // head
  //ellipse(0, 0, 20);

  // eyes
  fill(255, 217, 114);
  ellipse(-3, -3, 3);
  ellipse( 3, -3, 3);
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function blockyFace(thinness_value) {
  // head
  noStroke();
  fill(121, 92, 50);
  let head_width = map(thinness_value, 0, 100, 8, 20);
  rect(-head_width/2, -9, head_width, 18);


  // eyes
  fill(234, 122, 244);
  ellipse(-2, -4, 1);
  ellipse( 2, -4, 1);
}
