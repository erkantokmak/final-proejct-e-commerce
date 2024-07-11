import { getProducts } from '@/api/server';
import Filter from '@/components/Filter/Filter'
import Pagination from '@/components/Filter/Pagination';
import Sort from '@/components/Filter/Sort';
import Breadcrumb from '@/components/Products/Breadcrumb';
import SingleProduct from '@/components/Products/SingleProduct';
import { FilterCategoryTitle } from '@/styles/FilterStyle';
import { Container } from '@/styles/LayoutStyle'
import { getTranslations } from 'next-intl/server';
import React from 'react'

const page = async ({ searchParams }) => {
  const t = await getTranslations();
  const query = new URLSearchParams(searchParams).toString();
  const page = searchParams['_page'] ?? '1';
  const limit = searchParams['_limit'] ?? '9';
  const data = await getProducts(`${query}&_page=${page}&_limit=${limit}`);

  return (
    <div>
      <Container>
        <div className="row py-3">
          <Breadcrumb />
        </div>
        <div className="row">
          <div className="col-12 col-md-3">
            <Filter />
          </div>
          <div className="col-12 col-md-9">
            <div className="row">
              <div className="d-flex justify-content-between align-items-center">
                <FilterCategoryTitle>
                  {t('categoryTitle')}
                </FilterCategoryTitle>
                <Sort productLength={data.length} />
              </div>
              {
                data.map((product) => (
                  <>
                    <div className="col-md-4 py-3">
                      <SingleProduct
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        rating={product.rating}
                        price={product.price}
                        discountPercentage={product.discountPercentage}
                      />
                    </div>
                  </>
                ))
              }

            </div>
          </div>
          <div className="col-12">
            <Pagination className="ps-5"
              hasNextPage={page * limit <= data.length}
              hasPrevPage={page > 1}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default page