import '../../App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = ({ setUser }) => {
    const [username, setUsername]=useState('')
    const navigate = useNavigate()

    const handleChange = (e)=>{
        setUsername(e.target.value)
    }

    const handleSubmit = e=> {
        e.preventDefault()
        setUser(username)
        navigate('/')

    }
   
    return (
        <form className="mx-auto border bg-white p-5" onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="userHelp" 
            value={username} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">LOGIN</button>
        </form>
    );
}

export default Login;
