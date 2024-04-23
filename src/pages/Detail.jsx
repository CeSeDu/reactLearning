import { useParams } from "react-router-dom";
import arr from "../data";
import { useEffect, useState } from 'react';


const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(()=>{
    setData(arr);
  },[id]);

  console.log("data", data);

  const redirectFunc = () => {
    window.location = "/";
  };
  return (
    <>
      <button onClick={redirectFunc}>Home Sayfasına Git</button>
      {
        data.filter(dt => dt.id == id).map((dat, i) => (
            <div key={i}>{dat.name}</div>
        ))
      }
    </>
  )
};

export default Detail;
