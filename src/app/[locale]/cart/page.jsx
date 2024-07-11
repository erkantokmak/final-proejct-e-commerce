import Cartleft from '@/components/Cart/CartLeft'
import CartRight from '@/components/Cart/CartRight'
import { Container } from '@/styles/LayoutStyle'
import React from 'react'

const page = () => {
  return (
    <Container>
      <div className="row">
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