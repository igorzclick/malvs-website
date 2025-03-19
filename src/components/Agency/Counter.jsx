// Counter.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const Counter = ({ label, targetValue, }) => {
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

  //   return (
  //     <div className="counters">
  //       <p className="count">{count}</p>
  //       <p>+</p>
  //       &nbsp;
  //       <p className="label">{label}</p>
  //     </div>
  //   );
  // };

  return (
    <div style={styles.counters}>
      <div style={styles.counterContainer}>
        {/* Ícone */}
        
        {/* Contador */}
        <h2 style={styles.counterText}>+{count}</h2>
        {/* Label */}
        <p style={styles.label}>{label}</p>
      </div>
    </div>
  );
};

const styles = {
  counters: {
    display: "flex",
    flexDirection: "row",
  },

  counterContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    width: "150px",
    margin: "20px",
  },
  iconContainer: {
    fontSize: "40px",
    color: "#4CAF50", // Cor verde para os ícones
    marginBottom: "10px",
  },
  icon: {
    fontSize: "40px",
  },
  counterText: {
    fontSize: "36px",
    margin: "10px 0",
    color: "#e52168",
  },
  label: {
    fontSize: "16px",
    color: "#777",
  },
};

export default Counter;

