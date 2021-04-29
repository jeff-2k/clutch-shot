import React from 'react' 
import nbaAllTeams from '../Images/nba-all-teams.png'
// import axios from 'axios'

// class AllTeams extends React.Component{
//     state = {
//         teams: [],
//     }
    
//     componentDidMount = async () => {
//         try{
//             const response = await axios.get('https://www.balldontlie.io/api/v1/teams')
//             console.log(response.data.data)
//             this.setState({ teams: [...response.data.data]})
//         } catch(err){
//             console.error(err)
//         }
//     }

//     render(){
//         return ( 
//             <div className='nbaAllTeams'>
//                 <h3> NBA all teams: </h3>
//             <ul className="list-group list-group-horizontal-sm d-flex
//              flex-wrap mb-5 ">
//             {this.state.teams.map((team) => {
//                 return(
//                 <li key={team.name}className="list-group-item flex-fill d-flex
//                 flex-wrap align-items-center justify-content-center">{team['full_name']}</li>
//                 )
//             })}
//           </ul>
//             </div>
            
              
//         )
//     }
// }

function AllTeams () {
    return (
        <div className='allTeams-container'>
            <img src={nbaAllTeams} alt='NBA-all-teams' className='NBA-all-teamns-photo vw-100 vh-100 container-fluid'/>
        </div>
    )
}

export default AllTeams