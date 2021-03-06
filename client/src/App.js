import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL, config } from "./services";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Continents from "./components/Continents";
import Show from "./components/Show";
import Destinations from "./components/Destinations";
import Form from "./components/Form";


function App() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestination = async () => {
      const res = await axios.get(baseURL, config);
      setDestinations(res.data.records);
    };
    fetchDestination();
  }, []);

  return (
    <div className="App">
      <Nav />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/continents/:continent">
        <Continents destinations={destinations} />
      </Route>
      <Route path="/destinations/:id">
        <Show destinations={destinations}/>
      </Route>
      <Route path="/destinations" exact>
        <Destinations destinations={destinations}/>
      </Route>
      <Route path="/new">
        <Form destinations={destinations}/>
        
      </Route>
      <Route path="/edit/:id">
        <Form destinations={destinations}/>
        
      </Route>
    </div>
  );
}

export default App;
