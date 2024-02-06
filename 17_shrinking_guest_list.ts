/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
let names:string[] = [
    "Cristiano Ronaldo",
"Donald Trump",
"Selena Gomez",
"John cena",
"UnderTaker",
"Vin Diesel",
"Tayyip Erdogan"
];
for (let i = 0; i< names.length; i++){
  console.log(names[i]+"\tYou are invited to dinner")};
  let cant_make_it = names[3];
  console.log(`${cant_make_it}, can't make it today..`);
  let new_guest = "Jeffery Bezos";
names[3] = new_guest
for (let i = 0; i< names.length; i++){
  console.log(names[i]+"\tYou are invited to dinner")};
  console.log("we have found a bigger table")
names.push("Robert Downey Jr", "Elon Musk")
for (let i = 0; i< names.length; i++){
console.log(names[i]+"\tYou are invited to dinner")};
console.log("I can invite only two people for dinner.");
 

let guest=names.slice(0,2);
console.log(guest)
for(let i=0; i< guest.length;i++){
console.log(guest[i]+"\tYou are still invited to dinner")};

export{};

