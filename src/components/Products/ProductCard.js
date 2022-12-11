import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./index.css";

const ProductCard = ({ product }) => {
  return (
    <>
      <Link
        className="product-card position-relative"
        to={`/product/${product._id}`}
      >
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/products/wish.svg" alt="wishlist" />
          </Link>
        </div>
        <div className="product-image text-center">
          <img
            src={product.image}
            alt="products"
            className="img-fluid w-40 mb-2"
          />
        </div>
        <div className="product-details">
          <h6 className="brand">{product.name}</h6>
          <h5 className="product-title">
            {product.description.substring(0, 50) + "..."}
          </h5>
          <div className="d-flex align-items-center">
            <ReactStars
              count={5}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <span className="ms-1">({product.ratings})</span>
          </div>
          <p className="price">
            ${product.price}{" "}
            <span className="text-decoration-line-through text-black-50 ms-1">
              {product.offerPrice !== 0 && "$" + product.offerPrice}
            </span>
          </p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column">
            <Link>
              <img src="images/products/prodcompare.svg" alt="prodcompare" />
            </Link>
            <Link to={`/product/${product._id}`}>
              <img src="images/products/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="images/products/add-cart.svg" alt="addcart" />
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
