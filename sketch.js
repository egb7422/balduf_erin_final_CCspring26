// basically in the end add sound library so that keyboard plays
// prototype of keyboard visuals

let k= ''; //var stores the current key being pressed

let s1, s2, s3, s4, s5, s6, s7; // soon to be 7, one for each key's sound
let customFont; // var for custom font

/// MAYBE new sound effects to switch to: my own that I make in everyday conversation?: 1: eww, 2: yippee!, 3: phew!, 4: grrr, 5: awww :(, 6: yessss, 7: bruh

function preload(){ // load sound files before the sketch runs

  s1 = loadSound('data/Bubble_Sound.mp3'); // z sound -> p5 example at https://p5js.org/reference/p5/loadSound/
  s2 = loadSound('data/Glitter_Sound.mp3'); // x sound
  s3 = loadSound('data/Cheering_Sound.mp3'); // c sound
  s4 = loadSound('data/Nom_Sound.mp3'); // v sound
  s5 = loadSound('data/Eww_Sound.mp3'); // b sound
  s6 = loadSound('data/Meow_Sound.mp3'); // n sound
  s7 = loadSound('data/Wow.mp3'); // m sound

  customFont = loadFont('data/Nirakolu.otf'); // load the font i want to use

}

function setup(){

  createCanvas(windowWidth, windowHeight); // makes canvas the size of the window

  textAlign(CENTER,CENTER); // p5 example: https://p5js.org/reference/p5/textAlign/ -> centers text horizontally and vertically
  textSize(32); // size of text, p5 example: https://p5js.org/reference/p5/textSize/



}


function draw(){


  background(0); // black background
  textStyle(BOLD); // p5 example from https://p5js.org/reference/p5/textStyle/

  let w = width/7; // divide canvas into 7 equal parts
  let h = height/3; // make key height fit screen
  let y = height/2 - (h/2); // center keys vertically


  if(k === 'Z'){ // if the z key is pressed
    fill(4,20,50); // pressed = darker color
  }
  else{
    fill(6,31,75); // if not pressed = lighter standard pastel color
  }
  rect(0*w,y,w,h); // draw rectangle for key in first slot
  fill(0); // text color black
  text('Z',w*0.5,height/2); // draw corresponding letter on the key, centered in key


  if(k === 'X'){
    fill(0,40,80);
  }
  else{
    fill(3,57,108);
  }
  rect(1*w,y,w,h);
  fill(0);
  text('X',w*1.5,height/2);



  if(k === 'C'){
    fill(0,60,120);
  }
  else{
    fill(0,91,150);
  }
  rect(2*w,y,w,h);
  fill(0);
  text('C',w*2.5,height/2);



  if(k === 'V'){
    fill(70,120,140);
  }
  else{
    fill(100,151,177);
  }
  rect(3*w,y,w,h);
  fill(0);
  text('V',w*3.5,height/2);



  if(k === 'B'){
    fill(140,180,200);
  }
  else{
    fill(179,205,224);
  }
  rect(4*w,y,w,h);
  fill(0);
  text('B',w*4.5,height/2);



  if(k === 'N'){
    fill(170,200,220);
  }
  else{
    fill(206,228,245);
  }
  rect(5*w,y,w,h);
  fill(0);
  text('N',w*5.5,height/2);



  if(k === 'M'){
    fill(190,220,240);
  }
  else{
    fill(227,243,255);
  }
  rect(6*w,y,w,h);
  fill(0);
  text('M',w*6.5,height/2);


push(); // isolate new style
  // instructions
  fill(255); // white text
  textSize(40); // smaller
  textStyle(BOLDITALIC);
  textFont(customFont); // apply custom font only to typed sentence

  let wiggleX = sin(frameCount *0.1)*3; // sin creates a smooth left to right oscillation type of movement, frameCount increases every frame automatically, *0.1 slows down movement, (sin() is between -1 ans 1), *3 scales movement to-3 to 3
  let wiggleY = cos(frameCount*0.1)*3; // starting at new pos, using both cos and sin creates a circular wiggle, same speed and size as X
  text("The Sounds of Erin", width/2 +wiggleX,40+wiggleY); // middle and top of page, added the wiggle
  
  //textFont("serif"); // apply other font only to typed sentence
  textStyle(NORMAL); // p5 example from https://p5js.org/reference/p5/textStyle/
  textSize(18); // smaller
  text("Press the Z, X, C, V, B, N, or M key!", width/2,80); // middle and top of page
pop(); // return to old style


// corner decorations = calling custom function
drawSwirl(40,40); // top left
drawSwirl(width-40,40); // top right
drawSwirl(40,height-40); // bottom left
drawSwirl(width-40,height-40); // bottom right
}

function keyPressed(){

  k = key; // store key exactly as pressed

  if(k === 'Z'){ // play sound when key is pressed
    s1.loop(); // loop the bubble sound when held down, p5 example at https://p5js.org/reference/p5/loop/
  }
  if(k === 'X'){ // ^ for X key
    s2.loop(); // loop the glitter sound effect
  }
  if(k === 'C'){ // ^ for C key
    s3.loop(); // loop the hurray sound effect
  }
  if(k === 'V'){ // ^ for V key
    s4.loop(); // loop the eating sound effect
  }
  if(k === 'B'){ // ^ for B key
    s5.loop(); // loop the ewww sound effect
  }
  if(k === 'N'){ // ^ for N key
    s6.loop(); // loop the meow sound effect
  }
  if(k === 'M'){ // ^ for M key
    s7.loop(); // loop the wow sound effect
  }
}

function keyReleased(){

  let released = key; //which key was released by user

  if(released === 'Z'){
    s1.stop(); // stop the matching sound (bubbles)
  }
  if(released === 'X'){
    s2.stop(); // ^ for glitter sound effect
  }
  if(released === 'C'){
    s3.stop(); // ^ for hurray sound effect
  }
  if(released === 'V'){
    s4.stop(); // ^ for eating sound effect
  }
  if(released === 'B'){
    s5.stop(); // ^ for eww sound effect
  }
  if(released === 'N'){
    s6.stop(); // ^ for meow sound effect
  }
  if(released === 'M'){
    s7.stop(); // ^ for wow sound effect
  }

  k = ''; // reset/clear the key visual when released

}

function mousePressed(){
  userStartAudio(); // needed for browser to allow sound, p5 example at https://p5js.org/reference/p5/userStartAudio/
}

function drawSwirl(x,y){ // custom function: draws one swirl at given x,y pos
  push(); 
  translate(x,y); // move (0,0) to wherever corner is, everything drawn is relative to (x,y)
  noStroke(); // no outline for ellipses
  fill(255,150); // semi transparent white

  for(let i = 0; i < 20; i++){ // loop to create multiple ellipses, runs 20 times for 20 circles, each loop creates one step of spiral
    let angle = i *0.3+frameCount*0.05; // i*0.3 speads points around, framecount adds slow rotation animation
    let radius = i*2; // increase distance from center (radius) to create a spiral, increases as i increases to push ellipses outward
    let posX = cos(angle)*radius; // convert x pos, cos(angle) gives horizontal direction (-1 to 1), multiply by radius to scale outward
    let posY = sin(angle)*radius; // convert y pos, sin(angle) gives verticle direction (-1 to 1), ^
    ellipse(posX,posY,5,5); // small circle at newly defined positions
  }
  pop();
}
