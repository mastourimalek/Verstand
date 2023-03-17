import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { deleteOrder } from '../../JS/Actions/order';


const OrderCard = ({order}) => {
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteOrder(order._id));
    window.location.reload();
  };

  return (
    <div>
      <div className="orderCards">
        <Card>
          <Card.Body>
            <Card.Text>
              <span className="forms">Product :</span>
              {order.productname}
            </Card.Text>
            <Card.Text>
              <span className="forms">E-mail :</span>
              {order.email}
            </Card.Text>
            <Card.Text>
              <span className="forms">Phone :</span>
              {order.phone}
            </Card.Text>
            <Card.Text>
              <span className="forms">Adress :</span>
              {order.adress}
            </Card.Text>
            <Button variant="danger" onClick={handleDelete}>
              Delete Order
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default OrderCard