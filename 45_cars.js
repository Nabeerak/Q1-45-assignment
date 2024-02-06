/*Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly.*/
function cars(manufacturer, model_name, ...optional_features) {
    let about_cars = {
        "manufacturer": manufacturer,
        "model name": model_name
    };
    for (const option of optional_features) {
        Object.assign(about_cars, option);
    }
    return about_cars;
}
console.log(cars("Toyota", "Camry", { color: "Red" }, { year: 2022 }, { features: ["GPS", "Sunroof"] }));
export {};
