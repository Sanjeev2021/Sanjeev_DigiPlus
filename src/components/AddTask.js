import { useState } from 'react';
const AddTask = ({ onSave }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();    
            onSave({ text, day, email, status });
        setText('');
        setDay('');
        setEmail('');
        setStatus('');
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>User</label>
                <input type="text" placeholder="add user" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Created on</label>
                <input type="text" placeholder="add date" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Email</label>
                <input type="text" placeholder="add email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Status</label>
                <input type="text" placeholder="add status" value={status} onChange={(e) => setStatus(e.target.value)} />
            </div>
            <input type="submit" className="btn btn-block" value="Save User" />
        </form>
    )
}
export default AddTask;