/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
let names = [
    "Cristiano Ronaldo",
"Donald Trump",
"Selena Gomez",
"John cena",
"UnderTaker",
"VVin Diesel",
"Tayyip Erdogan"
];
for (let i = 0; i< names.length; i++){
    console.log(names[i]+"\tYou are invited to dinner\n ")};
    let cant_make_it = names[3];
    console.log(`${cant_make_it}, can't make it today..`);
    let new_guest = "Jeffery Bezos";
    names[3] = new_guest
    for (let i = 0; i< names.length; i++){
        console.log(names[i]+"\tYou are invited to dinner\n ")};

export{};