// looping over keys and values
let students={
    one:"Jayden",
    two:"Dylan",
    three:"Audrey",
    four:"Tiffany",
    five:"Adrian",
    six:"Kimberly",

}
for(let[key,value] of Object.entries(students)){
console.log(`${key}:${value}`)
}
// rest operators
let studentID={
    Jayden:1234,
    Dylan:1459,
    Audrey:5045,
    Tiffany:7907,
    Adrian:7030,
    Kimberly:7104,
}
let {Jayden, ...rest}=studentID;
console.log(rest.Audrey);
console.log(rest.Kimberly);
console.log(rest.Tiffany);

// arrow functions
let modulus=(x,y)=>x%y
console.log(modulus(48,9));
let multiplication=(a,b)=>a*b
console.log(multiplication(12,5));

let square=(b)=>b*b
console.log(square(12))

// asynchronous operations
console.log("fry oil")
console.log("add onions to fry")
setTimeout (function(){
    console.log("add salt")
},5000)
console.log("add meat to fry")
console.log("add tomatoes to steam")

// callback functions
function greeting(name){
    console.log(`Hello ${name},Welcome to Nairobits School of Design`)
}
function intro(firstName,lastName,callback){
    const fullName= `${firstName} ${lastName}`;
callback(fullName);

}
intro("Adrian","Junior",greeting);




