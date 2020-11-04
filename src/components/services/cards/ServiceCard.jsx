import React from "react";
import ServiceCardHeader from "./ServiceCardHeader";
import ServiceCardBody from "./ServiceCardBody";

const ServiceCard = (props) => {
  return (
    <div className="col-lg-6">
      <div className="card mb-3 shadow-sm">
        <ServiceCardHeader
          title={props.title}
          value={props.value}
        />
        <ServiceCardBody
          room={props.room}
          service={props.service}
          deleteHandler={props.deleteHandler}
          schemes={props.schemes}
          checkbox={props.checkbox}
          clickHandler={props.clickHandler}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
