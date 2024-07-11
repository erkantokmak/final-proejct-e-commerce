import Cartleft from '@/components/Cart/CartLeft'
import CartRight from '@/components/Cart/CartRight'
import { Link } from '@/navigation'
import { CartTitle } from '@/styles/CartStyle'
import { Container } from '@/styles/LayoutStyle'
import React from 'react'
const page = () => {

  return (
    <Container>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link href="/">Home</Link></li>
          <li className="breadcrumb-item"><Link href="/cart">Cart</Link></li>
        </ol>
      </nav>
      <div className="row py-5">
        <div className="col-12">
          <CartTitle>
            YOUR CART
          </CartTitle>
        </div>
        <div className="col-12 col-md-7">
          <Cartleft />
        </div>
        <div className="col-12 col-md-5">
          <CartRight />
        </div>
      </div>
    </Container>
  )
}

export default page