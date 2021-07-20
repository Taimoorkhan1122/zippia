const axios = require('axios');

exports.getJobs = async (req, res) => {
    const {title} = req.query;
    const payload = {
      companySkills: true,
      dismissedListingHashes: [],
      fetchJobDesc: true,
      jobTitle: title ? title : "Business Analyst",
      locations: [],
      numJobs: 10,
      previousListingHashes: [],
    };
    try {
        const {data} = await axios({
            method: 'post',
            url: 'https://www.zippia.com/api/jobs/', 
            headers: {
                'Accept': "application/json",
                "Content-Type": "application/json",
            },
            data: JSON.stringify(payload),
        });
        res.send(data);
    } catch (error) {
        res.status(400).send({ message: "something went wrong in getting jobs", error })
        console.log(error);
    }
};