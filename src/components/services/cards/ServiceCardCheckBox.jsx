import React from "react";

const ServiceCardCheckBox = (props) => {
  return (
    <li className="list-group-item py-4">
      <form className="form-right my-2 my-lg-0 col-12">
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            onClick={props.clickHandler()}
          />
          <label className="custom-control-label" for="curtainSwitch">
            Aan/Uit
          </label>
        </div>
      </form>
    </li>
  );
};

export default ServiceCardCheckBox;
