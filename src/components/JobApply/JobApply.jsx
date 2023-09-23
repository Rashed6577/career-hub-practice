
import PropTypes from 'prop-types';
import { CiLocationOn } from 'react-icons/ci';
import { BiDollarCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const JobApply = ({ apply }) => {

    const { id, logo, job_title, company_name, remote_or_onsite, job_type, contact_information, salary } = apply;


    return (
        <div className='flex flex-col md:flex-row items-center justify-between p-8'>
            <div className='flex flex-col md:flex-row items-center gap-8'>
                <div className='px-12 py-24 bg-[#F4F4F4] rounded-lg'>
                    <img className='w-40 h-14' src={logo} alt="" />
                </div>
                <div>
                    <h4 className='text-2xl font-bold text-[#474747]'>{job_title}</h4>
                    <p className='text-[#757575] text-2xl font-semibold'>{company_name}</p>
                    <button className='border-2 border-[#7E90FE] px-5 py-2 my-4 mr-4 rounded-lg text-btn-text hover:bg-slate-200'>{remote_or_onsite}</button>
                    <button className='border-2 border-[#7E90FE] px-5 py-2 my-4 mr-4 rounded-lg text-btn-text hover:bg-slate-200'>{job_type}</button>
                    <div className='flex gap-6'>
                    <p className='text-xl font-medium text-[#757575] flex items-center gap-2'> <CiLocationOn></CiLocationOn> {contact_information.address}</p>
                    <p className='text-xl font-medium text-[#757575] flex items-center gap-2'><BiDollarCircle></BiDollarCircle> {salary}</p>
                    </div>
                </div>
            </div>
            <div className=''>
            <Link to={`/job/${id}`}>
            <a className="btn normal-case text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</a>
            </Link>
            </div>
        </div>
    );
};

JobApply.propTypes = {
    apply: PropTypes.object
}

export default JobApply;