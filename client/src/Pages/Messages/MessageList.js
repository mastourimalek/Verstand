import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MessageCard from '../../Components/MessageCard/MessageCard';
import { getMessages } from '../../JS/Actions/message';

function MessageList() {
  const listMessages = useSelector((state) => state.messageReducer.listMessages);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  return (
    <div>
       {listMessages.map((el) =><MessageCard message={el} key={el._id} /> )}
    </div>
  )
}

export default MessageList