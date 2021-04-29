import React from 'react' 
import { Link } from 'react-router-dom'
import './Home.css'
import AllTeams from '../AllTeams/AllTeams'
import SearchPlayer from '../Search/SearchPlayer'


function Home () {
    return (
    <div className='home'>
        <Link to={'/allTeams'}>
        <div className="d-grid gap-2 col-6 mx-auto mt-3">
        <button className="btn" type="button">Click to see the list of all NBA teams</button>
        </div>
        </Link>
        <SearchPlayer />
    </div>
    )
}

export default Home