import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import * as axios from 'axios';
import App from './App';
import db from './server/db';

const url =
  'https://pixabay.com/api/?key=12509636-53caf59f5bb94c5e817c60f6e&image_type=photo&orientation=horizontal&q=dogs&per_page=9';
axios(url).then(data => {
  return data.data.hits.map((item, i) => {
    db.pets[i].image = item.webformatURL;
    return db.pets[i];
  });
});
ReactDOM.render(
  <HashRouter basename="/">
    <App />
  </HashRouter>,
  document.getElementById('root'),
);
