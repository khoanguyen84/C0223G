// 1. phải là 1 function
// 2. nó phải được truyền vài 1 function khác thông qua agrument
// 3. phải được thực thi

function callback(n1, n2){
    return n1 * n2;
}
function callback_2(n1, n2){
    return n1 + n2;
}

function useCallback(params){
    console.log(params(10, 20));
}
useCallback(callback)
useCallback(callback_2)

// function useCallback_2(){
//     console.log(callback(10, 20));
// }

// useCallback_2()

// function useCallback_3(){
//     console.log(callback_2(10, 20));
// }

// useCallback_3()

// let numbers = [5, 7, 6, 4, 3]

// function callback(value, index){
//     return value * 2;
// }

// let result = numbers.map(callback)

