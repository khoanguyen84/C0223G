function renderUserList() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(function(response){
    //         return response.json();
    //     })
    //     .then(function(userList){
    //         console.log(userList);
    //     })
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(async function (response) {
            let userList = await response.json();
            console.log(userList);
        })
}

renderUserList();