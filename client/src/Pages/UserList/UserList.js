import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../../Components/UserCard/UserCard";
import { getUsers } from "../../JS/Actions/user";



const UserList = () => {
  const listUsers = useSelector((state) => state.userReducer.listUsers);
  const dispatch = useDispatch();
  const load = useSelector((state) => state.userReducer.load);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="alignthem">
    {load ? (
        <h2>loading...</h2>
      ) : (
        listUsers.map((el) => <UserCard user={el} key={el._id} />)
      )}
    </div>
  );
};

export default UserList;
