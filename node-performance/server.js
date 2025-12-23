const express = require('express');
const cluster = require('node:cluster');


cluster.schedulingPolicy = cluster.SCHED_RR;

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
if(cluster.isPrimary){
  console.log("Master Node has been started");
  cluster.fork(); // -> create a worker node
  cluster.fork(); // -> If this scenarios we will create 2 worker(called 2 times)
} else{
  console.log("Worker Node has been started");
  app.listen(3000);
}
