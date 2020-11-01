import React, { useState, useEffect } from "react";
import { getFloors } from "../api/callFloors";
import { Link } from "react-router-dom";

const StartPage = () => {
  const [floors, setFloors] = useState();

  useEffect(() => {
    getFloors().then((floors) => setFloors({ floors: floors }));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {floors &&
          floors.map((floor) => (
            <div className="col-md-6 col-lg-3">
              <div className="card mb-3 shadow-sm">
                <img
                  class="card-img-top"
                  src={floor.image}
                  alt="Card cap"
                ></img>
                <div className="card-body ">
                  <Link
                    id={floor.id}
                    className="btn btn-lg btn-block btn-outline-secondary mt-3"
                    to={`/rooms-list/${floor.id}`}
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default StartPage;
