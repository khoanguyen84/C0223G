import React, { useState } from "react";

// const [state, setState] = useState(initState)

// + initState: khởi tạo trạng thái, 
//             gồm tất cả các kiểu dữ liệ mà JS có (number, string, null, underfined, boolean, array, object, function)
// + state: lần đầu tiên nó sẽ bằng initState
// + setSate(): 
//     - là 1 hàm, cập nhật state mới cho state
//     - mỗi khi setState() thì component sẽ được re-render
//     - setState(newState) || setState(callback) 


function UseState() {
    const [username, setUsername] = useState(null)
    const [show, setShow] = useState(false)

    const handleInputValue = (event) => {
        setUsername(event.target.value);
    }
    const handleShowName = () => {
        setShow(true)
    }
    
    return (
        <div>
            <input type="text" onChange={handleInputValue} />
            <button onClick={handleShowName}>Show Name</button>
            {show && <p>{username}</p>}
        </div>
    )
}
// function UseState(){
//     const handleShowName = () => {
//         document.getElementById('p_1').innerText = document.getElementById('username').value;
//     }
//     return (
//         <div>
//             <input type="text" id="username" /> 
//             <button onClick={handleShowName}>Show Name</button>
//             <p id="p_1"></p>
//         </div>
//     )
// }

export default UseState;