import React from "react";
import ReactDOM from "react-dom/client";

// Tạo 1 component trong React
// Cách 1: Class Component
// Cách 2: Function Component

// Naming Convention của Component = Pascal Case

// Cách 1: Class Component
// class App extends React.Component{
//     render(){
//         // logic
//         return (
//             // JSX
//             <h1>Learing Webpack</h1>
//         )
//     }
// }

// Cách 2: Function Component => Hooks
function App() {
    return (
        <div>
            <h1>Learing Webpack</h1>
            <h2>ReactJS</h2>
            <button>Register</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)