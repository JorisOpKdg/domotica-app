import React from "react";

const ServiceCard = ({ children }) => {
  return (
    <div className="col-lg-6">
      <div className="card mb-3 shadow-sm">{children}</div>
    </div>
  );
};

export default ServiceCard;
