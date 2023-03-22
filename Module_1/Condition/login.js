function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    document.getElementById('result').innerText =
        username == "Admin" ? (password == "TheMaster" ? "Welcome" :
            (password == null ? "Canceled" :
                "Wrong password"))
            : username == null ? "Canceled"
                : "I dont know you";
    
}

// let username = prompt('Enter Username:'); //document.getElementById('username').value;
// let password = prompt('Enter Password:');//  document.getElementById('password').value;

// document.getElementById('result').innerText =
//     username == "Admin" ? (password == "TheMaster" ? "Welcome" :
//         (password == null ? "Canceled" :
//             "Wrong password"))
//         : username == null ? "Canceled"
//             : "I dont know you";
