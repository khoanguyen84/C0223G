import React, { useState } from "react";

function Cart() {
    const [cartList, setCartList] = useState(() => {
        var data = []
        if (window.localStorage.getItem('cart') == undefined) {
            data = [
                {
                    product_id: 1,
                    product_name: 'iPhone 6S',
                    price: '1000000'
                },
                {
                    product_id: 2,
                    product_name: 'iPhone 7S',
                    price: '1500000'
                }
            ]
            window.localStorage.setItem('cart', JSON.stringify(data))
        }
        else {
            data = JSON.parse(window.localStorage.getItem('cart'))
        }
        return data;
    });

    return (
        <div></div>
    )
}

export default Cart;