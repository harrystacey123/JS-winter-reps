// I. Variables & Datatypes

// A

// 1. How do we assign a value to a variable? 

var dog = 'Arnold'

// 2. How do we change the value of a variable? 

var dog = 'Bertie'

// 3. How do we assign an existing variable to a new variable?

var cat = 'Arnold'

// 4. Remind me, what are `declare`, `assign`, and `define`?

// declaring a variable is just declaring its existance and therefore its need for memory allocation, defining the variable is setting it equal to something (e.i. assigning it to a value)

// 5. What is pseudocoding and why should you do it?

// qseudocoding is coding a problem in words rather than syntax. It helps because it breaks down large problems into many smaller problems which are often easier to tackle.

// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

// 30% / 70%

// B
// 1

var firstVariable = 'Hello World';

var firstVariable = 6;

var secondVariable = 6;

var secondVariable = 'string';

// value of first variable is 6

// 2

var yourName = `Harry`;

// console.log(`Hello ${yourName}, how are you?`);

// C

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

// console.log(a !== b);
// console.log(c !== d);
// console.log('Name' == 'Name');
// console.log(true !== false);
// console.log(false == false == false == false == false == false == true);
// console.log(false == false)
// console.log(e == 'Kevin');
// console.log(a + b == c);
// console.log(a * a == d);
// console.log(48 == '48');

// D

var animal = `cow`;


// console.log(`mooooooo`);


// E 

// var age = 23;

// if (age >= 16) {
//     console.log(`Here are the keys`);
// } else {
//     console.log(`Sorry, you're too young.`)
// };

// II

// A

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// };

// for (let i = 10; i <=400; i++) {
//     console.log(i);
// };

// for (let i = 12; i <= 4000; i+=3) {
//     console.log(i);
// };


// B

// for (let i = 1; i<=100; i++) {
//     if (i % 2 == 0) {
//         console.log(i + '<-- is an even number');
//     }
// };

// C

// for (let i = 0; i < 100; i++) {
//     if (i % 5 == 0) {
//         console.log('I found a ' + i + ' High Five!');
//     } else if (i % 3 == 0) {
//         console.log('I found a ' + i + ' Three is a crowd');
//     }
// };

// D


// var bankAccount = 0;
// for (let i = 0; i <= 10; i++) {
//     bankAccount += i;
// };
// console.log(bankAccount)

// var bankAccount = 0;
// for (let i = 0; i <= 100; i++) {
//     bankAccount += i * 2;
// }
// console.log(bankAccount)

// E

// var sum = 0;
// for (let i = 0; i < 1000; i++) {
//     if (i % 5 == 0 || i % 3 == 0) {
//         sum += i;
//     }
// }
// console.log(sum)

// III
// A

// 1. What are the things in an array called?

// Element

// 2. Do Arrays guarantee those things will be in order?

// Yes

// 3. What real-life thing could you model with an array?

// Listing my hobbies

// B

var quotes = ['I like apples', 'I like bananas', 'I like oranges'];

// C

// const randomThings = [1, 10, "Hello", true]
// console.log(randomThings[0]);
// randomThings[2] = 'World';
// console.log(randomThings);

// D

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// console.log(ourClass[2]);

// ourClass[4] = 'Octocat';

// ourClass.push('Cloud City');
// console.log(ourClass);

// E

// const myArray = [5, 10, 500, 20]

// myArray.push('Egon');
// myArray.push('Harry');
// myArray.shift();
// myArray.unshift('Bob Marley');
// myArray.pop();

// myArray.reverse();

// console.log(myArray);

// mutate means change 


// F

var integer = 10;

// if (integer < 100) {
//     console.log('little number');
// } else {
//     console.log('big number');
// }

// G 

// if (integer < 5) {
//     console.log('little number');
// } else if (integer > 10) {
//     console.log('big number');
// } else {
//     console.log('monkey');
// };

// H

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

const thomsCloset = [
    [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
    ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
    ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
    ]
];

// console.log(`Kristen is rocking that ${kristynsCloset[3]} today`);
// kristynsCloset.splice(6, 0, 'raybans');
// kristynsCloset[5] = 'stained knit hat';
// console.log(kristynsCloset);

// console.log(`Thom is looking fierce in his ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][0]}!`);

// thomsCloset[1][2] = 'Footie Pajamas';

// console.log(thomsCloset)

// IV 

// A


// function printGreeting(name) {
//     console.log(`Hello there ${name}`);
// }
// printGreeting('Harry');


// B

// function printCool(name) {
//     console.log(`${name} is cool`);
// }
// printCool('Harry Stacey');

// C

// function calculateCube(number) {
//     console.log(Math.pow(number, 3));
// };

// calculateCube(3);

// D

// function isVowel(character) {
//     if (character.match(/[aeiouAEIOU]/)) {
//         console.log(true);
//     } else {
//         console.log(false);
//     };
// };
// isVowel('b');


// E 

// function getTwoLengths(string1, string2) {
//     var arr = []
//     arr.push(string1.length);
//     arr.push(string2.length);
//     console.log(arr);
// }

// getTwoLengths('string', 'harry');

// F

function getMultipleLengths(string3) {

};

// G

// function maxOfThree(number1, number2, number3) {
//     if (number1 >= number2 && number1 >= number3) {
//         console.log(number1);
//     } else if (number2 >= number1 && number2 >= number3) {
//         console.log(number2);
//     } else {
//         console.log(number3);
//     };
// };

// maxOfThree(10, 245, 1538);

// H

// function printLongestWord(arr) {
//     var lgth = 0;
//     var longest;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > lgth) {
//             var lgth = arr[i].length;
//             longest = arr[i];
//         };
//     };
//     console.log(longest);
// };

// printLongestWord(['harry', 'stacey', 'oliverTwist', 'peanutButter']);

// I

// function transmogrify(number1, number2, number3) {
//     var res = Math.pow((number1 * number2), number3);
//     console.log(res);
// };

// transmogrify(1, 2, 3);

// J




// K

// function randomInteger(min, max) {
//     console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// };

// randomInteger(10, 100);


// function getRandomElement() {
//     var quotes = ['I like apples', 'I like bananas', 'I like oranges'];
//     console.log(quotes[Math.floor(Math.random() * quotes.length)]);
// };

// getRandomElement();

// Objects

// A

var user = {
    name: 'Harry Stacey',
    email: 'harrystacey@live.co.uk',
    age: 23,
    purchased: []
};

//B

// user.email = 'harrystacey8@gmail.com';
// user.age = user.age +=1;



//C

user.location = 'San Francisco';

// D

user.purchased.push('carbohydrates');
user.purchased.push('peace of mind');
user.purchased.push('Merino Jodhpurs');

// console.log(user.purchased[2]);

// E

user.friend = {
    name: 'Kev',
    age: 26,
    location: 'San Francisco',
    purchased: []
};

console.log(user.friend.name);
console.log(user.friend.location);

user.friend.age = 55;

user.friend.purchased.push('The One Ring');
user.friend.purchased.push('A latte');

console.log(user.friend.purchased[1]);