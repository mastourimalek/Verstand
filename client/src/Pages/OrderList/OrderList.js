import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../JS/Actions/order";
import OrderCard from '../../Components/OrderCard/OrderCard'
const OrderList = () => {
  const listOrders = useSelector((state) => state.orderReducer.listOrders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <div>
    {listOrders.map((el) =><OrderCard order={el} key={el._id} /> )}
    </div>
  );
};

export default OrderList;
