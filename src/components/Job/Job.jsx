import PropTypes from 'prop-types';
import { CiLocationOn, CiDollar } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {

    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;

    return (
        <div>
            <div className='border-2 border-[#E8E8E8] p-10 rounded-xl'>
            <img className='h-8' src={logo} alt=""></img>
            <h2 className='text-2xl font-extrabold text-[#474747] mt-6 mb-2'>{job_title}</h2>
            <p className='text-xl font-semibold text-[#757575] mb-2'>{company_name}</p>
            <button className='border-2 border-[#7E90FE] px-5 py-2 my-4 mr-4 rounded-lg text-btn-text hover:bg-slate-200'>{remote_or_onsite}</button>
            <button className='border-2 border-[#7E90FE] px-5 py-2 my-4 mr-4 rounded-lg text-btn-text hover:bg-slate-200'>{job_type}</button>
            <div className="flex justify-start gap-6 text-[#757575] mt-4 mb-6">
                <p className='flex items-center gap-2'><CiLocationOn className='w-6 h-6'></CiLocationOn> {location}</p>
                <p className='flex items-center gap-2'><CiDollar className='w-6 h-6'></CiDollar> {salary}</p>
            </div>
            <Link to={`/job/${id}`}>
            <a className="btn normal-case text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</a>
            </Link>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object
}

export default Job;