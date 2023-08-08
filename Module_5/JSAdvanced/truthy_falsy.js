// convert các kiểu dữ liệu về kiểu boolean
// false => false
//  0   => false
// null => false
// empty => false
// underfine -> false
// NaN      => false

let fullname = 'Phước';
// if(fullname){
//     console.log(fullname);
// }
// else{
//     console.log('No Name');
// }

// console.log(fullname || 'No Name');

// let numbers = [];

// console.log(numbers.length && numbers || 'Empty');

let obj = {
    name: "Hải"
}
// Object.keys(obj) => ["name", "age"]
console.log(Object.keys(obj).length && obj || "Empty");