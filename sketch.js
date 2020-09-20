var readstate,changestate
var dog, happydog, food
var foodstock, database
var button1,button2
var lastfed,fedtime
var foodobj

function preload(){
 dogimg=loadImage("images/dogImg.png");
  dogimg1=loadImage("images/dogImg1.png");
  bedroomimg=loadImage("virtual pet images/Bed Room.png");
  gardenimg=loadImage("virtual pet images/Garden.png");
  washroomimg=loadImge("virtual pet images/Wash Room.png");
}



function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  var dog= createSprite (250,250,20,20);
  var foodobj = createSprite()
  dog.addImage(dogimg);
  foodstock=database.ref("food");
  foodstock.on("value",readstock);
  feed=createButton("feed the dog")
  feed.position(700,95);
  feed.mousepressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}


function draw() {  
  background(46,139,87);


  drawSprites();
  textSize(30);
  fill(red);
  stroke("black")
  text("food remaining:"+foods,170,200)
  text("press up arrow to feed!",130,10,300,20);
  display();
  if(gamestate!="Hungry"){
    feeddog.hide();
    addFood.hide();
    dog.remove();
  }else{
    feed.show();
    addFood.show();
    dog.addImage(sadDog)
  }
  currentTime=hour();
  if(currentTime==lastfed+1>>{
    update("playing");
    foodobj.garden();
  }else if(currentTime==(lastfed+2>>{
    update("sleeping")
  }else if{
    update("Bathing");
    foodobj.washroom();
  }else{
    update("Hungry");
    foodobj.display();
  
  fedtime=database.ref('FeedTime');
  fedtime.on("value",function(data){
    lastfed=data.val();
  });
  readstate=database.ref('gamestate');
  readstate.on("value",function(data){

    gamestate=data.val();
  });


}




function readstock(data){
  foods=dat.val();
}

function writestock(x){
  if(x<=0){
    x=0

  }else{
    x=x-1;
  }

  database.ref('/').update({
  Food:x  
  })
}





function feeddog(){
  dog.addImage(happyDog);

  foodobj.updateFoodStock(foodobj.getFoodstock()-1);
  database.ref("/").Update({
Food:fooodobj.getFoodstock(),
fedtime:hour()
  })
}
function addFoods(){
  foods++;
  database.ref('/').update({
  food:foods
  })
}