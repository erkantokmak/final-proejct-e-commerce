import { StyledIcon } from "@/styles/CommentStyle";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";


const ProductComment = ({ data }) => {

  return (
    <div className="col-12 col-md-6">

      <div className="rounded-4 border p-3 mb-4 p-4">
        <Rating
          style={{ maxWidth: 100 }}
          value={data.rating}
          className="py-1"
          readOnly
        />
        <h5 className="fw-bold my-2 d-flex gap-2">
          {data.username}
          <StyledIcon>
            <Image
              src="/assets/icons/icon-check.png"
              alt="verified"
              className="object-fit-contain"
              fill
            />
          </StyledIcon>
        </h5>
        <p className=" mt-2  opacity-50 fw-lighter">
          {data.comment}
        </p>
      </div>
    </div>
  );
};

export default ProductComment;