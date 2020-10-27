import React, {useState} from 'react';
import SearchParams from "./Components/SearchParams";
import './App.scss';
import { Router, Link } from '@reach/router';
import Details from './Components/Details';
import ThemeContext from './Components/ThemeContext';

function App() {
  const themeHook = useState('crimson');
  return (
    <ThemeContext.Provider value={themeHook}>
      <div className="App">
        <header>
          <Link to="/"> <h1>PetDate</h1> </Link>
        </header>
        <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
