import React from 'react'
import './PlayerDetails.css'

function PlayerDetails (props){
    console.log(props)
    return(
     
    <div className="card mb-0 mx-5" style={{width: '18rem'}}>
    <img src={props.state.playerPic} className="card-img-top h-auto mt-5" alt="..." />
<div className="card-body ">
  <h5 className="card-title">{props.state.playerStats['first_name']} {props.state.playerStats['last_name']}</h5>
  <h6 className="card-subtitle mb-2 text-muted">{props.state.playerStats.team['full_name']}</h6>
</div>
<ul className="list-group list-group-flush">
   <li className="list-group-item"><strong>Minutes:  </strong>  {props.state.playerStats['min']}</li>
   <li className="list-group-item"><strong>Points:  </strong>   {props.state.playerStats['pts']}</li>
   <li className="list-group-item"><strong>Assists:  </strong>  {props.state.playerStats['ast']}</li>
   <li className="list-group-item"><strong>Rebounds:  </strong> {props.state.playerStats['reb']}</li>
   <li className="list-group-item"><strong>Blocks:  </strong>   {props.state.playerStats['blk']}</li>
   <li className="list-group-item"><strong>Steals:  </strong>   {props.state.playerStats['stl']}</li>
   <li className="list-group-item"><strong>Turnovers:  </strong> {props.state.playerStats['turnover']} </li>
</ul>
</div>
    )
}

export default PlayerDetails