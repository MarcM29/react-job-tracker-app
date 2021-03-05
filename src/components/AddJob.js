import {useState} from 'react'
const AddJob = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text){
            alert('Please enter a job')
            return
        }
        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder('')
    }

    return (
        <form classname='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Job</label>
                <input type='text' placeholder='Add job' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text' placeholder='Add day and time' value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save Job' className='btn btn-block' />
        </form>
    )
}

export default AddJob
