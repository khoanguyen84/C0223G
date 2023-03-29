// function Student(name, gender, dob, email, hobbies){
//     this.name = name;
//     this.gender = gender;
//     this.dob = dob;
//     this.email = email;
//     this.hobbies = hobbies;
// }

class Student {
    constructor(name, gender, dob, email, hobbies) {
        this.name = name;
        this.gender = gender;
        this.dob = dob;
        this.email = email;
        this.hobbies = hobbies;
    }
}
let phuoc = new Student("Phước", true, "10/10/2000", "phuoc@gmail.com", ["Đọc sách", "Đọc báo"]);
let khoa = new Student("Khoa", true, "10/10/2000", "khoa@gmail.com", ["Đọc sách", "Đọc báo"]);

console.log(phuoc);

// Function Declaration
// function sum(n1, n2){
//     return n1 + n2
// }

// function expression
// const sum = function(n1, n2){
//     return n1 + n2;
// }

// arrow function
// const sum = (n1, n2) => n1 + n2;

// console.log(sum(10, 20));