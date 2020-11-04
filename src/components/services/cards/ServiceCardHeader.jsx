import React from "react";

const ServiceCardHeader = (props) => {
  return (
    <div className="card-header pl-5 pt-3">
      <div className="row">
        <div className="col-8">
          <h2 className="my-0 font-weight-normal">{props.title}</h2>
        </div>
        <div className="col-4">
          <h2 className="text-right pr-4 ">{props.value}</h2>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardHeader;