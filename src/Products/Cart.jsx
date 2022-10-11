import React, { useContext } from 'react'
import { cartContext } from './CartContext'

function Cart() {
    const { cart } = useContext(cartContext)

    return (
        <div>
            <ul>
                {
                    cart && cart.map((item, key) => {
                        return <>
                            <li key={item.id}>{item.name}</li>
                        </>
                    })
                }
            </ul>
        </div>
    )
}

export default Cart