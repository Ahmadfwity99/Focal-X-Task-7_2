import { useState, useEffect } from 'react';
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState('white');
  const [showPopup, setShowPopup] = useState(false);

  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
    } else if (count < 100) {
      setCount(count + 10);
    } else if (count < 1000) {
      setCount(count + 100);
    }
  };

  const decrementCount = () => {
    if (count >= 1000) {
      setCount(count - 100);
    } else if (count >= 100) {
      setCount(count - 10);
    } else if (count >= 10) {
      setCount(count - 1);
    } else if (count > 0) {
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
    setBgColor('white');
    setShowPopup(false);
  };

  useEffect(() => {
    const handleLoad = () => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    };
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  useEffect(() => {
    if (count === 10 || count === 100 || count === 1000) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  }, [count]);

  useEffect(() => {
    if (count >= 10) {
      if (count >= 1000) {
        setBgColor('red');
      } else if (count >= 100) {
        setBgColor('blue');
      } else {
        setBgColor('green');
      }
    } else {
      setBgColor('white');
    }
  }, [count]);

  return (
    <div style={{ backgroundColor: bgColor, padding: '20px', textAlign: 'center' }}>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={resetCount}>Restart</button>
      {showPopup && <div className="popup">Special Event!</div>}
    </div>
  );
}

export default Counter;
