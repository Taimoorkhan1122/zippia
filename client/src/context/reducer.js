import { fetchPopuplarJobs, fetchPastWeekJobs } from "../api";
  
let data = [];
const getData = async (fn) => {
    const jobsData = await fn();
    jobsData.jobs.filter((job, index) => index < 10 && data.push(job));
  };
          
export const appReducer = (state, action) => {
    switch (action.type) {
        case "ALL":
            console.log("getting data");
            getData(fetchPopuplarJobs)
            console.log("inside reducer ==> ", data);
            return {
                jobs: data,
            }
        case "PAST_WEEK":
            data = getData(fetchPastWeekJobs);
            return {
                jobs: data
            }
        default:
            return state
    }
}