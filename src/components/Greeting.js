import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/greetingSlice';

const myGreetings = () => {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((state) => state.greeting.randomGreeting);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{randomGreeting}</p>
    </div>
  );
};

export default myGreetings;
