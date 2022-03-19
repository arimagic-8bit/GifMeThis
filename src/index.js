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
import store from './services/redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro/>} />
        <Route path="/favourites" element={<Favourites/>} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
