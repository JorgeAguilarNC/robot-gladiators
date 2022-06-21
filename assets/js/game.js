// this creates a function named "fight"
function fight() {
  window.alert("the fight has begun");
}
//fight();
var playerMoney = 10;
var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 50;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

function fight() {
  window.alert("Welcome to Robot Gladiators!");
  var promptfight = window.prompt(
    "would you like to Fight or SKIP this battle? enter 'fight' or 'SKIP' to choose."
  );
  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  // if player choses to fight, fight
  if (promptFight === "fight" || promptFight === "Fight") {
    //remove enemy's health b subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
  }
  // Log a resulting message to the console so we know that it worked.
  console.log(
    playerName +
    " attacked " +
    enemyName +
    ". " +
    enemyName +
    " now has " +
    enemyHealth +
    " health remaining."
  );
  //check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + "has died!");
  } else {
    window.alert(enemyName + "still has" + enemyHealth + "health left.");
  }
  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  // Log a resulting message to the console so we know that it worked.
  console.log(
    enemyName +
    "attacked" +
    palayerName +
    "now has" +
    playerHealth +
    "health remaining."
  );
  //check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + "has died!");
  } else {
    window.alert(playerName + "still has" + playerHealth + "health left.");
  }
  // if player choses to skip
} else if (promptFight === "skip"){
  sindow.alert (playerName + "has chosen to skip the fight!");
}else{
  window.alert("You need to choose a valid option. try again!");
}
}
fight();
