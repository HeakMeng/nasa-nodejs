const { isMainThread, Worker, workerData } = require('worker_threads'); 

if(isMainThread) {
   //will point to current file(threads.js)
  console.log(`MainThread id : ${process.pid}`);
  new Worker(__filename, {
    workerData: [1,7,3,9]
  });
  new Worker(__filename, {
    workerData: [1,12,3,2]
  });
} else {
  console.log(`Worker id : ${process.pid}`);
  console.log(`${workerData} is sorted: ${workerData.sort()}`)
}