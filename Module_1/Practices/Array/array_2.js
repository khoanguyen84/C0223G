let numbers = [4, 5, 7, 7, 8, 9, 6, 5, 54, 45];

// for in
// for(let index in numbers){
//     console.log(numbers[index]);
// }

// for of
// for(let value of numbers){
//     console.log(value);
// }

// console.log(numbers.indexOf(45));

// anonymous/callback function

// numbers.forEach(function(value, index){
//     console.log(`${index}-${value}`);
// })


for(let k of numbers.keys()){
    console.log(k);
}


for(let v of numbers.entries()){
    console.log(`${v[0]} - ${v[1]}`);
}