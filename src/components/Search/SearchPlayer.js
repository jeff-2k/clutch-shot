import React from 'react'
import axios from 'axios'

import PlayerDetails from './PlayerDetails'
import PlayerChart from './PlayerChart'
import PlayerVideo from './PlayerVideo'


class SearchPlayer extends React.Component {
    state = {
        playerName: null,
        playerStats: {},
        playerPic: '',
    }

    //------ GET DATA API  ------
    getPlayerId = async () => {
        try{
            const response = await axios.get(`https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`) 
            // console.log(response.data.data)
             if(response.data.data.length > 1){
                alert("Please specify the name more.")
            } else {
                this.setState({ playerStats: {...response.data.data[0]} })
             this.getPlayerStats(response.data.data[0].id)
            }
    } catch(err){
        console.error(err)
    }
    }

    getPlayerStats = async (playerId) => {
        try{
            const response = await axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=${playerId}`)
            //  console.log(response.data.data)
             this.setState({ playerStats: {...response.data.data[0], ...this.state.playerStats} })
        } catch(err){
            console.error(err)
        }
    }

    getPlayerPic = async () => {
        // console.log(this.state)
        try {
            const response = await axios.get(`https://nba-players.herokuapp.com/players/${this.state.playerStats['last_name']}/${this.state.playerStats['first_name']}`)
            // console.log(response.config.url)
            this.setState({ playerPic: response.config.url.toLowerCase(), ...this.state.playerStats })
        } catch(err) {
            console.error(err)
        }
    }

    componentDidUpdate(prevProps,prevState){
        if(this.state.playerStats.last_name !== prevState.playerStats.last_name){
            this.getPlayerPic()
        }
        // console.log(this.state.playerStats)
    }
    
    componentDidMount (){
        this.getPlayerId()
        this.getPlayerStats()
        
    }

    //----- INPUTS -----
    handleChange = (event) => {
        const replace = event.target.value.split(' ').join('_')
        
            this.setState({ playerName: replace })
        
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.getPlayerId()
        
        // console.log(this.state.playerName)
    }


    render(){
        return(
            <div className='search-container mb-5 d-flex justify-content-center flex-wrap h-25'>
            <div className='container mt-5 d-flex justify-content-center flex-wrap h-25'>

            <form onSubmit={this.handleSubmit} className='h-25 d-flex justify-content-center'>
                <div className="mb-3 d-flex justify-content-center flex-wrap h-25 ">
                    <label htmlFor="playerNameInput" className="form-label" style={{fontSize:'1.8rem'}}>Please enter player's name to see the averages per game.</label>
                    <br/>
                    <input className="form-control form-control-lg mt-2 " 
                    type="text" 
                    placeholder="Please digit players name" 
                    aria-label="Please digit players name" 
                    value={this.state.value} 
                    onChange={this.handleChange} />
                    <button className="btn text-white mt-2" type="submit">Show Stats</button>
                </div>
            </form>
            </div>
            
            <div className='player-info container-fluid row mt-5 mb-5 mx-5 d-flex justify-content-center align-items-center  flex-wrap h-25'>
             <div className='col p-0 ps-0'>
              <br/>
            {this.state.playerStats.first_name &&  this.state.playerStats.min ?  <PlayerDetails 
            state={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            /> 
        : ''}
            </div>
            
            <div className='col'>
           <PlayerChart 
           state={this.state}
           handleChange={this.handleChange}
           handleSubmit={this.handleSubmit}
            />
            </div>
            </div>

            {this.state.playerStats.first_name &&  this.state.playerStats.min ? <PlayerVideo
            state={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
             />
             : ''} 
            </div>
            
        )
    }
}

export default SearchPlayer

