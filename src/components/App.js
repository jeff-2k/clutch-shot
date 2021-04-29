import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import  'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import NavBar from './NavBar/NavBar'
import Home from './Home/Home'
import AllTeams from './AllTeams/AllTeams';
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar />
     <Route exact path='/' component={Home} />
     <Route exact path='/allTeams' component={AllTeams} />
     <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
