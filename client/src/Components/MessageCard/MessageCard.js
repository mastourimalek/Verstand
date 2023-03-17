import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteMessage } from '../../JS/Actions/message';

const MessageCard = ({message}) => {
    const dispatch = useDispatch();
    const handleDelete = (e) => {
      e.preventDefault();
      dispatch(deleteMessage(message._id));
      window.location.reload();
    };
  return (
    <div><div className="orderCards">
    <Card>
      <Card.Body>
        <Card.Text>
          <span className="forms">Name :</span>
          {message.name}
        </Card.Text>
        <Card.Text>
          <span className="forms">E-mail :</span>
          {message.email}
        </Card.Text>
        <Card.Text>
          <span className="forms">Phone :</span>
          {message.phone}
        </Card.Text>
        <Card.Text>
          <span className="forms">Message :</span>
          {message.message}
        </Card.Text>
        <Button variant="danger" onClick={handleDelete}>
          Delete Message
        </Button>
      </Card.Body>
    </Card>
  </div></div>
  )
}

export default MessageCard