var ball,myball;
var database;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    myball = createSprite(200,200,10,10);
    myball.shapeColor = "green"
    var hypnoticBallPosition = database.ref('ball/position');
    hypnoticBallPosition.on("value", readPosition);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        GBPosition(-2,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        GBPosition(2,0);
    }
    else if(keyDown(UP_ARROW)){
        GBPosition(0,-2);
    }
    else if(keyDown(DOWN_ARROW)){
        GBPosition(0,+2);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function readPosition(data){
    position = data.val();
    console.log(position.x);
    myball.x = position.x;
    myball.y = position.y;
}
function GBPosition(x,y){
    database.ref('ball/position').set(
        {x:position.x+x,
        y:position.y+y}
    )
}