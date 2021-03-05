import {useState} from 'react'
import Header from './components/Header'
import Jobs from './components/Jobs'
import AddJob from './components/AddJob'
import { FaTasks } from 'react-icons/fa'

function App() {
  const [showAddJob, setShowAddJob] = useState(false)
  const [jobs, setJobs] = useState([
    {
        id: 1,
        text: 'Check Indeed for new job postings',
        day: 'March 7th at 1:00pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Check LinkedIn for new job postings',
        day: 'March 8th at 1:00pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Follow up with tech.inc regarding job application',
        day: 'March 11th at 5:00pm',
        reminder: false,
    }
])

//Add job
const addJob = (job) => {
  const id = Math.floor(Math.random()*10000 + 1)
  const newJob = {id, ...job}
  setJobs([...jobs, newJob])
}

//Delete
  const deleteJob = (id) =>{
    setJobs(jobs.filter((job)=> job.id !== id))
  }

//Toggle reminder
  const toggleReminder = (id) => {
    setJobs(
      jobs.map((job)=>job.id===id ? {...job, reminder: !job.reminder} : job))
  }

  return (
    <div className="container">
      <Header title='Job Tracker App' onAdd={() => setShowAddJob(!showAddJob)} showAdd={showAddJob}/>
      {showAddJob && <AddJob onAdd={addJob}/>}
      {jobs.length > 0 ? <Jobs jobs={jobs} onDelete={deleteJob} onToggle={toggleReminder}/> : 'No jobs to show'}
    </div>
  );
}

export default App;
