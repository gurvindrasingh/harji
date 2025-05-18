// FIRST QOESTUION= Icrease the age by 1 age is 10
let age = 10;
 console.log(age +1)
// answer is 11

// SECOND QOESTUION= unsinging const for contry name and try chaning it

{
    const country = 'Canada';
    console.log(country);
   // country = 'India'; 
   // console.log(country);// it will give error
    // because above we are using const and it can have only one value

}

// THIRD QUESTION= uSING var to print inside and outside a block
{
   var city = 'Toronto';
   console.log (city); 
}

  console.log(city);// it will also print Toronto because var can be used golbally it isnot bound to a block

// FOURTH QUESTION= write a program to "take an umbrella" if it's raining
 let isRaining = false;
    if (isRaining) {
        console.log("Take an umbrella");
    }
    else {
        console.log("No need for an umbrella");
    }

// FIFTH QUESTION= Movie ticket price
{let age = 18;
   let ticketPrice;
   if (age < 15){
    console.log("Child Ticket=100");
   }
   else if (age = 15-17){
    console.log("Teen Ticket=150");
   }
   else if (age = 18-60){
    console.log("Adult Ticket=200");
   }
   else (age > 60);{
    console.log("Senior=100");
   }

}

// SIXTH QUESTION= temperature Cheacker
{
    let temperature = 22;
      if (temperature > 30) {
        console.log("too hot");
      }
      else if (temperature =15 - 30) {
        console.log("perfect");
      }  
      else (temperature < 15);{
        console.log("too cold");
      }
 }

// SEVENTH QUESTION= Choose avitvity based on day
{
    let day = "saturday";
    switch (day) {
        case "monday":
            console.log("Go to school");
            break;
        case "tuesday":
            console.log("Go to gym");
            break;
        case "wednesday":
            console.log("Go to doctor");
            break;
        case "thursday":
            console.log("Go to pool");
            break;
        case "friday":
            console.log("do party");
            break;
        case "saturday":
            console.log(" play vollyball");
            break;
        case "sunday":
            console.log("relax");
    }
}

// EIGHTH QUESTION=  color selecter
{
    let color ="blue"; 
    switch (color) {
        case 'red':
            console.log("like fire");
            break;
        case 'blue':
            console.log("like sky");
            break;
        case 'green':
            console.log("like grass");
            break;
        default:
            console.log("color not found");  
    }
        
}

// NINTH QUESTION=  Qaluculations\
let num1 = 10;
let num2 = 5;
let opt= "+";
  switch(opt){
     case "+":
         console.log(num1 + num2);
         break;
     case '-':
         console.log(num1- num2);
         break
     case '*':
         console,log(num1*num2);
         break;
     case '/':
         console.log(num1/num2);
         break;
     default: 
         console.log("invalid option");
     }

             