import { DiscountBox, OldPrice, ProductBackground, ProductImageWrapper, ProductPrice, ProductTitle, RatingValue, RatingValueMax } from '@/styles/ProductStyle'
import { Rating } from '@smastrom/react-rating'
import Image from 'next/image'
import React from 'react'

const SingleProduct = ({ image, title, rating, price, discountPercentage }) => {
    
    return (
        <>
            
                <ProductBackground>
                    <ProductImageWrapper className='position-relative'>
                        <Image src={`/assets/products/${image}`} alt="product" fill className='object-fit-contain' />
                    </ProductImageWrapper>
                </ProductBackground>
                <ProductTitle className='mt-3'>
                    {title}
                </ProductTitle>
                <div className='d-flex align-items-center'>
                    <Rating style={{ maxWidth: 100 }} value={rating} readOnly /> <RatingValue>{rating}/<RatingValueMax>5</RatingValueMax></RatingValue>
                </div>
                <div className="d-flex align-items-center gap-2 mt-2">
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
                </div>
        </>
    )
}

export default SingleProduct