import { ProductCartImageWrapper, ProductCartVariable, ProductCartVariableTitle } from '@/styles/CartStyle'
import { DiscountBox, OldPrice, ProductBackground, ProductPrice, ProductTitle, QuantitiyMinus, QuantityPlus, QuantityValue } from '@/styles/ProductStyle'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const CartItems = () => {
  const t = useTranslations();
  return (
    <>
      <div className="row">
        <ProductBackground>
          <ProductCartImageWrapper>
            <Image src="/assets/product/black-stripped-tshirt.png" alt='test' fill className='object-fit-contain' />
          </ProductCartImageWrapper>
        </ProductBackground>
        <div className='d-flex flex-column'>
          <ProductTitle>
            Title
          </ProductTitle>
          <ProductCartVariableTitle>
            Size:
            <ProductCartVariable>
              Large
            </ProductCartVariable>
          </ProductCartVariableTitle>
        </div>
        {/* <div className="d-flex align-items-center gap-2 mt-2">
          <ProductPrice className='m-0'>
            $ {price}
          </ProductPrice>
          {discountPercentage > 0 ? (<>
            <OldPrice className='m-0'>
              ${Math.floor(price / (1 - discountPercentage / 100))}
            </OldPrice>
            <DiscountBox>
              -{discountPercentage}%
            </DiscountBox>
          </>)
            : ''}
        </div> */}
        <div className="d-flex">
          <QuantitiyMinus type="button" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</QuantitiyMinus>

          <QuantityValue>
            {/* {quantity} */}1
          </QuantityValue>
          <QuantityPlus type="button" onClick={() => setQuantity(quantity + 1)}>+</QuantityPlus>
        </div>
      </div>
    </>
  )
}

export default CartItems