import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addMessage } from "../../JS/Actions/message";
import "./AddMessage.css";
import send from "./paper-plane.png";

const AddMessage = () => {
  const [newMessage, setNewMessage] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewMessage({ ...newMessage, [e.target.name]: e.target.value });
  };

  const add = () => {
    dispatch(addMessage(newMessage));
    window.location.reload();
  };

  return (
    <div>
      <div className="container543">
        <Form>
          <h2 style={{ color: "white" }}>Contact Us</h2>
          <div className="containers12">
            <div>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <div className="label1">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div className="label1">
                  <Form.Control
                    type="text"
                    placeholder="Phone number"
                    name="phone"
                    onChange={handleChange}
                  />
                </div>
                <div className="label1">
                  <Form.Control
                    type="email"
                    placeholder="Mail"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
            </div>
            <div>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <div className="label2">
                  <Form.Control
                    as="textarea"
                    rows={9}
                    placeholder="Message"
                    name="message"
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
            </div>
          </div>
        </Form>
        <Button className="v33" variant="light" onClick={add}>
          <span className="v3">
            SEND YOUR MESSAGE <img src={send} className="send" alt="send" />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default AddMessage;
