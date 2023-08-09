// const h1 = document.createElement('h1')
// h1.innerText = "Chúng ta đang học react";

const container = document.createElement('div')

const div_1 = document.createElement('div');
div_1.className = "form-group";
const label_1 = document.createElement('label');
label_1.innerText = "Email";
const input_1 = document.createElement('input');
input_1.type = 'email';
input_1.className = 'form-control';
div_1.appendChild(label_1)
div_1.appendChild(input_1)

const div_2 = document.createElement('div');
div_2.className = "form-group";
const label_2 = document.createElement('label');
label_2.innerText = "Password";
const input_2 = document.createElement('input');
input_2.type = 'password';
input_2.className = 'form-control';
div_2.appendChild(label_2)
div_2.appendChild(input_2)

const div_3 = document.createElement('div');
div_3.className = "form-group";
const btnLogin = document.createElement('button');
btnLogin.type = 'button';
btnLogin.innerText = "Đăng nhập";
btnLogin.onclick = () => {
    alert(JSON.stringify({
        "email": input_1.value,
        "password": input_2.value
    }))
}

const btnCancel = document.createElement('button');
btnCancel.type = 'button';
btnCancel.innerText = "Hủy";
btnCancel.onclick = () => {
    input_1.value = '';
    input_2.value = '';
}
div_3.appendChild(btnLogin)
div_3.appendChild(btnCancel)

container.appendChild(div_1)
container.appendChild(div_2)
container.appendChild(div_3)

document.getElementById('root').appendChild(container)