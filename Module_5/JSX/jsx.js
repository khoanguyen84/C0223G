const handleLogin = () => {
    alert(
        JSON.stringify({
            "email": document.getElementById('email').value,
            "password": document.getElementById('pw').value,
        })
    )
}
const handleCancel = () => {
    document.getElementById('email').value = '';
    document.getElementById('pw').value = ''
}

const loginForm = (
    <div>
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="pw" />
        </div>
        <div className='form-group'>
            <button onClick={handleLogin} style={{ color: "white", backgroundColor: "green" }}>Đăng nhập</button>
            <button onClick={handleCancel}>Hủy</button>
        </div>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(loginForm)