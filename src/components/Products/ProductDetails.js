import React, { useEffect } from "react";
import {
  BsPlusSquareFill,
  BsDashSquareFill,
  BsSuitHeart,
} from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsDetails } from "../../features/products/productSlice";

const ProductDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.products);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      dispatch(getProductsDetails(id));
    }
    return () => {
      mounted = false;
    };
  }, [dispatch, id]);

  return (
    <div className="container-xxl py-5">
      <div className="row">
        <div className="col-6 text-center">
          <img src={productDetail.image} alt="speaker" className="w-50" />
        </div>
        <div className="col-6">
          <div>
            <h5 className="mb-0">{productDetail.name}</h5>
            <p>(3 Reviews)</p>
            <h5 className="text-black-50">
              Availablity:{" "}
              {productDetail.Stock === 0 ? (
                <span className="fs-8 text-danger">Out of Stock</span>
              ) : (
                <span className="fs-8 text-success">In Stock</span>
              )}
            </h5>
            <h4>
              ${productDetail.price}{" "}
              <span className="text-decoration-line-through text-danger fs-6">
                {productDetail.offerPrice !== 0 &&
                  "$" + productDetail.offerPrice}
              </span>
            </h4>
            <div>
              <BsDashSquareFill className="quantityBtn" />
              <span className="mx-2">1</span>
              <BsPlusSquareFill className="quantityBtn" />
            </div>
            <h6 className="text-black-50 mt-3">
              Description:{" "}
              <span className=" text-dark fs-8">
                {productDetail.description}
              </span>
            </h6>
            <div className="d-flex align-items-center">
              <div className="cursor-pointer">
                <BsSuitHeart />
                <span className="fs-8 ms-1">Add to wishlist</span>
              </div>
              <div className="ms-2 add-to-cart cursor-pointer">
                <IoBagOutline />
                <span className="fs-8 ms-1">Add to Cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 reviews">
        <div className="col-12">
          <h5 className="border-bottom pb-2 mb-3">Reviews</h5>

          <h6>Add Reviews</h6>

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Your Rating*
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
            ></textarea>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-outline-primary mb-3">
              Submit
            </button>
          </div>

          {/* <textarea cols="30" rows="6" placeholder="Comment *"></textarea> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
