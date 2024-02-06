/*Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names
and one array with the Great added to each magician’s name.*/
var magician = ["joker", "Superman", "Green latern", "Wonder woman", "Darkseid", "Omni man", "Sinetro"];
function show_magicians() {
    console.log(magician);
}
;
show_magicians();
for (let i = 0; i < magician.length; i++) {
    function make_great() {
        console.log(`The great ${magician[i]}`);
    }
    make_great();
}
;
export {};
