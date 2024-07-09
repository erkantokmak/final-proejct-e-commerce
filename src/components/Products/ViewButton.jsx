"use client"
import { ViewAllButton } from '@/styles/ProductStyle'
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'
import SingleProduct from './SingleProduct';

const ViewButton = ({ data }) => {
    const [click, setClick] = useState(false);
    const t = useTranslations();
    return (
        <>

            {click ? (data.slice(4).map((product) => (
                (
                    <SingleProduct
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        rating={product.rating}
                        price={product.price}
                        discountPercentage={product.discountPercentage} />
                )))) : ''}
            <div className="col-12 d-flex justify-content-center">
                {click ? (<ViewAllButton className='mt-5' onClick={() => { setClick(false) }}>
                    {t('viewLess')}
                </ViewAllButton>) : (<ViewAllButton className='mt-5' onClick={() => { setClick(true) }}>
                    {t('viewAll')}
                </ViewAllButton>)}
            </div>

        </>
    )
}

export default ViewButton