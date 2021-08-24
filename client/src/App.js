import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { baseURL, config } from './services'
import { Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Continents from "./components/Continents";

function App() {
  const [destinations, setDestinations] = useState([])


  useEffect(() => {
    const fetchDestination = async () => {
      const res = await axios.get(baseURL, config)
      setDestinations(res.data.records)
    }
    fetchDestination()
  }, [])

  return (
    <div className="App">
      <Nav />
      <Route path="/" exact>
        <Home />
      </Route>
      <br />
      <Route path="/continents/:continent">
        <Continents destinations={destinations} />

      </Route>
      <Route path="/destinatons/:id" >
        <h1>This is destination route</h1>
      </Route>
      <br />
      <Route path="/destinations" >
        <h1>This is all destinations route</h1>
      </Route>
      <br />
      <Route path="/new" >
        <h1>This is new form route</h1>
      </Route>
      <Route path="/edit/:id" >
        <h1>This is edit form route</h1>
      </Route>
    </div>
  );
}

export default App;
