import React from "react";
import ServiceCardCheckBox from "./ServiceCardCheckBox";
import ServiceCardNewScheme from "./ServiceCardNewScheme";
import ServiceScheme from "./../schemes/ServiceScheme";
import ServiceCardSlider from "./ServiceCardSlider";

const ServiceCardBody = (props) => {
  return (
    <div className="card-body">
      <ul className="list-group list-group-flush">
        {props.checkbox ? (
          <ServiceCardCheckBox clickHandler={props.clickHandler} />
        ) : (
          <ServiceCardSlider
            clickHandler={props.clickHandler}
            min={props.min}
            max={props.max}
          />
        )}

        <ServiceCardNewScheme
          room={props.room}
          service={props.service}
          deleteHandler={props.deleteHandler}
        />
        
        {props.schemes.map((scheme) => (
          <ServiceScheme scheme={scheme} />
        ))}
      </ul>
    </div>
  );
};

export default ServiceCardBody;
