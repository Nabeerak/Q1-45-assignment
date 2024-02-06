/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, 
and it should print a summary of the sandwich that is being ordered. 
Call the function three times, using a different number of arguments each time.*/

function sandwich(...items: string[]) {
    console.log("Sandwich Summary:");
 if (items.length === 0) {
        console.log("No items selected. Please choose some items for your sandwich.");
    } else {
     console.log("Items on the sandwich:");
     for (const item of items) {
  console.log(` ${item}`);
}
 }
    console.log("");  
}

sandwich("Bread", "Cheese", "Tomato", "Lettuce", "Mayo");
sandwich("Chicken", "Avocado", "Bacon");
sandwich();
