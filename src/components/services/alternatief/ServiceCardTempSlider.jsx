import React from "react";

const ServiceCardTempSlider = (props) => {
  return (
    <li className="list-group-item py-2">
      <div className="row">
        <div className="col-8">
          <h5 className="card-title pl-3">Ingesteld op:</h5>
        </div>
        <div className="col-4 text-">
          <h3 className="text-right pr-2">{props.room.desiredTemp}°</h3>
        </div>
        <form className="m-3 col-11">
          <input
            type="range"
            className="custom-range"
            min={props.min}
            max={props.max}
            onChange={props.valueHandler}
            value={props.room.desiredTemp}
          ></input>
        </form>
      </div>
    </li>
  );
};

export default ServiceCardTempSlider;
