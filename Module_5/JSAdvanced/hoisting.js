// có các từ khóa var, let, const
// scope (phạm vi)
// 1. Global (window): toàn cục     -> var
// 2. Local: cục bộ                 -> let, const
// 3. Block code: khối lệnh         -> let, const


// var number;
// let number = 20;
// console.log(number);
// {
//     {
//         var number = 10; 
//         console.log(number);
//         {
//             var number = 20;
//         }
//         console.log(number);
//     }
// }

// console.log(age);
// {
//     let age = 18;
//     console.log(age);
//     {
//         let age = 20;
//         console.log(age);
//     }
//     console.log(age);
// }

// const = constant
let gender;
gender = true;

const pi = 3.14;