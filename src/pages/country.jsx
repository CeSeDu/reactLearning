import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';

 function Country() {
    const [country, setCountry] = useState([])

    useEffect(()=>{
        const getCountry= async() => {
            const data = await axios.get('https://restcountries.com/v3.1/all')
            setCountry(data)
        }
       getCountry()
    },[])
    console.log(country, "country");
  return (
    <>
    {
        country?.data?.map((dt,i) => (
            <div key={i}>{dt.name.common} {dt.flag}</div>
        ))
    }
    </>
  )
}
export default Country;