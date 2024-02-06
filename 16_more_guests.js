/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
let names = [
    "Cristiano Ronaldo",
    "Donald Trump",
    "Selena Gomez",
    "John cena",
    "UnderTaker",
    "VVin Diesel",
    "Tayyip Erdogan"
];
for (let i = 0; i < names.length; i++) {
    console.log(names[i] + "\tYou are invited to dinner\n ");
}
;
let cant_make_it = names[3];
console.log(`${cant_make_it}, can't make it today..`);
let new_guest = "Jeffery Bezos";
names[3] = new_guest;
for (let i = 0; i < names.length; i++) {
    console.log(names[i] + "\tYou are invited to dinner\n ");
}
;
console.log("we have found a bigger table");
names.splice(0, 0, "Robert Downey Jr", "Elon Musk");
for (let i = 0; i < names.length; i++) {
    console.log(names[i] + "\tYou are invited to dinner\n ");
}
;
export {};
