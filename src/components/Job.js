import {FaTasks, FaTimes} from 'react-icons/fa'
const Job = ({job, onDelete, onToggle}) => {
    return (
        <div className={`job ${job.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(job.id)}>
            <h3>{job.text} <FaTimes style={{color: 'red'}} onClick={() => onDelete(job.id)}/></h3>
            <p>{job.day}</p>

        </div>
    )
}

export default Job
