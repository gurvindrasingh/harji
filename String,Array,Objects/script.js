const button = document.getElementById('btn1');
button.addEventListener('click', () => {
    window.open('https://drive.google.com/file/d/1iAEIAA4AgFD9p03uYVEX4tUdllPjqiBv/view', '_blank');
});
let str = 'harji';
let str2 = "harji" + 33;
let str3 = `harji`;

console.log(str, typeof str);
console.log(str2, typeof str2);
console.log(str3, typeof str3);

let firstName = 'Harji';
let MiddleName = 'Singh';
let lastName = 'Mallhi';
let fullName = firstName + " " + MiddleName + " " + lastName;// also can use concatenation .concat() method
console.log(fullName);

let fullname2 = `${firstName} ${MiddleName} ${lastName}`;
console.log(fullname2);

console.log(`My name is ${fullName}`);

let str4 = `str4 = ${1+2+2-1}`;
console.log(str4);

// construction of string by constructor method
let str5 = new String('harji');
console.log(str5, typeof str5);

// \ is used to escape characters in a string
let str6 = 'hi \nI am harji';
console.log(str6, str6.length);

let str7 = " hello \" world ";// \ can also be used to escape double quotes
console.log(str7);
//

let str8 = "Harji";
//console.log(str8[3]); // accessing fourth character of string

// str8[3] = 'a'; // this will not change the string as strings are immutable
// console.log(str8[3]); // still prints 'l'

for( let ch of str8) {
    console.log(ch);
}// of loop iterates over characters in a string
for( let key in str8) {
    console.log(key)
}// in loop iterates over indices of a string

let str9 = "";
for(let ch of str8) {
    str9 += ch + " ";
}
console.log(str9);// str9 can not change original string str8 it will create a new string


/* Properties And Methods Of String
properties will give info about string
methods/function will perform some action on string by using ()
*/

let str10 = "hello";
let str10copy = str10.toUpperCase(); // this will not change the original string
console.log(str10, str10copy);

// .includes() method checks if a string contains a substring

let str11 = " i am boy";
let check = str11.includes("am"); // checks if the string contains "am"
console.log(check);// give value true or false its true in this case
console.log(str11.indexOf("a")); // gives index of first occurrence of "a" in the string
console.log(str11.charAt(3)); // gives character at index 2
console.log(str11.replace("boy", "girl"));

let username = "@harjimallhi";

console.log(username.slice(1));// removes first character from the string