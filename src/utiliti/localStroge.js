
const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('jobs-applications');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}


const saveJobApplication = id => {
const storedJobApplications = getStoredJobApplication();
const exist = storedJobApplications.find(jobId => jobId === id);
if(!exist){
    storedJobApplications.push(id);
    localStorage.setItem('jobs-applications', JSON.stringify(storedJobApplications));
}
}

export { getStoredJobApplication, saveJobApplication }