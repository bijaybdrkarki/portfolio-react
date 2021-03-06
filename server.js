const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'portfolio/build')))

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/portfolio/build/index.html'))
})
}

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  // console.log(req.body.p);
  res.send(`I received your POST request. This is what you sent me: ${req.body.p}`);
});



app.listen(port, () => console.log(`Listening on port ${port}`));