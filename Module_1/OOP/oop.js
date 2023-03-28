let hoang = ["Hoàng", "10/10/2000", true, "hoang@gmail.com", 0935123123];

console.log(hoang[1]);


let dat = {
    name: "Đạt",
    dateOfBirth: "20/10/2000",
    gender: true,
    email: "dat@gmail.com",
    mobile: 0935567765,
    hobbies: ["Đá banh", "Cầu lông", "Nhảy cao"],
    language: {
        name: "English",
        level: "B2"
    },
    friends: [
        {
            name: "Minh Anh",
            relate: "Boy Friend"
        },
        {
            name: "Trọng",
            relate: "Crush"
        }
    ]
}

// console.log(dat["dateOfBirth"]);
// console.log(dat.dateOfBirth);
// dat.dateOfBirth = "08/03/2000"
// console.log(dat.dateOfBirth);

// console.log(dat.hobbies);
// console.log(dat.language.name)
console.log(dat.friends[1].name);