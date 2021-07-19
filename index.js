const express = require('express');
const app =  express();
const port = process.env.PORT || 5000;

const {jobsRoute} = require('./routes');

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  return res.send({message: "api is working"})
})

app.use("/test", jobsRoute);


app.listen(port, () => {
  console.log("server is up on PORT : ", port);
})