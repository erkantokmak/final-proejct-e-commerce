import { SectionTitle } from '@/styles/ComponentStyle'
import React from 'react'
import SingleProduct from './SingleProduct';
import { ViewAllButton } from '@/styles/ProductStyle';
import { getTopSeller } from '@/api/server';
import { getTranslations } from 'next-intl/server';
import ViewButton from './ViewButton';


const NewSelling = async () => {
    const topselling = await getTopSeller();
    const t = await getTranslations();
  return (
    <>
            <div className="row my-5">
                <SectionTitle>
                    {t('topSellingTitle')}
                </SectionTitle>
            </div>
            <div className="row">
            {topselling.slice(0,4).map((product) => (
                    (
                        <SingleProduct 
                        key={product.id} 
                        image={product.image} 
                        title={product.title} 
                        rating={product.rating} 
                        price={product.price} 
                        discountPercentage={product.discountPercentage} />
                    )))}
            </div>
            <div className="row">
               <ViewButton data={topselling} />
            </div>
        </>
  )
}

export default NewSelling