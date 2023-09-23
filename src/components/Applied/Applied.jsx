import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utiliti/localStroge";
import JobApply from "../JobApply/JobApply";

const Applied = () => {

    const jobs = useLoaderData();

    const [apply, setApply] = useState([]);
    const [display, setDisplay] = useState([]);

    const handelFilter = (filter) => {
        if(filter === 'all'){
            setDisplay(apply);
        }else if(filter === 'remote'){
            const remoteJobs = apply.filter(job => job.remote_or_onsite === 'Remote');
            setDisplay(remoteJobs);
        }else if(filter === 'onsite'){
            const onsiteJobs = apply.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplay(onsiteJobs);
        }
    }

    useEffect(() => {
        const appliedJobs = getStoredJobApplication();

        if (jobs.length > 0) {
            // const jobApplied = jobs.filter(job => appliedJobs.includes(job.id));

            const jobApplied = [];

            for (const id of appliedJobs) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobApplied.push(job)
                }
            }
            setApply(jobApplied);
            setDisplay(jobApplied);
        }
    }, [jobs])


    return (
        <div className="container mx-auto md:px-10">
            <header>
                <h2 className="text-3xl font-extrabold flex items-center justify-center py-24">Applied Jobs</h2>
            </header>
            <div className="p-8">
                <details className="dropdown mb-32">
                    <summary className="m-1 btn">Filter</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=>handelFilter('all')}><a>All</a></li>
                        <li onClick={()=>handelFilter('remote')}><a>Remote</a></li>
                        <li onClick={()=>handelFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            <div className="mb-20 -mt-20">
                {
                    display.map(apply => <JobApply key={apply.id} apply={apply}></JobApply>)
                }
            </div>
        </div>
    );
};

export default Applied;