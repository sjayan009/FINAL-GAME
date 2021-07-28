//This GameState is for the description of the game. 
function gameState0()
{
    if(gameState === 0)
    {
      textSize(15.75);
      fill("white");
      text("This game's purpose is to spread the awareness of poaching.", 10, 500);
      text("Elephants are being poached for their ivory tusks.", 10, 525);
      text("The main character is the egg whose name is Alex.", 10, 550);
      text("Move him with the arrow keys.", 10, 575);
      text("Press spacebar to shoot a law sign that captures a poacher, which keeps him in jail.", 10, 600);
      text("Collect the seed that is dropped when the poacher is captured. Collect all 3.", 10, 625);
      text("Press the 'e' key once(and only once) you see trees after the gray line!", 10, 650)
      fill("red");
      text("Beware, the white square cannot be penetrated by the law-sign.", 10, 675);
      fill("blue");
      textSize(13);
      text("Hold DOWN arrow key", 460, 675);
      textSize(15.75);
      fill("red");
      text("If you touch a poacher or the white square, you die.", 10, 700);
      textSize(15);
      text("If you pass the gray line without collecting the required amount of seeds ,", 10, 725);
      textSize(25);
      text("YOU HAVE TO RESTART THE ENTIRE GAME!", 25, 800)
    }
}