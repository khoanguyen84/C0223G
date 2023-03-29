function createArray(size, min, max){
    let array = [];
    for(let i = 0; i < size; i++){
        array[i] = Math.floor(Math.random()*(max - min + 1) + min);
    }

    // console.log(array);
    return array;
}

let numbers = createArray(10, 10, 50);
console.log(numbers);
document.getElementsByTagName("h1")[0].innerText = numbers

alert(numbers.join('+'))
// createArray(15, 1, 10);