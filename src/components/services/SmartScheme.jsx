import React from "react";
import { deleteScheme } from "./../api/callSchemes";

const SmartScheme = (props) => {
  const handleDelete = async () => {
    await deleteScheme(props.scheme.id);
  };

  return (
    <li className="list-group-item py-4">
      <div className="row">
        <div className="col-4 ">
          <ul className="list-unstyled pl-3">
            <li>{`Start: ${props.scheme.start}`}</li>
            <li>{`Eind: ${props.scheme.end}`}</li>
          </ul>
        </div>
        <div className="col-4">
          <h2>{props.scheme.amount}</h2>
        </div>
        <div className="col-4">
          <button
            onClick={handleDelete}
            className="btn btn-outline-danger float-right mr-3"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default SmartScheme;
