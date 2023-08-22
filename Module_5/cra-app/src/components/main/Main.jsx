import React, { useState } from "react";
import Content from "../Content/Content";

// useContext
// const context = createContext() => tạo ra 1 vùng nhớ ở phạm vi global
// provider => value (dữ liệu)
// consumer = useContext(context)

// có thể có nhiều context 1 trong 1 dự án

function Main() {
    const [theme, setTheme] = useState('light')

    const handleChangeTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }
    return (
        <main className="flex-shrink-0 vh-100">
            <div className="container">
                <Content theme={theme} 
                    handleChangeTheme = {handleChangeTheme}
                />
            </div>
        </main>
    )
}

export default Main;