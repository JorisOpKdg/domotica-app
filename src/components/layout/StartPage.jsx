import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FloorContext } from './../../contexts/FloorContext';
import SpinnerPage from './SpinnerPage';

const StartPage = () => {
  const {floors, loading} = useContext(FloorContext)

  return (
    <div className="container py-5 my-5">
      <div className="row">
        {loading && <SpinnerPage />}
        {!loading && floors &&
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
                    key={floor.id}
                    className="btn btn-lg btn-block btn-outline-dark mt-3"
                    to={`/rooms-list/${floor.id}`}
                  >
                    {floor.name}
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

