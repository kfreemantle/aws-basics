'use strict';

// setup our basic express server
require('dotenv').config();
const express = require('express');
const https = require('https');
const cors = require('cors');

// initialize the app and server port, initialize cors
const app = express();
const PORT = process.env.PORT || 3002;
app.use(cors());

// function to get pokemon data from the 
function getPokemonData(name) {
  return new Promise((resolve, reject) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`

    https.get(url, (res) => {
      let data ='';

      // listen for data and append to the 'data' variable
      res.on('data', (newData) => {
        data += newData;
      });

      // after the response, parse the JSON pokedata and resolve the promise
      res.on('end', () => {
        resolve(JSON.parse(data));
      });

    }).on('error', (err) => {
      // if there's an error, reject the promise with the error object
      reject(err);
    })
  })
}


// GET request for the PokeAPI
app.get('/pokemon/:name', async (req, res) => {
  const { name } = req.params;

  try {
    // Get the data from the Pokemon API using the getPokemonData function
    const data = await getPokemonData(name);

    // Extract the types from the data
    const types = data.types.map((typeInfo) => typeInfo.type.name);

    // Create a response object with the required information
    const searchResponse = {
      name: data.name,
      types: types,
    };

    // Send the response object as JSON
    res.json(searchResponse);
  } catch (error) {
    // If there's an error, set the response status to 500 and send an error message
    res.status(500).json({ message: error.message });
  }
});

// Start the server on the specified port
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
