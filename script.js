console.log("its from external js file");

var x = 10;
var y = 20;
 console.log(x + y);

 // {var age = 19;
 //console.log(age);}





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
{const person = {
    name: "harji",
    age: 19,    
    islogedIn: true,
    city: "karnal"
    }
    console.log(person);
}

// string '1' = '1' -> string
// string = number -> string
// string * number -> number

console.log('11' + 1); // 111 string
console.log('11' * 1); // 11 number 

// with typeof you can find the type

console.log(typeof (1+1)); // number
console.log(typeof ('1' + 1)); // string
console.log(typeof  num); // number

//CONDITIONALS STATEMENTS
// if else

const age = 19;
if (age >=18 ){
    console.log("you can vote");
}
else{
    console.log("you can not vote");
}

// Ternary operator

let h=10;
   // h >=15 ? console.log("yes") : console.log("no"); 
let ternaryResult = h >= 15 ? "yes" : "no";
     console.log(ternaryResult);

// switch case

const day = 1;
    switch(day){
        case 1 : console.log("monday");
         break;
        case 2 : console.log("tuesday");
         break;
        case 3 : console.log("wednesday");
         break;
        case 4 : console.log("thursday");
         break;
        case 5 : console.log("friday");
         break;
        case 6 : console.log("saturday");
         break;
        case 7 : console.log("sunday");
         break;
        default : console.log("invalid day");

        }

let a = 10;
let opt="(+";
let b = 20;
 switch(opt){
    case "+" : console.log(a+b);
    break;
    case "=" : console.log(a-b);
    break;
    case "*" : console.log(a*b);
    break;
    case "/" : console.log(a/b);
    break;
    default : console.log("invalid option");
 }

 // Logical operators
 // 1. AND (&&) = both conditions should be true
 // 2. OR (||) = one condition should be true
 // 3. NOT (!) = negates the condition

 // AND &&
 {
    const age = 19;
    const gender ='male';
    if (age >=18 && gender =='male'){
        console.log("you are adult");
    }
 }
 
 

 // OR ||
 {
    const age = 19;
    const gender ='female';
    if (age >=18 || gender =='male'){
        console.log("you are adult");
    }
 }

 // NOt !

 {
    const num = 5;
    if (!(num % 2 == 0)){
        console.log("odd");
    }
 }
 
 // LOOPS 
 // 1. for loop -> if you how many times you want to run the loop   
 {
    for (let a = 1; a <= 10; a = a + 1){
        console.log('Harji');
    }
 }

 {
    for (let age =19; age <= 80; age = age * 2){
        console.log('Harji' + age);
    }
 }
  
    // 2. while loop -> if you dont know how many times you want to run the loop
{
    let person = 0;
    let house = 10;
    while ( person != house) { 
        person = person + 1;
        console.log('person steps'+ person);
    }

} 

// 3. do while loop -> it will run the loop at least once even if the condition is false 

{
    let p = 10;
    let h = 10;
    do {
        p = p + 1;
        console.log('person steps'+ p);
    } while (p <= h);
}

// { 
//     let number = 1;
//     let guess = 0;
//     let winner = false;
//     do {
//         guess = parseInt(prompt('guess a number, if can not then press 0'));
//         if (guess == number) {
//             alert('winner');
//             winner = true;
//             break;
//         }
//     } while (guess != 0);
//     if (!winner) {
//         alert('loser');
//     }
// } 



// FUNCTIONS -> A block of code that perform a particular task(can many times)

function sayHello() {
    console.log("hello");
}

sayHello() // by writng sayHello() you can call the function sayhello can be anyhting you write above

// function with parameters
           // arguments                             
{function add (num1 , num2) {
    console.log(num1 + num2);
}
add(10, 20); // parameters  
}

{function multiply(num1, num2) {
     return num1 * num2;
}
 let aa =multiply(10, 20); 
    console.log('result', aa)
}


{function addnumbers (){
    let ans = 0;
    for (let i = 0; i < arguments.length; i = i + 1){
        ans = ans + arguments[i];
      }
    return ans;
}
let result =addnumbers(10,23,45,100,)
console.log(result); 
}
// Arrow functions
{let addv1 = (num1, num2) => num1 + num2; // one line function dont need to use {} ad return only in this case
console.log(addv1(11, 22))
}

{
    let add = (...nums) => {
       let ans = 0;
       for (let i = 0; i < nums.length; i++) {
           ans = ans + nums[i];
       }
       return ans;
    }
    console.log(add(10, 20, 30, 40, 50));
}
// this keyword
{
    let obt = {
        value : 10,
        myfunction: function () {
            console.log ('this is value' + this.value)
        }
    }
    obt.myfunction();
}

// high order functions, callback function
{
    function add(a, b, cb) {
        let result = a + b;
        cb (result);
    } 
    add (10 ,20, (val) => console.log(val));

}

{
    function add(a, b, cb) {
        let result = a + b;
        cb(result);
        return () => console.log(result);
    } 
    let resultFunction = add(10, 20, () => {} );
    resultFunction();

}

// Array methods
{
    const students = ['harji', 'harpreet', 'akash'];
    students [0] = 'harji mallhi';
    students.push('simranjeet') //.push command add new elements at the end of the array
    students.push('one plus')
    students.pop(); //.pop command removes the last element of the array
    students.reverse(); //.reverse command reverses the array
    console.log(students); 
}

// Array high order functions

// .ForEach = loop function works as callback function in array
{
    const students = ['Harji', 'Akash', 'Harpreet'];
    
        // function print(n){
        //     console.log(n);
        // }
     students.forEach((val) => console.log(val + ' Mallhi')); 
}

// .Map = returns the new array while forEach does not
{
     const numbers = [1, 2, 3, 4, 5, 6, 7];
      double = (n) => {
        return n * 2;
     }
     let NewArray = numbers.map(double); 
     console.log(numbers); // original array remains same
     console.log(NewArray); // [2, 4, 6, 8, 10, 12, 14] 

}  

// .Find = returns the first element that matches the condition
{
    const numberas = [1, 2, 3, 4, 5];
    let ans = numberas.find((num) => num === 4);
    console.log(ans);
}

//.Filter = filter the result you want
{
    const numbers = [1, 2, 3, 4, 5];
    const NewArray= numbers.filter((num) => num % 2 ==0)
    console.log(NewArray)
}

// .slice = can chosse specific portion
{
    const numbers = [1, 2, 3, 4, 5];
    let NewArray = numbers.slice(1,4)// in this when slice pecking value its ignore the last value of i have choosen extra 
    console.log(NewArray)
}

//.splice = deleat the elements from original array and pass the new one
{
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    let NewArray = numbers.splice(1,4)
    console.log(NewArray)
    console.log(numbers)
}

const ibutton = document.getElementById("button4")
const uname = document.getElementById('input-username')
const usern = document.getElementById("username")

ibutton.addEventListener('click', () => {
    const value = uname.value;
    localStorage.setItem("name", value)
    location.reload();
});

window.addEventListener("load", () => {
    let value = localStorage.getItem('name')
    usern.innerText = value
})

