import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Intro from './pages/Intro';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.scss';
import Favourites from './pages/Favourites';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro/>} />
        <Route path="/favourites" element={<Favourites/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
