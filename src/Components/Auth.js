import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Auth.css"

async function loginUser(cred) {
    return fetch('http://localhost:8080/cfms/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(cred)
    })
    .then(data => data.json())
}

async function registerUser(details) {
    return fetch('http://localhost:8080/cfms/register', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(details)
    })
    .then(data => data.json())
}

export default function Auth(props) {
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

    const handleRegister = async e => {
        e.preventDefault();
        const response = await registerUser(regForm);
        if (response['message'] === 'success') {
            setRegForm(regDetails);
            setConfirmPassword('');
            setUserName('');
            setPassword('');
            alert('User succesfully registered');
            changeAuthMode();
        } else {
            alert('Something went wrong');
        }
    }

    const regDetails = {
        firstName: '',
        lastName: '',
        dob: '2001-01-01',
        email: '',
        phone: '',
        userName: '',
        password: '',
        address: '',
        cardType: '',
        bank: 'Wells Fargo',
        accountNumber: '',
        ifscCode: ''
    }

    const [confirmPassword, setConfirmPassword] = useState('');

    const [regForm, setRegForm] = useState(regDetails);

    const resetForm = () => {
        setRegForm(regDetails);
        setConfirmPassword('');
    }

    const isPasswordSame = () => {
        return regForm.password === confirmPassword;
    }

    const disableSubmit = () => {
        return !regForm.accountNumber || !regForm.ifscCode || !regForm.firstName || !regForm.dob || !regForm.lastName
            || !regForm.email || !regForm.phone || !regForm.userName || !regForm.password || !confirmPassword || !regForm.cardType
            || !regForm.bank
    }

    const bank=[
        {value:'Wells Fargo',label:'Wells Fargo'},
        {value:'HDFC',label:'HDFC'},
        {value:'ICICI',label:'ICICI'},
        {value:'SBI',label:'SBI'}
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
                    </div>
                </form>
            </div>
          )
    }
    return (
        <div className='Auth-form-Container'>
            <form className='Auth-form' onSubmit={handleRegister}>
                <div className='Auth-form-content'>
                    <h3  className='Auth-form-title'>Register</h3>
                    <div className='text-center'>
                       Already Registered{" "}
                        <span className='link-primary' onClick={changeAuthMode}>
                            Sign In
                        </span>
                    </div>
                    <div className='form-group mt-3'>
                        <label>First Name</label>
                        <input type="text"
                        className="form-control mt-1"
                        placeholder='Enter first name'
                        value={regForm.firstName}
                        onChange={e => setRegForm(prev => ({...prev, firstName:e.target.value}))}/>
                    </div>
                    <div className='form-group mt-3'>
                        <label>Last Name</label>
                        <input type="text"
                        className="form-control mt-1"
                        placeholder='Enter last name'
                        value={regForm.lastName}
                        onChange={e => setRegForm(prev => ({...prev, lastName:e.target.value}))}/>
                    </div>
                    <div className='form-group mt-3'>
                        <label>Date of birth</label>
                        <input type="date"
                        className="form-control mt-1"
                        defaultValue="2001-01-01"
                        value={regForm.dob}
                        onChange={e => setRegForm(prev => ({...prev, dob:e.target.value}))}/>
                    </div>
                    <div className='form-group mt-3'>
                        <label>Email Id</label>
                        <input type="email"
                        className="form-control mt-1"
                        placeholder='email@gmail.com'
                        value={regForm.email}
                        onChange={e => setRegForm(prev => ({...prev, email:e.target.value}))}/>
                    </div>
                    <div className='form-group mt-3'>
                        <label>Mobile Number</label>
                        <input type="text"
                        className="form-control mt-1"
                        placeholder='Enter mobile num'
                        value={regForm.phone}
                        onChange={e => setRegForm(prev => ({...prev, phone:e.target.value}))}/>
                    </div>
                    <div className='form-group mt-3'>
                        <label>User Name</label>
                        <input type="text"
                        className="form-control mt-1"
                        placeholder='Enter username'
                        value={regForm.userName}
                        onChange={e => setRegForm(prev => ({...prev, userName:e.target.value}))}/>
                    </div>
                    <div className='form-group mt-3'>
                        <label>Password</label>
                        <input type="password"
                        className="form-control mt-1"
                        placeholder='Enter password'
                        value={regForm.password}
                        onChange={e => setRegForm(prev => ({...prev, password:e.target.value}))}/>
                    </div>
                    <div className='form-group mt-3'>
                        <label>Confirm Password</label>
                        <input type="password"
                        className="form-control mt-1"
                        placeholder='Confirm password'
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}/>
                    </div>
                    {!isPasswordSame() && <div>Passwords do not match</div>}
                    <div className='form-group mt-3'>
                        <label>Address</label><br/>
                        <textarea placeholder='Address here' className="form-control mt-1"
                        value={regForm.address}
                        onChange={e => setRegForm(prev => ({...prev, address:e.target.value}))}></textarea>
                    </div>
                    <div className='form-group mt-3'>
                        <label>Card Type</label><br/>
                        <div className='options'>
                            <label>
                                <input type="radio"
                                value="Gold"
                                name="Gold"
                                checked={regForm.cardType === "Gold"}
                                onChange={e => setRegForm(prev => ({...prev, cardType:e.target.value}))}/>  Gold
                            </label>
                            <label>
                                <input type="radio"
                                value="Titanium"
                                name="Titanium"
                                checked={regForm.cardType === "Titanium"}
                                onChange={e => setRegForm(prev => ({...prev, cardType:e.target.value}))}/>  Titanium
                            </label>
                        </div>
                    </div>
                    <div className='form-group mt-3 select-bar'>
                        <label>Select Bank</label>
                        <div className='select-br'>
                            <select
                            options={bank}
                            value={regForm.bank}
                            onChange={e => setRegForm(prev => ({...prev, bank:e.target.value}))}>
                                {bank.map(item => (
                                    <option key={item.value} value={item.value}>
                                    {item.label}
                                    </option>
                                ))}
                            </select>   
                        </div>
                    </div>
                    <div className='form-group mt-3'>
                        <label>Savings account number</label>
                        <input type="text"
                        className="form-control mt-1"
                        placeholder='Enter account number'
                        value={regForm.accountNumber}
                        onChange={e => setRegForm(prev => ({...prev, accountNumber:e.target.value}))}/>
                    </div>
                    <div className='form-group mt-3'>
                        <label>IFSC code</label>
                        <input type="text"
                        className="form-control mt-1"
                        placeholder='Enter ifsc code'
                        value={regForm.ifscCode}
                        onChange={e => setRegForm(prev => ({...prev, ifscCode:e.target.value}))}/>
                    </div>
                    <div className='d-grid gap-2 mt-3'>
                        <button type='submit' className='btn btn-primary' disabled={disableSubmit() || !isPasswordSame()}>
                            Register
                        </button>
                    </div>
                    <div className='d-grid gap-2 mt-3'>
                        <button type='button' className='btn btn-secondary' onClick={resetForm}>
                            Reset
                        </button>
                    </div>
                </div>
            </form>
        </div>
      )  
}

