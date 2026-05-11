// a soundboard for people to get to know me and the art I make!
// for key pressing, capital letters must be used

let k= ''; //var stores the current key being pressed

let s1, s2, s3, s4, s5, s6, s7; //  one var for each key's sound
let img1, img2, img3, img4, img5, img6, img7; // one var for each image
let customFont; // var for custom font


/// new sound effects: my own that I make in everyday conversation: 1: eww (Authorship Unknown), 2: yippee! (The Creature), 3: phew! (Reaping What's Mine), 4: oooo (Abyssal Shapeshifter), 5: awww :( (Holding Sweetgrass), 6: yessss (Green World), 7: gulp (Hold Still)

function preload(){ // load sound files before the sketch runs

  s1 = loadSound('data/eww.wav'); // z sound -> preloading the sound for a smoother startup of the program, p5 example at https://p5js.org/reference/p5/loadSound/
  s2 = loadSound('data/yippee.wav'); // x sound ^
  s3 = loadSound('data/phew.wav'); // c sound ^
  s4 = loadSound('data/ooo.wav'); // v sound ^
  s5 = loadSound('data/aww.wav'); // b sound ^
  s6 = loadSound('data/yesss.wav'); // n sound ^
  s7 = loadSound('data/gulp.wav'); // m sound ^

  customFont = loadFont('data/Nirakolu.otf'); // load the custom font i want to use, downloaded from DaFont.com
  
  img1 = loadImage('data/image1.png'); // load Z image, preloading the image for a smoother startup of the program, images have been compressed to smaller versions already
  img2 = loadImage('data/image2.png'); // load X image ^
  img3 = loadImage('data/image3.png'); // load C image ^
  img4 = loadImage('data/image4.png'); // load V image ^
  img5 = loadImage('data/image5.png'); // load B image ^
  img6 = loadImage('data/image6.png'); // load N image ^
  img7 = loadImage('data/image7.png'); // load M image ^

}

function setup(){

  createCanvas(windowWidth, windowHeight); // makes canvas the size of the window

  textAlign(CENTER,CENTER); // p5 example: https://p5js.org/reference/p5/textAlign/ -> centers text horizontally and vertically
  textSize(32); // size of text, p5 example: https://p5js.org/reference/p5/textSize/


}


