import axios from 'axios';
import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link } from "react-router-dom";
import {AppContext} from '../Provider';

function Cards() {

  const [characters, setCharacters] = useContext(AppContext);
  let [search, setSearch] = useState([]);

  const handleChange = async e => {
    e.preventDefault()

    await axios.get(
      `https://gateway.marvel.com/v1/public/characters?name=${e.target.value}&ts=1&apikey=5367cd6cae7e771b11458cdffb9d314e&hash=d0f19796e15621d797107ce39770349a`).then(response=>{
      setSearch(response.data.data.results);
    }).catch(err => {
      console.log(err);
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (search.length === 0) {
      alert(`Character not found, please enter name correctly`)
    }  
  }

  return (
    <div className='p-5 justify-content-center'>
        
        <Link to={"/"}>
            <button type="button" className='btn btn-warning'>
                Back
            </button>
        </Link>

        <div className='text-center mt-3 mb-4 mx-5 py-3 bg-danger'>
        <h1 className='text-white display-3'><strong>Marvel Super Heroes</strong></h1>
        </div>
        
        <div className='text-center mb-5'>
            <input className='border-0 w-50 p-2 bg-light' onChange={handleChange}></input>
            <button className='border-0 w-25 p-2 bg-danger text-white' onClick={handleSubmit}>Search</button>
        </div>

        <div class="row row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-md-1 row-cols-sm-1 g-4 text-white">
            { 
            characters.length !== 0 ?
            (
            search.length == 0 ? 
            characters.map((character, index) => (
                <div className="col justify-content-center" key={index}>
                    <div className="card bg-danger justify-content-center m-0" style={{width: "24rem", height: "33rem"}}>
                        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} className="card-img-top" style={{height: "18rem"}}/>
                        <div class="card-body">

                            <h5 className="card-text">{character.name} <Link to={"/edit/" + index}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-pencil-square text-white" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg></Link></h5>

                            <h6 class="card-text">Modified: {character.modified.slice(0, -14).split(" ")[0].split("-").reverse().join("-")}</h6>

                            <h6 class="card- mt-3">{character.description}</h6>                            
                        </div>
                    </div>
                </div>
            )) : 

            search.map(character => (
                <div className="col" key={character.id}>
                <div className="card  bg-danger" style={{width: "24rem", height: "33rem"}}>
                    <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} className="card-img-top" style={{height: "18rem"}}/>
                    <div class="card-body">

                        <h5 class="card-text">{character.name}<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-pencil-square text-white" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg></h5>
                        
                        <p class="card-text">{character.modified.slice(0, -14).split(" ")[0].split("-").reverse().join("-")}</p>

                        <h6 class="card- mt-3">{character.description}</h6> 
                    </div>
                </div>
                </div>
            ))
            ) :
            <div className='justify-content-center my-5 text-center' style={{height:"97vh"}}>
              <div class="spinner-grow" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <h3>Loading...</h3>
            </div>
            }
        </div>
    </div>
  );
}

export default Cards;
