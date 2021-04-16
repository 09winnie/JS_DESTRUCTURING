// console.log("Plant kunde");
// setTimeout(function() {
// console.log("Water kunde")
// }, 3000)
// console.log("Add fertilizer");

// destructuring arrays and functions
let cars=["Subaru","Mazda","Toyota","Lexus","Honda","Hyundai","VolksWagen"]
let [car1,car2,car3,car4,car5,car6,car7]=cars
console.log(car1);
console.log(car3);
console.log(car5);

let car={
    brand:"Subaru",
    make:"Outback",
    number:"KDW112T",
    color:"Silver",

}
let {brand,make,number,color}=car
console.log(brand);
console.log(make);
console.log(number);
console.log(color);

// default operators
let carBrand={
    model:"Toyota Hilux",
}
let {model,price=1500000,numberPlate="unknown"}=carBrand
console.log(model);
console.log(price);
console.log(numberPlate);

// looping over keys and values
let fruits={
    fruit1:"mangoes",
    fruit2:"apples",
    fruit3:"peas",
    fruit4:"grapes",
    fruit5:"pawpaws"
}
for(let[key,value]of Object.entries(fruits)){
    console.log (`${key}:${value}`)
}

// rest operator
let {fruit1,...rest}=fruits
console.log(fruit1)
console.log(rest.fruit4)



