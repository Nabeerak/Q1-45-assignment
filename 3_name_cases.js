/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
let name1 = "aiman";
console.log("UPPERCASE:", name1.toUpperCase());
let name2 = "AIMAN";
console.log("lowercase:", name2.toLowerCase());
let titlecase = name1.charAt(0).toUpperCase() + name1.slice(1);
console.log(titlecase);
export {};
