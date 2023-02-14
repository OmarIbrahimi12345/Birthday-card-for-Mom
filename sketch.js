var mom,mom_image;
var background_image;
var heart;
var birthday_song;
var ground;
var wishes_image;




function preload(){
 // mom_image = loadImage("mom.png");
  background_image = loadImage("background1.jpg");
  wishes_image = loadImage("wishes.jpeg");
  birthday_song = loadSound("birthday_song.mp3");
}

function setup(){
  createCanvas(1100,1100);
  background("red");
  image(background_image,0,0,1100,1100);
    textSize(50);
    fill("red");
    strokeWeight(5);
    text("Click the heart to reveal the card!!!",180,290);
   //text to display
 heart = createImg("heart.png");
 heart.position(550,550);
 heart.size(90,90);
 heart.mouseClicked(openCard);
  
} //close setup
/*
  1. put text on heart to click for surprise
  2. mouseOPressed- new background
  3. falling hearts spwanHearts-in y direction
  4. put mom image at the bottom in centre
  5. backgorund birthday muscis
  6. hearts score on top left
  7. isTouching hearts- mom then increase score to 2
  8. if score ==10 then change image to greeting and play you voice recorded wishes.


*/


function openCard(){
    background("black");
    // lchange to wishes image

    image(wishes_image,0,0,1100,1100);
    birthday_song.play();
    textSize(60);
    fill("red");
    strokeWeight(10);
    text("Happy delayed a little Birthday MOM",60,80);

}
