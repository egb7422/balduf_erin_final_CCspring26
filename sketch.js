// basically in the end add sound library so that keyboard plays
// prototype of keyboard visuals
//   textStyle(BOLD); // p5 example from https://p5js.org/reference/p5/textStyle/

let k= ''; //var stores the current key being pressed

function setup(){

  createCanvas(windowWidth, windowHeight); // makes canvas the size of the window

  textAlign(CENTER,CENTER); // p5 example: https://p5js.org/reference/p5/textAlign/ -> centers text horizontally and vertically
  textSize(32); // size of text, p5 example: https://p5js.org/reference/p5/textSize/



}


function draw(){


  background(0); // black background

  let w = width/7; // divide canvas into 7 equal parts
  let h = height/3; // make key height fit screen
  let y = height/2 - (h/2); // center keys vertically


  if(k === 'Z'){ // if the z key is pressed
    fill(200,100,100); // pressed = darker color
  }
  else{
    fill(255,179,186); // if not pressed = lighter standard pastel color
  }
  rect(0*w,y,w,h); // draw rectangle for key in first slot
  fill(0); // text color black
  text('Z',w*0.5,height/2); // draw corresponding letter on the key, centered in key


  if(k === 'X'){
    fill(200,150,100);
  }
  else{
    fill(255,223,186);
  }
  rect(1*w,y,w,h);
  fill(0);
  text('X',w*1.5,height/2);



  if(k === 'C'){
    fill(200,200,100);
  }
  else{
    fill(255,255,186);
  }
  rect(2*w,y,w,h);
  fill(0);
  text('C',w*2.5,height/2);



  if(k === 'V'){
    fill(100,200,150);
  }
  else{
    fill(186,255,201);
  }
  rect(3*w,y,w,h);
  fill(0);
  text('V',w*3.5,height/2);



  if(k === 'B'){
    fill(100,150,200);
  }
  else{
    fill(186,255,255);
  }
  rect(4*w,y,w,h);
  fill(0);
  text('B',w*4.5,height/2);



  if(k === 'N'){
    fill(150,100,200);
  }
  else{
    fill(218,186,255);
  }
  rect(5*w,y,w,h);
  fill(0);
  text('N',w*5.5,height/2);



  if(k === 'M'){
    fill(200,100,180);
  }
  else{
    fill(255,186,245);
  }
  rect(6*w,y,w,h);
  fill(0);
  text('M',w*6.5,height/2);



  // instructions
  fill(255); // white text
  textSize(20); // smaller
  text("Press the Z, X, C, V, B, N, or M key!", width/2,50); // middle and top of page
}

function keyPressed(){

  k = key; // store key exactly as pressed
}

function keyReleased(){

  k = ''; // reset/clear the key when released
}

