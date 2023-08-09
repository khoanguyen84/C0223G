// React.createElement(type, props, children)
// 1. type: 
//     - Element Node
//     - Component 

// 2. props (properties) => là 1 object

// 3. children
//     - text node
//     - Element Node khác

// const h1 = React.createElement("h1", {
//     className: 'heading_1'
// }, "Learning React")

// const h2 = React.createElement("h2", {
//     className: 'heading_1'
// }, "Learning React Hooks")

// const container = React.createElement(React.Fragment, null, h1, h2)


const loginForm = React.createElement(React.Fragment, null,
    React.createElement("div", { className: "form-group" },
        React.createElement("label", null, "Email"),
        React.createElement("input", { type: "email", className: 'form-control', id: "email" })
    ),
    React.createElement("div", { className: "form-group" },
        React.createElement("label", null, "Password"),
        React.createElement("input", { type: "password", className: 'form-control', id: "pw" })
    ),
    React.createElement("div", { className: "form-group" },
        React.createElement("button", {
            onClick: () => {
                alert(
                    JSON.stringify({
                        "email": document.getElementById('email').value,
                        "password": document.getElementById('pw').value,
                    })
                )
            }
        }, "Đăng nhập"),
        React.createElement("button", {
            onClick: () => {
                document.getElementById('email').value = '';
                document.getElementById('pw').value = ''
            }
        }, "Hủy")
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(loginForm);


// ReactDOM.render(h1, document.getElementById('root'))