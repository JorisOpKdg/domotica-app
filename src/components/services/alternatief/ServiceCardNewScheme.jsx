import React from "react";
import { Link } from "react-router-dom";

const ServiceCardNewSchemeOfTest = (props) => {
  return (
    <li className="list-group-item py-4">
      <div className="row">
        <div className="col-8">
          <h5 className="card-title pl-3 pt-2">Slim schema</h5>
        </div>
        <div className="col-4">
          <Link
            className="btn btn-dark float-right mr-3"
            to={`/new-smart-scheme?roomId=${props.room.id}&service=temperature`}
            room={props.room}
            service={props.service}
            deleteHandler={props.deleteHandler}
          >
            Nieuw
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ServiceCardNewSchemeOfTest;
