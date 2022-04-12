import React, { useState ,useEffect } from "react";
import Spinner from "../components/Spinner";
import CountryCard from "../components/CountryCard";



const Home = (props) => {


  const { data = [] } = props;

  const [from, setFrom] = useState(0);
  const [limt, setLimt] = useState(21);

  const SLICE = data.slice(from, limt);



  const Pagiant = (x, y) => {
       setFrom(x)
       setLimt(y)
  }


  return (
    <>

      <div className="container w-75 mx-auto bg-light main-c">

        {data.length === 0 ? <Spinner /> :
          SLICE.map((item) => {
            return (
              <CountryCard key={item.name} item={item} />
            )
          })}

      </div>

      <>



      </>

      <div className="col w-25 mx-auto m-4">

        <nav aria-label="...">
          <ul className="pagination pagination-sm">

          
            <li className="page-item">
              <span className="page-link" onClick={()=>Pagiant(0,30)} href="#"> 1 </span>
            </li>

            <li className="page-item">

              <span className="page-link" onClick={()=>Pagiant(31,60)} href="#"> 2 </span>

            </li>

            <li className="page-item " >
              <span className="page-link" onClick={()=>Pagiant(61,90)} > 3 </span>
            </li>


            <li className="page-item " >
              <span className="page-link" onClick={()=>Pagiant(91,120)} > 4 </span>
            </li>

            <li className="page-item " >
              <span className="page-link" onClick={()=>Pagiant(121,150)} > 5 </span>
            </li>

            <li className="page-item " >
              <span className="page-link" onClick={()=>Pagiant(151,180)} > 6 </span>
            </li>


            <li className="page-item " >
              <span className="page-link" onClick={()=>Pagiant(181,210)} > 7 </span>
            </li>

            <li className="page-item " >
              <span className="page-link" onClick={()=>Pagiant(211,240)} > 8 </span>
            </li>

            <li className="page-item " >
              <span className="page-link" onClick={()=>Pagiant(241,250)} > 9 </span>
            </li>

          </ul>
        </nav>

      </div>
    </>
  );
};

export default Home;
