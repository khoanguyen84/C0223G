// 'use strict';
// Function Declaration
function sum(n1, n2) {
    console.log(n1 + n2);
}
// Function Expression

// const times = function (n1, n2) {
//     console.log(n1 * n2);
// }

// const times = (n1, n2) => console.log(n1 * n2);

// times(10, 20)

// const power_3 = function(number){
//     return number**3
// }

// const power_3 = (number) => number ** 3;


// console.log(power_3(10));

// const slogen = function() {
//     return 'Still breath still alive';
// }
// const slogen = () => 'Still breath still alive';

// Anonymous/callback Function
let numbers = [4, 5, 2, 4, 6, 6]

// let power_2 = numbers.map(function (number, index) {
//     return number ** 2;
// })
let power_2 = numbers.map((number, index) => number ** 2)

// console.log(process(5, 1));


// Class
// function Student(name, age, email) {
//     this.email = email;
//     this.age = age;
//     this.name = name;
//     // Method
//     this.greeting = function () {

//     }
// }

class Student {
    constructor(name, age, email) {
        this.name = name,
            this.age = age,
            this.email = email
    }
    greeting() {

    }
}

// Naming Convention (Qui tắc đặt tên)

function loop() {
    'use strict';
    for (i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(`i outsite for `, i);
}
loop();