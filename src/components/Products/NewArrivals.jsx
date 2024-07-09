import { SectionTitle } from '@/styles/ComponentStyle'
import React from 'react'
import SingleProduct from './SingleProduct';
import { getNewArrivals } from '@/api/server';
import { getTranslations } from 'next-intl/server';
import ViewButton from './ViewButton';

const NewArrivals = async () => {
    const newarrivals = await getNewArrivals();
    const t = await getTranslations();

    return (
        <>
            <div className="row my-5">
                <SectionTitle>
                    {t('newArrivalsTitle')}
                </SectionTitle>
            </div>
            <div className="row">
                {newarrivals.slice(0, 4).map((product) => (
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
                <ViewButton data={newarrivals} />
            </div>
            <div className="border border-bottom my-5"></div>
        </>
    )
}

export default NewArrivals