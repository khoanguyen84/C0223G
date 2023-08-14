import React, { useState } from "react";

function Counter() {
    const [quantity, setQuantity] = useState(1)

    const handleDecreamentQuantity = () => {
        setQuantity(quantity - 1)
    }

    const handleIncreamentQuantity = () => {
        setQuantity((prev) => {
            return prev + 1
        })
        setQuantity((prev) => {
            return prev + 1
        })
        setQuantity((prev) => {
            return prev + 1
        })
    }

    console.log('render');
    return (
        <div style={{ marginLeft: "50px" }}>
            <button className="btn btn-danger" disabled={quantity <= 1}
                onClick={handleDecreamentQuantity}
            >-</button>
            <input type="number" value={quantity} />
            <button className="btn btn-danger"
                onClick={handleIncreamentQuantity}
            >+</button>
        </div>
    )
}

export default Counter