import Cartleft from '@/components/Cart/CartLeft'
import CartRight from '@/components/Cart/CartRight'
import React from 'react'

const page = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-7">
       <Cartleft />
      </div>
      <div className="col-12 col-md-5">
      <CartRight />
      </div>
    </div>
  )
}

export default page