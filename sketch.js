let state = 1;
let myXPos = 100;
let myYPos = 100;
let enemyXPos = 300;
let enemyYPos = 1;
let score = 0;
let message = "YOU WIN!";
let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;
function setup() {
   createCanvas(500, 500);
   noStroke();
   rectMode(CENTER);
}
function draw() {
    if(state == 1)
    {
        background(0);
        textSize(30);
        text("Score: " + score, 30, 40);
        fill(0,0,255);
        rect(enemyXPos, enemyYPos, 50,50);
        fill(255, 0, 0);
        rect(myXPos, myYPos, 50, 50);
        enemyYPos +=3;
        if (keyIsDown(LEFT_ARROW)) {
            myXPos -= 3;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            myXPos += 3;
        }
        if (keyIsDown(UP_ARROW)) {
            myYPos -= 3;
        }
        if (keyIsDown(DOWN_ARROW)) {
            myYPos += 3;
        }
        myLeft = myXPos - 25;
        myRight = myXPos + 25;
        myTop = myYPos - 25;
        myBottom = myYPos + 25;
        enemyLeft = enemyXPos - 25;
        enemyRight = enemyXPos + 25;
        enemyTop = enemyYPos - 25;
        enemyBottom = enemyYPos + 25;
        if(myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop)
        {
        }
         else{
             fill(random(255), random(255), random(255));
             enemyXPos = random(0,500);
             enemyYPos = 1;
             score += 1;
         }
         if (enemyYPos > 500)
         {
             enemyXPos = random(0,500);
             enemyYPos = 1;
         }
    }
    if(score > 10)
    {
        state = 2;
    }
    if(state == 2)
    {
        background(0,255,0);
        text(message, 190, 250);
    }
}
//Kayere, Ethan, and Da'karee