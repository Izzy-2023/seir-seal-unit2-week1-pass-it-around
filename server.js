//*************************** */
// DEPENDENCIES
// Brings things from libraries and other files
//*************************** */
// require('thing'): it will return the exported value of the library or file we specify

//import the express library
const express = require("express")


//*************************** */
// Create Express Application Object
// This is the center of our express universe
//**************************** */
// express(): returns an express application object

const app = express()

//*****************************
// ROUTES
// Which function should run for differnt (method/url) pairs
// ****************************

app.get('/', (req, res) => {
  res.send('<h1>99 Bottles of soda on the wall</h1><a href="/98">Take one down, pass it around</a>');
});

app.get('/:number_of_bottles', (req, res) => {
  const numberOfBottles = parseInt(req.params.number_of_bottles);
  let message = '';

  if (numberOfBottles === 0) {
    message = '<h1>No more bottles of soda on the wall!</h1>';
  } else {
    const nextBottle = numberOfBottles - 1;
    message = `<h1>${numberOfBottles} Bottle${numberOfBottles !== 1 ? 's' : ''} of soda on the wall.</h1>`;
    
    if (numberOfBottles > 0) {
      message += `<a href="/${nextBottle}">Take one down, pass it around</a>`;
    }
  }

  message += '<br/><a href="/">Start over</a>';
  res.send(message);
});


// *****************************
// TURNING ON SERVER LISTENER
// WILL TELL OUR APP TO LISTEN FOR REQUESTS
// ON A CERTAIN PORT
// *****************************

// app.listen(PORT, FUNCTION)
// The function will run after the server turns on
app.listen(3000, () => {console.log("server is listening on port 3000")})