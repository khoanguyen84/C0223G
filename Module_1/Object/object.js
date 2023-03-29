let phuong = [
    "Phượng",
    false,
    "10/10/2000",
    "phuong@gmail.com",
    ["Nhậu", "Bida", "Đá banh"],
    {
        name: "B",
        age: 18
    }
]
phuong[5].name = "BB"

console.log(phuong[5].name);

// let phuoc = {
//     name: "Phước",
//     gender: true,
//     dob: "10/10/2000",
//     email: "phuoc@gmai..com",
//     hobbies: ["Nhậu", "Bida", "Đá banh"],
//     wife: {
//         name: "A",
//         age: 18
//     }
// }
let phuoc = {
    name: "Phước",
    gender: true,
    dob: "10/10/2000",
    email: "phuoc@gmai..com",
    hobbies: ["Nhậu", "Bida", "Đá banh"]
}

let khoa = {
    name: "khoa",
    gender: true,
    dob: "10/10/2000",
    email: "khoa@gmai..com",
    hobbies: ["Nhậu", "Bida", "Đá banh"]
}

let truong = {
    name: "Trường",
    gender: true,
    dob: "10/10/2000",
    email: "truong@gmai..com",
    hobbies: ["Nhậu", "Bida", "Đá banh"]
}

let students = [
    {
        name: "Phước",
        gender: true,
        dob: "10/10/2000",
        email: "phuoc@gmai..com",
        hobbies: ["Nhậu", "Bida", "Đá banh"]
    },
    {
        name: "Trường",
        gender: true,
        dob: "10/10/2000",
        email: "truong@gmai..com",
        hobbies: ["Nhậu", "Bida", "Đá banh"]
    }

]

// console.log(phuoc["email"]);
phuoc.wife.name = "AA"
console.log(phuoc.wife.name);