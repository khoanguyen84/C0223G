// pass_by_value: truyền tham trị -> datatype: number, string, boolean,..
// pass_by_reference: truyền tham chiếu -> datatype: object, array, function

// let jobs_1 = ["java", "react", 'angular'];
// let jobs_2 = [...jobs_1, "Vue"]
// let jobs_2 = jobs_1;
// jobs_2[2] = 'Vue';

// console.log(jobs_1);
// console.log(jobs_2);

let std_1 = {
    name: "Hải",
    age: 18,
    gender: true,
    language: {
        name: "English",
        level: "B2"
    }
}

// let std_2 = { ...std_1 };
// std_2.name = "Nguyên"
// let std_2 = {
//     ...std_1,
//     name: "Nguyên",
//     email: 'nguyen@gmail.com',
//     language: {
//         ...std_1.language,
//         level: "B1"
//     }
// }

let std_2 = JSON.parse(JSON.stringify(std_1));
std_2.name = "Nguyên"
std_2.language.level = "B1"
console.log(std_1);
console.log(std_2);