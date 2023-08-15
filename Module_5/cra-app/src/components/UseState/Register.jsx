import React, { useState } from "react";

const cityList = [
    {
        id: 1,
        name: "TT Huế"
    },
    {
        id: 2,
        name: "Đà Nẵng"
    },
    {
        id: 3,
        name: "Nha Trang"
    },
    {
        id: 4,
        name: "Tam Kỳ"
    },
]

function Register(){
    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        city: ""
    })

    const handleInputValue = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitRegister = (e) => {
        e.preventDefault();

        console.log(state);
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmitRegister} className="row col-sm-4">
                <div className="form-group mb-2">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" name="username" onInput={handleInputValue}/>
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" onInput={handleInputValue}/>
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" onInput={handleInputValue}/>
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">City</label>
                    <select name="city" className="form-control" defaultValue={cityList[1].name}
                        onChange={handleInputValue}
                    >
                        {
                            cityList.map((city) => (
                                <option key={city.id} value={city.name}>{city.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="form-group mb-2">
                    <button type="submit" className="btn btn-sm btn-dark">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register;