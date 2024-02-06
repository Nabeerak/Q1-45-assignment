/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.*/
//• Write one version of this program that runs the if block and another that runs the else block.

var alien_color: string = "green";
if(alien_color=== "green"){
   console.log("the player just earned 5 points.")}
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
else if(alien_color === "red" || alien_color === "yellow"){
   console.log("the player just earned 10 points.")
}else{
    console.log("game over")
};

var alien_color: string = "blue";
if(alien_color=== "green"){
   console.log("the player just earned 5 points.")}
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
else if(alien_color === "red" || alien_color === "yellow"){
   console.log("the player just earned 10 points.")
}else{
    console.log("game over")
};