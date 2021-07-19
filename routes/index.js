const express = require('express');
const getJobsController = require('../controller/index')
const app = express();

const router = express.Router();

router.get('/', getJobsController.getJobs);

exports.jobsRoute = app.use('/jobs', router);