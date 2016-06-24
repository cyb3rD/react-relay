import express from 'express';

import {MongoClient} from 'mongodb';

let server = {
  port: 7000,
  mongodbConnect: 'mongodb://react-relay:react-admin@ds023064.mlab.com:23064/react-relay-course'
}

let app =  express();
app.use(express.static('public'));

let db;
MongoClient.connect(server.mongodbConnect, (err, database) => {
  if (err) throw err;

  db = database;
  app.listen(server.port, () => console.log('Listening on port: ', server.port));

});

app.get("/data/links", (req, res) => {

  db.collection("links").find({}).toArray((err, links) => {
    if (err) throw err;

    res.json(links);
  });

});
