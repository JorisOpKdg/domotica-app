import React, { useContext } from "react";
import { deleteScheme } from "./../../../api/callSchemes";
import { useHistory } from "react-router-dom";
import { SchemeContext } from "./../../../contexts/SchemeContext";

const ServiceScheme = ({ room, scheme }) => {
  const history = useHistory();
  const { deleteScheme } = useContext(SchemeContext);

  const deleteHandler = async () => {
    deleteScheme(scheme);
    history.push(`/room-detail/${room.floorid}/${room.id}`);
  };

  return (
    <li className="list-group-item py-4">
      <div className="row">
        <div className="col-4 ">
          <ul className="list-unstyled pl-3">
            <li>{`Start: ${scheme.start}`}</li>
            <li>{`Eind: ${scheme.end}`}</li>
          </ul>
        </div>
        <div className="col-4">
          <h2>{scheme.amount}</h2>
        </div>
        <div className="col-4">
          <button
            onClick={deleteHandler}
            className="btn btn-outline-danger float-right mr-3"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default ServiceScheme;
