import React from 'react';
import { useEffect, useState } from 'react';
import PosterImg from './assets/images/poster.jpg';

const App = () => {
  const [count, setCount] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="main">
      <h1>你好啊，李银河~！</h1>
      <p>计数器 : {count}</p>
      <img className="img" src={PosterImg} alt="" />
    </div>
  );
};


export default App;