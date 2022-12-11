import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productData: [],
  productDetail: {},
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetch_products_request: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    fetch_products_success: (state, action) => {
      return {
        ...state,
        isLoading: false,
        productData: action.payload,
      };
    },
    fetch_products_error: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    product_details_request: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    product_details_success: (state, action) => {
      return {
        ...state,
        isLoading: false,
        productDetail: action.payload,
      };
    },
    product_details_error: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

const {
  fetch_products_request,
  fetch_products_success,
  fetch_products_error,
  product_details_request,
  product_details_success,
  product_details_error,
} = productSlice.actions;

const getProducts = () => {
  return async (dispatch) => {
    dispatch(fetch_products_request());

    let link = "/products";

    const res = await axios.get(link).catch((error) => error);

    if (res.status === 200) {
      dispatch(fetch_products_success(res.data.data));
    } else {
      dispatch(fetch_products_error(res));
    }
  };
};

const getProductsDetails = (id) => {
  return async (dispatch) => {
    dispatch(product_details_request());

    let link = `/product/${id}`;

    const res = await axios.get(link).catch((error) => error);

    if (res.status === 200) {
      dispatch(product_details_success(res.data.data));
    } else {
      dispatch(product_details_error(res));
    }
  };
};

export const selectAllProducts = (state) => state.products.productData;

export { productSlice, getProducts, getProductsDetails };