function draw(){


  background(0); // black starting background
  strokeWeight(6);

  // change backgrounds to match the vibe of each painting/artwork
  if(k === 'Z'){
    background(66, 30, 28); // if Z is pressed, change bg to red to match painting
  }
  if(k === 'X'){
    background(178, 209, 202); // if X is pressed, change bg to seafoam to match painting
  }
  if(k === 'C'){
    background(71, 112, 80); // if C is pressed, change bg to sage to match painting
  }
  if(k === 'V'){
    background(83, 65, 217); // if V is pressed, change bg to purple to match painting
  }
  if(k === 'B'){
    background(158, 237, 111); // if B is pressed, change bg to limegreen to match painting
  }
  if(k === 'N'){
    background(41, 29, 21); // if N is pressed, change bg to brown to match painting
  }
  if(k === 'M'){
    background(68, 87, 110); // if M is pressed, change bg to dusty blue to match painting
  }


  textStyle(BOLD); // p5 example from https://p5js.org/reference/p5/textStyle/

  let w = width/7; // divide canvas into 7 equal parts
  let h = height/3; // make key height fit screen
  let y = height - h; // moved to bottom of screen

  // keys of "my color palette," colors that make up me
  if(k === 'Z'){ // if the z key is pressed
    fill(57, 90, 125); // pressed = darker color
  }
  else{
    fill(108,142,178); // if not pressed = lighter standard pastel color
  }
  rect(0*w,y,w,h); // draw rectangle for key in first slot
  fill(0); // text color black
  text('Z',w*0.5,y+50); // draw corresponding letter on the key, centered in key


  if(k === 'X'){ // same as above for X key
    fill(34, 54, 46);
  }
  else{
    fill(61,87,76);
  }
  rect(1*w,y,w,h); // rectangle in second slot, same width and height
  fill(0);
  text('X',w*1.5,y+50);



  if(k === 'C'){ // same as above for C key
    fill(27, 86, 110);
  }
  else{
    fill(54,138,171);
  }
  rect(2*w,y,w,h); // rectangle in third slot, same width and height
  fill(0);
  text('C',w*2.5,y+50);



  if(k === 'V'){ // same as above for V key
    fill(108, 128, 56);
  }
  else{
    fill(165,189,101);
  }
  rect(3*w,y,w,h); // rectangle in fourth slot, same width and height
  fill(0);
  text('V',w*3.5,y+50);



  if(k === 'B'){ // same as above for B key
    fill(154, 181, 172);
  }
  else{
    fill(234,240,238);
  }
  rect(4*w,y,w,h); // rectangle in fifth slot, same width and height
  fill(0);
  text('B',w*4.5,y+50);



  if(k === 'N'){ // same as above for N key
    fill(49, 74, 158);
  }
  else{
    fill(75,102,195);
  }
  rect(5*w,y,w,h); // rectangle in sixth slot, same width and height
  fill(0);
  text('N',w*5.5,y+50);



  if(k === 'M'){ // same as above for M key
    fill(77, 96, 158);
  }
  else{
    fill(121,141,210);
  }
  rect(6*w,y,w,h); // rectangle in seventh slot, same width and height
  fill(0);
  text('M',w*6.5,y+50);


  // have images pop up

  imageMode(CENTER); // use first two parameters of image as the x and y of the image's center p5 ref: https://p5js.org/reference/p5/imageMode/
    if(k === 'Z'){ // if Z is pressed have "Authorship Unknown" piece shown
      image(img1, width/2, height/2-90, 1024-450, 833-400); // call corresponding image at centerish of canvas with original aspect ratio
  }
    if(k === 'X'){ // if X is pressed have "The Creature" piece shown
      image(img2, width/2, height/2-90, 784-500,1024-650); // call corresponding image at center of canvas with original aspect ratio
  }
    if(k === 'C'){ // if C is pressed have "Reaping What's Mine" piece shown
      image(img3, width/2, height/2-90, 1024-580,1006-580); // call corresponding image at center of canvas with original aspect ratio
  }
    if(k === 'V'){ // if V is pressed have "Abyssal Shapeshifter" piece shown
      image(img4, width/2, height/2-90, 1024-430,775-340); // call corresponding image at center of canvas with original aspect ratio
  }
    if(k === 'B'){ // if B is pressed have "Holding Sweetgrass" piece shown
      image(img5, width/2, height/2-90, 1024-520,785-400); // call corresponding image at center of canvas with original aspect ratio
  }
    if(k === 'N'){ // if N is pressed have "Green World" piece shown
      image(img6, width/2, height/2-90, 1024-530,966-520); // call corresponding image at center of canvas with original aspect ratio
  }
    if(k === 'M'){ // if M is pressed have "Hold Still" piece shown
      image(img7, width/2, height/2-90, 1024-540,883-460); // call corresponding image at center of canvas with original aspect ratio
  }



push(); // isolate new style
  // instructions
  fill(255); // white text
  textSize(40); // smaller
  textStyle(BOLDITALIC);
  textFont(customFont); // apply custom font 

  let wiggleX = sin(frameCount *0.1)*3; // sin creates a smooth left to right oscillation type of movement, frameCount increases every frame automatically, *0.1 slows down movement, (sin() is between -1 ans 1), *3 scales movement to-3 to 3
  let wiggleY = cos(frameCount*0.1)*3; // starting at new pos, using both cos and sin creates a circular wiggle, same speed and size as X
  text("The Simulation of Erin", width/2 +wiggleX,40+wiggleY); // middle and top of page, added the wiggle
  
  //textFont("serif"); // apply other font only to typed sentence
  textStyle(NORMAL); // p5 example from https://p5js.org/reference/p5/textStyle/
  textSize(18); // smaller
  /*
  text("a playable digital environment triggering fragments of an animated self", width/2,80); // middle and top of page, a description of the project
  stroke(255);  // white
  strokeWeight(3); // line width of 3
  line(width/3-30, 100, width/3+537, 100); // make a line underneath the text, underlined
  */
  let des = "a playable digital environment triggering fragments of an animated self"; // description sentence
  text(des, width/2,80); // draw text
  let lineWidth = textWidth(des); // measure width of text
  stroke(255); // white text
  strokeWeight(3); // line width
  line(width/2-lineWidth/2, 100,width/2+lineWidth/2,100); // left edge, y pos, right edge, y pos

  pop(); // return to old style



}

function keyPressed(){

  k = key; // store key exactly as pressed

  if(k === 'Z'){ // play sound when key is pressed
    s1.loop(); // loop the eww sound when held down, p5 example at https://p5js.org/reference/p5/loop/
  }
  if(k === 'X'){ // ^ for X key
    s2.loop(); // loop the yipee sound effect
  }
  if(k === 'C'){ // ^ for C key
    s3.loop(); // loop the phew sound effect
  }
  if(k === 'V'){ // ^ for V key
    s4.loop(); // loop the ooo sound effect
  }
  if(k === 'B'){ // ^ for B key
    s5.loop(); // loop the aww sound effect
  }
  if(k === 'N'){ // ^ for N key
    s6.loop(); // loop the yesss sound effect
  }
  if(k === 'M'){ // ^ for M key
    s7.loop(); // loop the gulp sound effect
  }
}

function keyReleased(){

  let released = key; //which key was released by user

  if(released === 'Z'){
    s1.stop(); // stop the matching sound (eww)
  }
  if(released === 'X'){
    s2.stop(); // ^ for yippee sound effect
  }
  if(released === 'C'){
    s3.stop(); // ^ for phew sound effect
  }
  if(released === 'V'){
    s4.stop(); // ^ for ooo sound effect
  }
  if(released === 'B'){
    s5.stop(); // ^ for aww sound effect
  }
  if(released === 'N'){
    s6.stop(); // ^ for yess sound effect
  }
  if(released === 'M'){
    s7.stop(); // ^ for gulp sound effect
  }

  k = ''; // reset/clear the key visual when released

}

function mousePressed(){
  userStartAudio(); // needed for browser to allow sound, p5 example at https://p5js.org/reference/p5/userStartAudio/
}
