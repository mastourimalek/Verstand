import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editProduct, getProduct } from '../../JS/Actions/product';

const EditProduct = () => {
    const {_id} = useParams();
    const dispatch = useDispatch();

    const [newProduct, setNewProduct]= useState({});
      const productToGet = useSelector (state => state.productReducer.productToGet);
      const [file, setFile] = useState(null);
      const handleChange = (e) => {
        setNewProduct({...newProduct, [e.target.name] : e.target.value});
      };
      useEffect(() => {
        dispatch(getProduct(`${_id}`))
         });
      
      const handlePhoto = (e) => {
        setFile(e.target.files[0]);
      };

      const edit = (e) => {
        e.preventDefault();
        let data = new FormData();
        data.append("name", newProduct.name);
        data.append("description", newProduct.description);
        data.append("price", newProduct.price);
        data.append("image", file);
        dispatch (editProduct(_id,data));
       
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
                placeholder={`${productToGet.name}`}
                name="name"
                onChange={handleChange}
              />
              <Form.Label className="forms">Description</Form.Label>
              <Form.Control
                type="text"
                placeholder={`${productToGet.description}`}
                name="description"
                onChange={handleChange}
              />
              <Form.Label className="forms">Price</Form.Label>
              <Form.Control
                type="text"
                placeholder={`${productToGet.price}`}
                name="price"
                onChange={handleChange}
              />
          </Form.Group>
        </Form>
        <Button className="v33" variant="light" onClick={edit}>
          <span className="v3">EDIT PRODUCT</span>
        </Button>
      </div>
    </div>
  )
}

export default EditProduct