import express from 'express';
const hostname = '127.0.0.1';
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Welcome to my EXPRESS BOII!');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
