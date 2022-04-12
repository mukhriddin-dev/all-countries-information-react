import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({item}) => {
  return (
    <>
      <Link to={`/home/${item.name}`} className="card p-4 m-2 w-100">

        <span className="link">{item.name}</span>
        <span>
          <img src={item.flags.svg} className="flag" alt="" />
        </span>

      </Link>
      
    </>
  );
};

export default CountryCard;
