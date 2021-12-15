import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../Provider';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Edit() {
  const [characters, setCharacters] = useContext(AppContext);
  const [editInfo, setEditInfo] = useContext(AppContext);

  const data = editInfo.length !== 0 ? editInfo : characters;

  const { id } = useParams();

  const handleChange = e => {
  
    data[id].name = document.getElementById("name").value !== "" ? document.getElementById("name").value : data[id].name;

    data[id].description = document.getElementById("description").value !== "" ? document.getElementById("description").value : data[id].description;
  }

  const handleSubmit = e => {
    e.preventDefault();

    setEditInfo(data);
  }

  return (
    <div class="row row-cols-1 row-cols-md-3 row-cols-sm-3 p-5" style={{height:"97vh"}}>
        <Link to={"/characters"}><button type="button" className='btn btn-warning mx-5 mt-0'>Back</button></Link>
        { characters.length !== 0 ?
          <form className='mt-5' onSubmit={handleSubmit} onChange={handleChange}>
            <img src={`${data[id].thumbnail.path}.${data[id].thumbnail.extension}`} className="card-img-top" style={{height: "15rem"}}/>
            <h1 className='text-black bg-warning'>Edit info</h1>
            
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
              </div>
              <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder={data[id].name} id="name"/>
            </div>
            
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">Description</span>
              </div>
              <textarea class="form-control" aria-label="With textarea" placeholder={data[id].description}id="description"></textarea>
            </div>

            <input class="btn btn-primary" type="submit"/>
  
          </form> :
          <div className='text-black'>Empty</div>
        }
    </div>
  );
}

export default Edit;
