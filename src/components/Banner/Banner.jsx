
const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 container mx-auto px-10">
            <div className="w-2/3">
                <h2 className="text-7xl font-extrabold text-[#1A1919]">One Step <br /> Closer To Your <br /> <span className="text-[#7E90FE]">Dream Job</span></h2>
                <p className="text-lg font-medium text-[#757575] mt-6 mb-8">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <a className="btn h-14 normal-case text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-xl font-bold">Get Started</a>
            </div>
            <div>
                <img className="" src="../src/assets/images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;