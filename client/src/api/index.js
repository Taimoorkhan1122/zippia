import axios from 'axios';

const url = 'http://localhost:5000/test/jobs'

export const fetchPopuplarJobs =  async () => {
    try {
        const {data} = await axios.get(url);
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const fetchPastWeekJobs = async () => {
    try {
         const { data } = await axios.get(url);
         // console.log(data);
         return data;
    } catch (error) {
        console.log(error);
    }
}