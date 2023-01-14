import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import Users from './componets/Users'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import portada from './img/rick-y-morty-en-el-espacio_3840x2160_xtrafondos.com.jpg'

function App() {
  const[personajes,setPersonajes]=useState({})
  const[numPersonajes,setNumPersonajes]=useState("")
  useEffect(()=>{
    const numRamdom=Math.floor(Math.random()*126)+1
    axios.get(`https://rickandmortyapi.com/api/location/${numRamdom}`)
    .then((res)=>{setPersonajes(res.data)})
    
  },[])
  const searchType=(e)=>{
    e.preventDefault();
    axios.get(`https://rickandmortyapi.com/api/location/${numPersonajes}`)
    .then((res)=>{setPersonajes(res.data)})
  }
  return (
    <div className="App">
      <img src={portada} alt="" />
      <div className="caja row g-0 text-center" >
          <h2 className="col-sm-6 col-md-4"><b>TYPE: </b>{personajes.type}</h2>
                <h2 className="col-sm-6 col-md-4"><b>DIMENSION: </b>{personajes.dimension}</h2>
                <h2 className="col-sm-6 col-md-4"><b>NAME: </b>{personajes.name}</h2>
      </div>
      <div className="caja1 row g-0 text-center">
        <div className="search-box">
         
            <form onSubmit={searchType}>
<label  class="btn-search" >
<i className="fas fa-search"></i></label>
            <input type="text"   className="input-search" value={numPersonajes} placeholder="1-126" onChange={e=>setNumPersonajes(e.target.value)}/>  
       
            </form>
               </div>
        
      </div >
      <div class="App">
           <div class="grid-container  ">
      {
          personajes.residents?.map(locacion=>(
            <Users locacion={locacion}/>
          ))
        }
        
        </div>
     </div>
        
      
    </div>
  )
}

export default App
