import PropTypes from 'prop-types';
import { BiDollarCircle } from 'react-icons/bi';
import { LuSubtitles, LuPhone, } from 'react-icons/lu';
import { AiOutlineMail } from 'react-icons/ai';
import { ImLocation2 } from 'react-icons/im';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../utiliti/localStroge';

const JobDetail = ({ job }) => {

    
    const { id, job_description, job_responsibility, educational_requirements, experiences, job_title, salary, contact_information } = job;

    const handelApply = () => {

        saveJobApplication(parseInt(id))

        toast('You have applied successfully')
    }


    return (
        <div className="container mx-auto md:px-10">
            <header>
                <h2 className="text-3xl font-extrabold flex items-center justify-center py-24">Job Details</h2>
            </header>
            <div className="flex flex-col md:flex-row gap-6 mb-32">
                <div className='md:w-2/3'>
                    <h4 className='text-[#1A1919] font-extrabold mb-6'>Job Description: <span className='text-[#757575] font-medium'>{job_description}</span></h4>
                    <h4 className='text-[#1A1919] font-extrabold mb-6'>Job Responsibility: <span className='text-[#757575] font-medium'>{job_responsibility}</span></h4>
                    <h4 className='text-[#1A1919] font-extrabold mb-6'>Educational Requirements: <br /> <span className='text-[#757575] font-medium'>{educational_requirements}</span></h4>
                    <h4 className='text-[#1A1919] font-extrabold mb-6'>Experiences: <br /> <span className='text-[#757575] font-medium'>{experiences}</span></h4>
                </div>
                <div className='md:w-1/3'>
                    <div className='p-8 shadow-2xl bg-gradient-to-r from-[#7E90FE13] to-[#9873FF13]'>
                        <h4 className='text-xl font-extrabold text-[#1A1919] border-b-2 pb-6'>Job Details</h4>
                        <div className="flex items-center gap-2">
                            <BiDollarCircle className='text-2xl font-extrabold text-[#9873FF] mt-6'></BiDollarCircle>
                            <p className='text-xl font-extrabold text-[#474747] mt-6'>Salary : <span className='text-xl font-medium text-[#757575]'>{salary} (Per Month)</span></p>
                        </div>
                        <div className="flex items-center gap-2">
                            <LuSubtitles className='text-2xl font-extrabold text-[#9873FF] mt-6'></LuSubtitles>
                            <p className='text-xl font-extrabold text-[#474747] mt-6'>Job Title : <span className='text-xl font-medium text-[#757575]'>{job_title}</span></p>
                        </div>
                        <h4 className='text-xl font-extrabold text-[#1A1919] border-b-2 pb-6 mt-9'>Contact Information</h4>
                        <div className="flex items-center gap-2">
                            <LuPhone className='text-2xl font-extrabold text-[#9873FF] mt-6'></LuPhone>
                            <p className='text-xl font-extrabold text-[#474747] mt-6'>Phone : <span className='text-xl font-medium text-[#757575]'>{contact_information.phone}</span></p>
                        </div>
                        <div className="flex items-center gap-2">
                            <AiOutlineMail className='text-2xl font-extrabold text-[#9873FF] mt-6'></AiOutlineMail>
                            <p className='text-xl font-extrabold text-[#474747] mt-6'>Email : <span className='text-xl font-medium text-[#757575]'>{contact_information.email}</span></p>
                        </div>
                        <div className="flex items-center gap-2">
                            <ImLocation2 className='text-3xl font-extrabold text-[#9873FF] mt-6'></ImLocation2>
                            <p className='text-xl font-extrabold text-[#474747] mt-6'>Address : <span className='text-xl font-medium text-[#757575]'>{contact_information.address}</span></p>
                        </div>
                    </div>
                    <a onClick={handelApply} className="btn h-16 normal-case text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] w-full mt-6 text-xl font-bold">Apply Now</a>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

JobDetail.propTypes = {
    job: PropTypes.object
}

export default JobDetail;