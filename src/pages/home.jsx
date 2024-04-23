import React from 'react'
import arr from '../data'

function home() {
    const mainRedirectFunc = () => {
        window.location = "/detail"
    }
    const basketRedirectFunc = () =>{
        window.location = "/basket"
    }
    const redirectFunc = (id) => {
        window.location = `/detail/${id}`
    }
  return ( 
    <>
    <div>
        {
            arr.map((ar,i) => (
                <div onClick={()=>redirectFunc(ar.id)} style={{margin:"10px",cursor:"pointer",border:"1px solid red",padding:"5px"}}>{ar.name}</div>
            ))
        }
        <button onClick={mainRedirectFunc}>Detail Sayfasına Git</button>
        <button onClick={basketRedirectFunc}>Sepete Git</button>
    </div>
    </>
  )
}

export default home