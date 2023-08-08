// if (Array.prototype.sum == undefined) {
//     Array.prototype.sum = function () {
//         let total = 0;
//         for(let i = 0; i < this.length; i++){
//             total += this[i]
//         }
//         return total
//     }
// }

// this ~ context

// let numbers = [4, 3, 3, 56, 5]
// let numbers_2 = [4, 3, 3, 56, 6]
// console.log(numbers.sum())
// console.log(numbers_2.sum())


if(Array.prototype.map_2 == undefined){
    Array.prototype.map_2 = function(callback) {
        let array = [];
        for(let i = 0; i < this.length; i++){
            array.push(callback(this[i], i))
        }

        return array;

    }
}

if(Array.prototype.includes == undefined){
    Array.prototype.includes = function(value){
        for(let i = 0; i < this.length; i++){
            if(this[i] == value)
                return true;
        }
        return false;
    }
}

let numbers = [4, 3, 3, 56, 5]
let result = numbers.map_2(function(value, index){
    return value ** 2;
})

let htmls = numbers.map_2(function(value, index){
    return `<button>${index} - ${value}</button>`;  
})

// document.write(htmls.join(''))

console.log(numbers.includes(5));
console.log(numbers.includes(51));