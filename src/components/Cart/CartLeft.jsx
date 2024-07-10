"use client"
import { CartContainer } from "@/styles/CartStyle"
import { useSelector } from "react-redux"
import CartItems from "./CartItems"

const Cartleft =  () => {
    const cartItems = useSelector(state => state.cart.cartItem)
    console.log(cartItems)
   
    return (
       <>
        <CartContainer>
        {
            
                <CartItems />
           
        }
        </CartContainer>
       </>
    )
}

export default Cartleft