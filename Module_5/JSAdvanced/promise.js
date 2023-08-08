// setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2);
//         setTimeout(() => {
//             console.log(3);
//         }, 1 * 1000);

//     }, 2 * 1000);
// }, 3 * 1000);

const promise = new Promise(
    function(resolve, reject){
        // logic => request url
        let number = 5;
        let data = undefined;
        if(number >= 5){
            data = 1;
            return resolve(data)
        }
        return reject(data);
    }
)

// promise chain
promise
    .then(function(data){
        console.log(data);
        return data + 1;
    })
    .then(function(data){
        console.log(data);
        return data + 1;
    })
    .then(function(data){
        console.log(data);
        return data + 1;
    })
    .catch(function(){
        console.log("Error");
    })
    .finally(function(){
        console.log("Done");
    })