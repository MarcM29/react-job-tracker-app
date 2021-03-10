import {useState, useEffect} from 'react'
import Header from './components/Header'
import Jobs from './components/Jobs'
import AddJob from './components/AddJob'
import { FaTasks } from 'react-icons/fa'

function App() {
  const [showAddJob, setShowAddJob] = useState(false)
  const [jobs, setJobs] = useState([])
  useEffect(()=>{
    const getJobs = async () => {
      const jobsFromServer = await fetchJobs()
      setJobs(jobsFromServer)
    }
    getJobs()
  }, [])

  const fetchJobs = async () => {
    const res = await fetch('http://localhost:5000/jobs')
    const data = await res.json()
    return data
  }

  const fetchJob = async (id) => {
    const res = await fetch(`http://localhost:5000/jobs/${id}`)
    const data = await res.json()
    return data
  }

//Add job
const addJob = async (job) => {
  const res = await fetch('http://localhost:5000/jobs', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(job)
  })
  const data = await res.json()

  setJobs([...jobs, data])
  //const id = Math.floor(Math.random()*10000 + 1)
  //const newJob = {id, ...job}
  //setJobs([...jobs, newJob])
}

//Delete
  const deleteJob = async (id) =>{
    await fetch(`http://localhost:5000/jobs/${id}`, {method: 'DELETE'})
    setJobs(jobs.filter((job)=> job.id !== id))
  }

//Toggle reminder
  const toggleReminder = async(id) => {
    const jobToToggle = await fetchJob(id)
    const updatedJob = {...jobToToggle, reminder: !jobToToggle.reminder}
    const res = await fetch(`http://localhost:5000/jobs/${id}`,{
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updatedJob)
    })

    const data = await res.json()

    setJobs(
      jobs.map((job)=>job.id===id ? {...job, reminder: data.reminder} : job))
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
