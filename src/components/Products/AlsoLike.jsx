import { SectionTitle } from '@/styles/ComponentStyle'
import React from 'react'
import SingleProduct from './SingleProduct';
import { getAlsoLike } from '@/api/server';
import { getTranslations } from 'next-intl/server';

const AlsoLike = async () => {
    const alsolike = await getAlsoLike();
    const t = await getTranslations();

    return (
        <>
            <div className="row my-5">
                <SectionTitle>
                    {t('youMightAlsoLike')}
                </SectionTitle>
            </div>
            <div className="row mb-5">
                {alsolike.slice(0, 4).map((product) => (
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
        </>
    )
}

export default AlsoLike