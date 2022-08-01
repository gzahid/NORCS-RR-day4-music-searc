/*
used Axios to setup shazam API
rename this file as App.js to make it work
https://rapidapi.com/apidojo/api/shazam/
*/
import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
const axios = require("axios");

function App() {
  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/search',
    params: {term: 'kiss the rain', locale: 'en-US', offset: '0', limit: '5'},
    headers: {
      'X-RapidAPI-Key': '1f636ffaaemshefc7d920d3a3f2cp122f2ajsn785a4269790b',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };
  useEffect(()=>{
    const dataFetch = async() =>{
      const data = await axios.request(options);
      console.log({data});
    };
    dataFetch();

  });

  return (
    <div className="App">
      
    </div>
  );
}
export default App;
