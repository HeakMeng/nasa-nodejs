const express = require('express');

const app = express();

function delay(duration){
  const startTime = Date.now();
  while(Date.now() - startTime < duration){
    //event loop is block
  }
};

app.get('/', (req, res) => {
  res.send(`Performance example ${process.pid}`);
});

app.get('/timer', (req, res) => {
  delay(9000);
  res.send(`Performance example ${process.pid}`);
});

console.log("Server started is...");
console.log("Worker Node has been started");
app.listen(3000);
