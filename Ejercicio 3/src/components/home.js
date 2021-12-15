import axios from 'axios';
import { useContext } from 'react';
import { AppContext } from '../Provider';
import { Link } from "react-router-dom";

function Home() {
    const [characters, setCharacters] = useContext(AppContext);

    let hundredCharacters = [];
    let allCharacters = [];
    async function info (){
        for (let i = 0; i < 16; i++) {
           const page = await axios.get(`https://gateway.marvel.com/v1/public/characters?limit=100&offset=${i*100}&ts=2&apikey=69ebb8c6bee50af48b1b2962f08c428b&hash=ced221b6c45b3d841f56a8260dfc83d6`);

           hundredCharacters.push(page);
        }     

        hundredCharacters.map(arr => (allCharacters = allCharacters.concat(arr.data.data.results)));

        setCharacters(allCharacters);
    }
    
    info ();

    return (
        <div className='text-center' style={{height:"100vh"}}>
            <Link to={"/characters"}>
                <div type="button" className='btn p-3 bg-white mt-5'>
                    <h1 className='display-2 text-danger'>
                        <strong className='mx-2'>
                        Play
                        </strong>
                        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" className="bi bi-play-btn-fill mx-2" viewBox="0 0 16 16">
                            <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                        </svg>
                    </h1>
                </div>
            </Link>
        </div>
    );
}

export default Home;
