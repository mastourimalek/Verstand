import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { getProducts } from "../../JS/Actions/product";

import "./ProductList.css";

const ProductList = () => {
  const listProducts = useSelector(
    (state) => state.productReducer.listProducts
  );
  const dispatch = useDispatch();
  const load = useSelector((state) => state.productReducer.load);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="alignthem">
      {load ? (
        <h2>loading...</h2>
      ) : (
        listProducts.map((el) => <ProductCard product={el} key={el._id} />)
      )}
    </div>
  );
};

export default ProductList;
