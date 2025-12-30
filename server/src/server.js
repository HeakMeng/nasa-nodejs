const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8000; 

const MongoURL = 'mongodb+srv://heakmeng:heak1122@nasa.kzcvdnq.mongodb.net/?appName=nasa';

const server = http.createServer(app);

mongoose.connection.once('open',() => {
  console.log('Mongodb connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.log(err);
});

const { loadPlanets } = require("./models/planets.model");

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

async function startServer(){
  await mongoose.connect(MongoURL); 
  await loadPlanets();

  app.listen(PORT, (req, res) => {
    console.log(`Server is listening on port ${PORT}`);
  });
}

startServer();