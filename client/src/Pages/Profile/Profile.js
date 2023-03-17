import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  const admin = useSelector((state) => state.adminReducer.admin);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);

  return (
    <div>
      {isAuth ? (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{user && user.firstname}</Card.Title>
              <Card.Title>{user && user.name}</Card.Title>
              <Card.Text>{user && user.email}</Card.Text>
              <Card.Text>{user && user.phone}</Card.Text>
              <div className="btn">
                <Link to={`/EditInfos/${user._id}`}>
                  <Button className="btn1" variant="primary">
                    EDIT Infos
                  </Button>
                </Link>
                <Link to={`/EditPassword/${user._id}`}>
                  <Button className="btn1" variant="primary">
                    EDIT Password
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      ) : isAuthAdmin ? (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{admin && admin.firstname}</Card.Title>
              <Card.Title>{admin && admin.name}</Card.Title>
              <Card.Title>{admin && admin.email}</Card.Title>
              <div className="btn">
                <Link to={`/EditInfos/${admin._id}`}>
                  <Button className="btn1" variant="primary">
                    EDIT Infos
                  </Button>
                </Link>
                <Link to={`/EditPassword/${admin._id}`}>
                  <Button className="btn1" variant="primary">
                    EDIT Password
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
