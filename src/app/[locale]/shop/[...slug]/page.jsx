import { getProductDetails } from "@/api/server";
import AlsoLike from "@/components/Products/AlsoLike";
import Breadcrumb from "@/components/Products/Breadcrumb";
import ProductDetail from "@/components/Products/ProductDetail";
import { Container } from "@/styles/LayoutStyle";


const page = async ({ params }) => {
  const data = await getProductDetails(params.slug[0]);
  return (
    <>
      <Container>

        <div className="row">
          <div className="col-12">
            <Breadcrumb category={data.category} product={data.title}/>
            <ProductDetail product={data} />
            ..review component
            <AlsoLike /> 
          </div>
        </div>
      </Container>
    </>
  )
}

export default page