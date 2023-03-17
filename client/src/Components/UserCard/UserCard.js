import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../JS/Actions/user';

const UserCard = ({user}) => {

    const dispatch = useDispatch();

    const handleDelete = (e) => {
      e.preventDefault();
      dispatch(deleteUser(user._id));
      window.location.reload();
    };

  return (
    <div>
    <div className="orderCards">
      <Card>
        <Card.Body>
          <Card.Text>
            <span className="forms">firstname :</span>
            {user.firstname}
          </Card.Text>
          <Card.Text>
            <span className="forms">name :</span>
            {user.name}
          </Card.Text>
          <Card.Text>
            <span className="forms">email :</span>
            {user.email}
          </Card.Text>
          <Card.Text>
            <span className="forms">Phone:</span>
            {user.phone}
          </Card.Text>
          <Button variant="danger" onClick={handleDelete}>
            Delete user
          </Button>
        </Card.Body>
      </Card>
    </div>
  </div>
  )
}

export default UserCard