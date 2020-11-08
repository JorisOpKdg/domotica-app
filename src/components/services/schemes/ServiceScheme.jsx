import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { SchemeContext } from "./../../../contexts/SchemeContext";

const ServiceScheme = ({ roomId, scheme }) => {
  const history = useHistory();
  const { removeScheme } = useContext(SchemeContext);

  const deleteHandler = async () => {
    removeScheme(scheme.id);
    history.push(`/room-detail/${roomId}`);
  };

  return (
    <li className="list-group-item py-4">
      <div className="row">
        <div className="col-4">
          <ul className="list-unstyled pl-3">
            <li key="">{`Start: ${scheme.start}`}</li>
            <li>{`Eind: ${scheme.end}`}</li>
          </ul>
        </div>
        <div className="col-4">
          <h2>{scheme.amount}</h2>
        </div>
        <div className="col-4 d-flexd flex-column">
          <Link
            className="btn btn-outline-dark mr-3 mb-2"
            to={`/edit-service-scheme/${scheme.id}`}
          >
            Aanpassen
          </Link>
          <button
            onClick={deleteHandler}
            className="btn btn-outline-danger mr-3"
          >
            Verwijderen
          </button>
        </div>
      </div>
    </li>
  );
};

export default ServiceScheme;
