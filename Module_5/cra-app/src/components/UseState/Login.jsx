import React, { useState } from "react";

function Login() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleLogin = async () => {
        let response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "username": "mor_2314",
                "password": "83r5^_"
            })
        })
        let data = await response.json()
        console.log(data);
    }

    const handleCancel = () => {
        setUsername("")
        setPassword("")
    }
    return (
        <div className="container d-flex align-items-center justify-content-center">
            <div className="row col-sm-6">
                <div className="form-group mb-2">
                    <label className="form-label">UseName</label>
                    <input type="text"
                        value={username}
                        className="form-control"
                        onInput={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Password</label>
                    <input type="password"
                        value={password}
                        className="form-control"
                        onInput={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <button className="btn btn-dark me-2" onClick={handleLogin}>Login</button>
                    <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}
export default Login;