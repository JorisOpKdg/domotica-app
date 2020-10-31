import React, { useEffect, useState } from "react";
import axios from "axios";
import { DB_URL } from "../../database/db";

const SmartScheme = (props) => {
  const [schemes, setSchemes] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${DB_URL}/schemes?roomId=${props.roomId}`
        );
        setSchemes(response.data);
      } catch (error) {
        console.error("Could not load rooms:" + error);
      }
    };
    fetchData();
  },[]);

  return (
    <>
      {schemes &&
        schemes.map((scheme) => {
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
                <a className="btn btn-outline-danger float-right mr-3">
                  Delete
                </a>
              </div>
            </div>
          </li>;
        })}
    </>
  );
};

export default SmartScheme;
