import { useEffect, useState } from "react";
import Job from "../Job/Job";

const Featured = () => {


    const [jobs, setJobs] = useState([]);

    const [data, setData] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])


    return (
        <div className="container mx-auto px-10 my-20">
            <h2 className="text-center text-5xl font-extrabold text-[#1A1919]">Featured Jobs</h2>
            <p className="text-base font-medium text-center text-[#757575] mt-4 mb-16">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto gap-6">
                {
                    jobs.slice(0, data).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={data === jobs.length? 'hidden' : 'text-center mt-10'} >
                <a onClick={() => setData(jobs.length)} className="btn normal-case text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">See All Jobs</a>
            </div>
            <div className={data !== jobs.length? 'hidden' : 'text-center mt-10'} >
                <a onClick={() => setData(4)} className="btn normal-case text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">See Less</a>
            </div>
        </div>
    );
};

export default Featured;