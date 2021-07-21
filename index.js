const express = require('express');
const cors = require('cors');
const app =  express();
const port = process.env.PORT || 5000;

const {jobsRoute} = require('./routes');

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.get('/', (req, res) => {
  return res.send({message: "api is working"})
})

app.use('/api/test', jobsRoute);


app.listen(port, () => {
  console.log("server is up on PORT : ", port);
})