// create variables
var hero = "Donald Trump";
var gender = "Male";
var age = 70;
var weapon = "Wall";
var pronoun;
var xp;

// conditional to set pronoun
if (gender === "Male") {
  pronoun = "his";
} else if (gender === "female"){
  pronoun = "her";
} else{
  pronoun = "their"
}


// conditional to set age && xp
//if age is less than or equal 18 -> set xp = "just beginning"
//if age greater than or equal 21 && less than or equal to 40
  // -> set xp = "has seen a few battles"
//if age greater than 40 -> set xp = "has lived through many epic battles"
if (age <= 18) {
  xp = "is just beginning";
} else if (age < 40 >= 21){
  xp = "has seen a few battles";
} else if (age > 40){
  xp = "has lived through many epic battles";
}


// create sentence with variables
console.log (hero + " is our lovable hero who " + xp + " with his trusty " + weapon);

// 1 Fish 2 Fish
var count;
var animal = "Alpaca";

function animalHouse (bork, boof){
  if (bork + boof == count){
    console.log (count);
  }
}
animalHouse(696969, 420420);

// 1 Fish 2 Many Fish (cont.)
if (count > 2)
    console.log ("We have too many " + animal + "s");
  else console.log ("Welcome to the club");

// Assemble the Avengers
var hero = "Thor"

function avengersAssemble (nah){
  if (nah == "ironman"){
    console.log ('Sorry, you are not needed for this mission');
  }
  else if (nah == "captain america"){
    console.log ('Sorry, you are not needed for this mission');
  }
  else if (nah == "black widow"){
    console.log ('Sorry, you are not needed for this mission');
  }
  else if (nah == "Thor"){
    console.log ("You should know that when you betray me, I will kill you.");
  }
}
avengersAssemble (nah);

// Lights Out
var lights == true;

if (lights == true){
  console.log ('And then there was light');
  else console.log ('Lights out');
}

//Vroom Vroom
var carType = ["Toyota", "Lamborghini", "Tesla"];
var color = ["red", "blue", "black"];
var num = 666;

  if (carType[0] && color[1] ){
    console.log ("We have " + color[1] + " " + carType[0]);
  }
  else if (carType[1] && color[0] ){
    console.log ("We have " + color[0] + " " + carType[1]);
  }
  else if (carType[2] && color[2] ){
    console.log ("We have " + color[2] + " " + carType[2]);
  }
  else {
    console.log("We don't have any blue Toyotas in stock")
  }