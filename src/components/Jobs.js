import Job from './Job'
const Jobs = ({jobs, onDelete, onToggle}) => {
    
    return (
        <>
          {jobs.map((job)=> (
          <Job key={job.id} job={job} onDelete={onDelete} onToggle={onToggle} />
          ))}  
        </>
    )
}

export default Jobs
