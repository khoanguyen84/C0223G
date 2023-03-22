// let x = 2;
// let number = 10;
// let total = 0;
// let totalFactorial = 1;
// for (let n = 0; n <= number; n++) {
//     totalFactorial = 1;
//     for (let j = 1; j <= (2 * n); j++) {
//         totalFactorial *= j;
//     }
//     total += x ** (2 * n) / totalFactorial;
// }

// console.log(total);

let floats = new Array(10);
let min = 10;
let max = 80;
for(let i =0; i < floats.length; i ++){
    floats[i] = (Math.random()*(max - min + 1) + min).toFixed(2);
    // floats[i] = Math.floor(Math.random()*(max - min + 1) + min);
}

console.log(floats);

// size
// [min, max]
// Math.floor(Math.random()*(max - min + 1) + min) ==> mảng số nguyên
// (Math.random()*(max - min + 1) + min).toFixed(n) ==> mảng số thực có n phần lẻ
