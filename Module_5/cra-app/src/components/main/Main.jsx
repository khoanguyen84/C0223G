import React, { useState, createContext } from "react";
import Content from "../Content/Content";
import Paragraph from './../Paragraph/Paragraph';

// useContext
// export const context = createContext() => tạo ra 1 vùng nhớ ở phạm vi global
// provider => value (dữ liệu)
// consumer = useContext(context)

// có thể có nhiều context 1 trong 1 dự án

function Main() {
    return (
        <main className="flex-shrink-0 vh-100">
            <div className="container">
                <Content />
            </div>
        </main>
    )
}

export default Main;