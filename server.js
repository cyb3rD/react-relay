import express from 'express';

let app =  express();

app.get('/', (req, res) => res.send('Hello! From My Express server!'));

app.listen(7000);
