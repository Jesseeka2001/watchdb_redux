import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';



require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
// module.exports = {
//   plugins: [
//     {
//       resolve: `gatsby-source-custom`,
//       options: {
//         genre: process.env.GENRE_LIST,
//       },
//     },
//   ],
// }
// const db = require('db')
// db.connect({
//   genre: process.env.GENRE_LIST,
//   // username: process.env.DB_USER,
//   // password: process.env.DB_PASS
// })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


