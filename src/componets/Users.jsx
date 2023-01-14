import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const Users = ({locacion}) => {
    const[personajesItems,setPersonajesItems]=useState({});
    useEffect(()=>{
        axios.get(locacion)
        .then((res)=>setPersonajesItems(res.data))
    },[locacion])
    console.log(personajesItems)
    return (
        
           
           <div class="grid-item">

            <div className={personajesItems.status}></div>
            <h3><b>STATUS: </b> {personajesItems.status}</h3>
             <h3><b>NAME: </b> {personajesItems.name}</h3>
             <h3><b>ORIGIN: </b> {personajesItems.origin?.name}</h3>
             <h3><b>LOCATION: </b> {personajesItems.location?.name}</h3>
           <img src={personajesItems?.image} alt="" />
           </div>
           
           
          
    );
};

export default Users;