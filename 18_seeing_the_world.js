//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
let favourite_places = ["Tokyo", "Turkey", "Dubai", "Bata kundi", "chicago", "Mardan"];
//• Print your array in its original order.
console.log("original order:", favourite_places);
//• Print your array in alphabetical order without modifying the actual list.
let alphabetical_order = favourite_places.sort();
console.log("alphabetical order:", alphabetical_order);
//• Show that your array is still in its original order by printing it.
console.log("original order:", favourite_places);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse order of alphabetical order:", alphabetical_order.reverse());
//• Show that your array is still in its original order by printing it again.
console.log("original order:", favourite_places);
//• Reverse the order of your list. Print the array to show that its order has changed.
let reverse_order = favourite_places.reverse();
console.log("reverse order of original order:", reverse_order);
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("reversing the reversed order of the original order:", reverse_order.reverse());
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("order has been changed:", (reverse_order.reverse()).sort());
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("reversed alphabetical order:", alphabetical_order.reverse());
export {};
