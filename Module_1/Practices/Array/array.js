// let matrix = [
//     [4, 5, 6, 7, 7, 5],
//     [7, 4, 4, 6, 4],
//     [4, [70, 80, 90, 100], 7],
//     [7, 4, 3, 2],
//     [1, 2, 4, 5]
// ]

// console.log(matrix[2][1][3]);

let rows = 5;
let cols = 7;
let min = 10;
let max = 60;
let numbers = new Array(rows);

for (let i = 0; i < rows; i++) {
    numbers[i] = new Array(cols);
    for (let j = 0; j < cols; j++) {
        numbers[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
    }
}

console.log(numbers);
numbers[2][2] = 400
console.log(numbers);
// for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers[i].length; j++) {
//         console.log(numbers[i][j]);
//     }
// }