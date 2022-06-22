console.log("I dont know js yet!");


// primitive data types : Number, string, boolean, undefined, null  

// object data types : array, object, function

// Truthy value - Falsy value 

var num = Number ('01683811211'); // string to number
console.log(num);

var str = String('01308097607');
console.log(str);

// JS Math functions 

console.log(Math.E);
console.log(Math.PI);
var number = 3.1416;
console.log(Math.abs(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));
console.log(Math.max(400,900,1000));
console.log(Math.min(400,900,1000));

console.log(Math.pow(2, 3));
console.log(Math.sqrt(64));
console.log(Math.round(Math.random() * 50 + 1)); // generate random number between 1 - 50


// JS date function

var date = new Date();
console.log(date.getDate());
console.log(date.toString());
console.log(date.toLocaleString());

// JS ternary operator 

var sampleNumber = Math.round(Math.random()*10 +1);
console.log((sampleNumber % 2 == 0) ? `${sampleNumber} is Even` : `${sampleNumber} is Odd!`);


// JS short hand && and ||
let name = 'Naumy';

let fullName = this.name || 'Mazharul Hoque';
console.log(fullName);


var isDateLoaded = true;
isDateLoaded && console.log("Date fetched from API");

// Loop in JS




