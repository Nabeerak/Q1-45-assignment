/*Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.*/
var magician = ["joker", "Superman", "Green latern", "Wonder woman", "Darkseid", "Omni man", "Sinetro"];
for (let i = 0; i < magician.length; i++) {
    function make_great() {
        console.log(`The great ${magician[i]}`);
    }
    make_great();
}
;
export {};
