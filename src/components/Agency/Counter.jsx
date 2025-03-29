// Counter.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Counter = ({ label, targetValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = targetValue;
    const duration = 2000; // Duração da animação em ms
    const incrementTime = 50; // Intervalo de incremento em ms
    const increment = Math.ceil(end / (duration / incrementTime));

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(interval);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(interval);
  }, [targetValue]);

  return (
    <div className="counters">
      <div className="counter-container">
        {/* Ícone */}

        {/* Contador */}
        <p className="counter-text">+{count}</p>
        {/* Label */}
        <p className="label-counter">{label}</p>
      </div>
    </div>
  );
};

export default Counter;
