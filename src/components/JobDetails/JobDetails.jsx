import { useLoaderData, useParams } from "react-router-dom";
import JobDetail from "../JobDetail/JobDetail";

const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);

    const job = jobs.find(job => job.id === idInt);
    console.log(job)

    return (
        <div>
            <JobDetail job={job}></JobDetail>
        </div>
    );
};

export default JobDetails;