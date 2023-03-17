import React from "react";
import {  Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import cart from "./cart.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../JS/Actions/product";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  const isAdmin = useSelector((state) => state.adminReducer.isAdmin);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Title>{product.price} <span>DT</span></Card.Title>
          <div
            className="Buynow"
            onClick={() => navigate(`/AddOrder/${product._id}`)}
          >
            {" "}
            Buy now <img
              src={cart}
              width ="20%"
              className="cart"
              alt="img"
            />{" "}
          </div>
          <div>
          { isAuthAdmin && isAdmin ?
          (<>
          <Button onClick={() => navigate(`/EditProduct/${product._id}`)} >Edit Product</Button>
          <Button onClick={()=>dispatch(deleteProduct(product._id)) } >Delete Product</Button>
          </>
           )  : null
          }
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
