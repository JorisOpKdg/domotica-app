import React from "react";

const ServiceCardBody = ({ children }) => {
  return (
    <div className="card-body">
      <ul className="list-group list-group-flush">{children}</ul>
    </div>
  );
};

export default ServiceCardBody;
