import Job from './Job'
const Jobs = ({jobs, onDelete, onToggle}) => {
    
    return (
        <>
          {jobs.map((job, index)=> (
          <Job 
          key={index} 
          job={job} 
          onDelete={onDelete} 
          onToggle={onToggle} />
          ))}  
        </>
    )
}

export default Jobs
