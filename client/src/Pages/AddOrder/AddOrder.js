import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addOrder } from "../../JS/Actions/order";
import { getProduct } from "../../JS/Actions/product";
import "./AddOrder.css";
import cart from "./cart.png";

const AddOrder = () => {
  const { _id } = useParams();
  const productToGet = useSelector(
    (state) => state.productReducer.productToGet
  );
  const [newOrder, setNewOrder] = useState({
    productname: `${productToGet.name}`,
    email: "",
    adress: "",
    phone: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  useEffect(() => {
    dispatch(getProduct(`${_id}`));
  });
  const handleChange = (e) => {
    setNewOrder({ ...newOrder, [e.target.name]: e.target.value });
  };
  const add = () => {
    dispatch(addOrder(newOrder));
    navigate("/");
  };

  return (
    <div>
      <h1>send your order now</h1>
      <div>
        <Card style={{ width: "30%" }}>
          <Card.Img variant="top" src={productToGet.image} width="20%" />
          <Card.Body>
            <Card.Title>
              {productToGet.name} <span>DT</span>
            </Card.Title>
            <Card.Title>
              {productToGet.price} <span>DT</span>
            </Card.Title>
            <Card.Text>{productToGet.description}</Card.Text>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={handleChange}
              value={newOrder.email}
            />
            <Form.Label>Adress</Form.Label>
            <Form.Control
              type="text"
              name="adress"
              onChange={handleChange}
              value={newOrder.adress}
            />
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              onChange={handleChange}
              value={newOrder.phone}
            />
            <hr />
            <div class="Buynow" onClick={isAuth ? add : navigate("/Login")}>
              Buy now <img src={cart} className="cart" alt="img" width="15%" />
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AddOrder;
