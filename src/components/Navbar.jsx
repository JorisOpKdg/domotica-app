import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { DB_URL } from "./../database/db";

// Dit is een voorbeeld van een functional component
const Navbar = () => {
  const [floors, setFloors] = useState;

  useEffect(() => {
    const getFloors = async () => {
      try {
        const response = await axios.get(`${DB_URL}/`);
        setFloors(response.data);
      } catch (error) {
        this.setState = { hasError: true };
      }
    };
    getFloors();
  });

  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">Domotica App</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        {floors.map((floor) => (
          <Link className="p-2 text-dark" to={`/${floor.id}`}>
            {floor.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
