import React from "react";
import "../styles/loading.css";

const LoadingIndicator = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingIndicator;
