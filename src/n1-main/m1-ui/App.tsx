import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import {HashRouter} from 'react-router-dom';
import {Header} from './header/Header';
import {Pages} from './routes/Pages';

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Header/>
          <Pages/>
      </HashRouter>
    </div>
  );
}

export default App;
