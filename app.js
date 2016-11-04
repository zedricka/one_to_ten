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
var animal = "Alpaca"

function animalHouse (bork, boof){
  if (bork + boof){
    count = "OVER 9000";
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
  if (avengersAssemble == nah){
    console.log ("Avengers assemble!" + avengersAssemble);
  }
  if ("ironman" = "ironman"){
    console.log ('Sorry, you are not needed for this mission');
  }
  if ("captain america" = "captain america"){
    console.log ('Sorry, you are not needed for this mission');
  }
  if ()
}