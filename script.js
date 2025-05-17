console.log("its from external js file");

var x = 10;
var y = 20;
 console.log(x + y);

 var age = 19;
 console.log(age);




//use of var is global no matter where you declare it
// it even can use in browser console after the declaration 

if (true) {
    let a = 20;
    // let can be used in block scope {}
    //let a = 30; // this will give error because a is already declared
    // it will allways take the last value
    a= 30; 
    console.log(a);
}

//console.log(a); (let) this will give error because a is not defined outside the block  

// const val can't be changed after declaration
// const valu can not be changed aftr declaration
// const -> local scope
if (true) {
    const b = 10;
console.log(b+30);
}
//console.log(b); // this will give error because b is not defined outside the block


// DATA TYPES AND OPERATORS 
// 1. number      1.+
// 2. string      2.- 
// 3. boolean     3.*
// 4. null        4./
// 5. undefined
// 6. objects

// 1.Number = numbers are used to represent numeric values like 1, 2, 3, 4, 5, etc.

let num = 1;
let num2 = 2;
console.log(num + num2); // addition
console.log(num - num2); // subtraction
console.log(num *num2); // multiplication
console.log(num / num2); // division

// 2.String = strings are used to represent text values like name, words, etc.
// numebr can alsobe used as string if they are in '' or ""

let FirstName = "Harji";
console.log(FirstName); 
let LastName = "Singh";
console.log(LastName);
console.log(FirstName + LastName); 
console.log(FirstName + ' ' + LastName); // for putting space inbetween we can use '' or " "

// 3.Boolean = boolean is used to represent true or false values
// it only has two values true or false nething else
// javaScript thinks 0 is false and 1 is true or false as 0 and true as 1
let islogedIn = true;

console.log(islogedIn); 

let islogedOut = false;

console.log(islogedOut);



// 4.Null = null is used TO REPRESENT A NULL VALUE 
// you can assign valu after it can be nummber or string or anything
let lastlogindate = null;

console.log(lastlogindate); 

// differebt between null and undefined is that if ther is a thing but it doest not
//have any value then it is null but if there is no value at all or you want to completly 
//delete it then it is undefined

// 5.Undefined

let d; undefined;

console.log(d); 

// 6. Objects = it is used to create properties of an object you create
// for example = ia using person as an object and giveing it properties in {} 
// is want to get single property then you can use . like person.name or person.age in this case
// in this we sepreate the properties with , it is necessary to use ,
const person = {
    name: "harji",
    age: 19,    
    islogedIn: true,
    city: "karnal"
    }
    console.log(person);

// string '1' = '1' -> string
// string = number -> string
// string * number -> number

console.log('11' + 1); // 111 string
console.log('11' * 1); // 11 number 

// with typeof you can find the type

console.log(typeof (1+1)); // number
console.log(typeof ('1' + 1)); // string
console.log(typeof  num); // number
