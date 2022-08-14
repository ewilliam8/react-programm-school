import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
  <div className="clear wrapper">

    <Header/>
    <Routes>
      <Route path="/" element={ <Home /> } exact></Route>
    </Routes>

  </div>
  );
}

export default App;
