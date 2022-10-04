import React from "react";
import "../scss/spinner.scss";

export function Spinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
}