import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'

async function loginUser(cred) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(cred)
    })
    .then(data => data.json())
}

export default function Auth(props) {
    const options=[
        {value:'What is your pet name?',label:'What is your pet name?'},
        {value:'What is your birth date?',label:'What is your birth date?'},
        {value:'What is your friend name',label:'What is your friend name'}
    ];
    let [authMode,setAuthMode] = useState("signin");
    const changeAuthMode=()=>{
        setAuthMode(authMode === "signin" ? "signup" :"signin")
    }

    const navigate = useNavigate();
    const navigateToDashboard = () => navigate('/dashboard');

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
        username,
        password
    });
    if ('fname' in response) {
        sessionStorage.setItem('username', response['fname']);
        navigateToDashboard();
    } else {
        alert('Incorrect username or password');
        setUserName('');
        setPassword('');
    }
    }

    const bank=[
        {value:'WellsFargo',label:'WellsFargo'},
        {value:'HDFC',label:'HDFC'},
        {value:'ICICI',label:'ICICI'},
        {
            value:'SBI',label:'SBI'
        }
    ]
    if(authMode === "signin"){
        return (
            <div className='Auth-form-Container' style={{alignContent:'center'}}>
                <form className='Auth-form' onSubmit={handleSubmit}>
                    <div className='Auth-form-content'>
                        <h3  className='Auth-form-title'>Sign In</h3>
                        <div className='text-center'>
                            Not registered yet?{" "}
                            <span className='link-primary' onClick={changeAuthMode}>
                                Sign Up
                            </span>
                        </div>
                        <div className='form-group mt-3'>
                            <label>User Name</label>
                            <input type="text"
                            className="form-control mt-1"
                            placeholder='Enter username'
                            value={username}
                            onChange={e => setUserName(e.target.value)}/>
                        </div>
                        <div className='form-group mt-3'>
                            <label>Password</label>
                            <input type="password"
                            className="form-control mt-1"
                            placeholder='Enter password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div className='d-grid gap-2 mt-3'>
                            <button type='submit' className='btn btn-primary' disabled={!username || !password}>
                                Signin
                            </button>
                        </div>
                        <p className='forgot-password text-right mt-2'>
                            <a href='#'>Forgot password</a>
                        </p>
                    </div>
                </form>
            </div>
          )
    }
    return (
        <div className='Auth-form-Container'>
            <form className='Auth-form'>
                <div className='Auth-form-content'>
                    <h3  className='Auth-form-title'>Register</h3>
                    <div className='text-center'>
                       Already Registered{" "}
                        <span className='link-primary' onClick={changeAuthMode}>
                            Sign In
                        </span>
                    </div>
                    <div className='form-group mt-3'>
                        <label>Name</label>
                        <input type="text"
                        className="form-control mt-1"
                        placeholder='Enter name'/>
                    </div>
                    <div className='form-group mt-3'>
                        <label>Date of birth</label>
                        <input type="date"
                        className="form-control mt-1"
                       defaultValue="2001-01-01"/>
                    </div>
                    <div className='form-group mt-3'>
                        <label>Email Id</label>
                        <input type="email"
                        className="form-control mt-1"
                        placeholder='email@gmail.com'/>
                    </div>
                    <div className='form-group mt-3'>
                        <label>Mobile Number</label>
                        <input type="text"
                        className="form-control mt-1"
                        placeholder='Enter mobile num'/>
                    </div>
                    <div className='form-group mt-3'>
                        <label>User Name</label>
                        <input type="text"
                        className="form-control mt-1"
                        placeholder='Enter username'/>
                    </div>
                    <div className='form-group mt-3'>
                        <label>Password</label>
                        <input type="password"
                        className="form-control mt-1"
                        placeholder='Enter password'/>
                    </div>
                    <div className='form-group mt-3'>
                        <label>Confirm Password</label>
                        <input type="password"
                        className="form-control mt-1"
                        placeholder='Confirm password'/>
                    </div>
                    <div className='form-group mt-3'>
                        <label>Address</label><br/>
                        <textarea placeholder='Address here' className="form-control mt-1"></textarea>
                    </div>
                    <div className='form-group mt-3'>
                        <label>Card Type</label><br/>
                        <input type="radio"
                        value="Gold" name="Gold"/>Gold
                        <input type="radio"
                        value="Titanium" name="TItanium"/>Titanium
                    </div>
                    <div className='form-group mt-3'>
                        <label>Select Bank</label>
                        <Select options={bank}/>
                    </div>
                    <div className='form-group mt-3'>
                        <label>Savings account number</label>
                        <input type="text"
                        className="form-control mt-1"
                        placeholder='Enter account number'/>
                    </div>
                    <div className='form-group mt-3'>
                        <label>IFSC code</label>
                        <input type="text"
                        className="form-control mt-1"
                        placeholder='Enter ifsc code'/>
                    </div>
                    <div className='d-grid gap-2 mt-3'>
                        <button type='submit' className='btn btn-primary' onClick={navigateToDashboard}>
                            Register
                        </button>
                    </div>
                    <div className='d-grid gap-2 mt-3'>
                        <button type='reset' className='btn btn-primary'>
                            Reset
                        </button>
                    </div>
                </div>
            </form>
        </div>
      )  
}

