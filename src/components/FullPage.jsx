import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { SEARCH_URL } from "../api/api";
import Spinner from "./Spinner"
const FullPage = () => {
  const { name } = useParams();

  const back = useNavigate();

  const [country, setCountry] = useState([]);

  const getData = () => {
    axios
      .get(`${SEARCH_URL}/${name}`)
      .then((respons) => setCountry(respons.data[0]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, [name]);

  console.log(country);

  return (
    <>
      <div className="conatiner">
        <div className="card mx-auto w-75 p-2 m-4 bg-info text-center">
         <img src={country.flag} alt="ok" className="rasm" /> {name}
        </div>

        {country.length === 0 ? (

          <div className="card mx-auto w-75 p-2 m-4 bg-warning text-center">
            <Spinner/>
          </div>

        ) : (
          <div className="card mx-auto w-75 p-2 m-4 bg-info text-center">
         
        <p>{country.demonym}</p>
        <p>{country.nativeName}</p>
        

        <div className="card">

          {country.languages.map((i) =>  <ul> <li>{i.name}</li></ul> )}


        </div>

          </div>
        )}

        <div className="card card mx-auto w-75 p-2 m-4 bg-info ">
          <button
            className="btn btn-danger text-white w-25"
            onClick={() => back(-1)}
          >
            
            Go back
          </button>
        </div>
      </div>
    </>
  );
};

export default FullPage;
