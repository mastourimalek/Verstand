import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProduct } from "../../JS/Actions/product";

const AddProduct = () => {
  const dispatch = useDispatch();

  const [newProduct, setNewProduct] = useState({});
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const handlePhoto = (e) => {
    setFile(e.target.files[0]);
  };
  const add = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("name", newProduct.name);
    data.append("description", newProduct.description);
    data.append("price", newProduct.price);
    data.append("image", file);
    dispatch(addProduct(data));
    window.location.reload();
  };
  return (
    <div>
      <div>
        <Form>
          <h2 style={{ color: "white" }}>Add Product</h2>
          <Form.Group>
          <Form.Label className="forms">Product Image</Form.Label>
            <Form.Control
              type="file"
              encType="multipart/form-data"          
              onChange={handlePhoto}
            />
             <Form.Label className="forms">Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="product name"
                name="name"
                onChange={handleChange}
              />
              <Form.Label className="forms">Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                name="description"
                onChange={handleChange}
              />
              <Form.Label className="forms">Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="price"
                name="price"
                onChange={handleChange}
              />
          </Form.Group>
        </Form>
        <Button className="v33" variant="light" onClick={add}>
          <span className="v3">ADD PRODUCT</span>
        </Button>
      </div>
    </div>
  );
};

export default AddProduct;
