// parameter (tham số)
// agrument (đối sô)

// function sum(n1, n2){
//     console.log(n1 + n2);
// }

// sum(10, 20)

// let numbers = [1, 2, 3]

// numbers.push(4, 55, 32, 4, 4, 23, 3, 45, 3, 4, 5, 2)

// console.log(numbers);

// function total() {
//     let result = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         result += arguments[i]
//     }
//     return `Tổng là: ${result}`;
// }

// console.log(total(1, 3, 4, 56, 67, 7, 8, 6, 4, 4))
// console.log(total(1, 3, 4, 56))
// console.log(total(67, 7, 8, 6, 4, 4))

function total(message, ...rest) {
    let result = 0;
    for (let i = 0; i < rest.length; i++) {
        result += rest[i]
    }
    return `${message}${result}`;
}

console.log(total("Tổng là: ", 3, 4, 2, 3, 5, 6, 67, 3));
console.log(total("Total is: ", 1, 3, 4, 56))
console.log(total("Result is: ", 67, 7, 8, 6, 4, 4))