"use client"
import { useSelector } from "react-redux"

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItem)
    console.log(cartItems , 'cartItems cart page')
    return (
       <>
        <div className="row">
            <div className="col-12 col-md-7">
                <div className="card"> 
                    <div className="card-body">
                    
                    </div>
                </div>
            </div> 
            <div className="col-12 col-md-5">

            </div>
        </div>
       </>
    )
}

export default Cart