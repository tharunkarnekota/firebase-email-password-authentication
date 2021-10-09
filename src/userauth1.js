import React from 'react'

const UserAuth = () => {
        const [data,setData] = useState({
            email:"",
            password:""
        })
        const {email,password} = data;
        const changeHandler = e =>{
            setData({...data,[e.target.name]:e.target.value})
        }
        const signIn = e =>{
            e.preventDefault();
        }
        const signUp = e =>{
            e.preventDefault();
        }
    return (
        <div>
            <ceneter>
                <form autoComplete="off">
                    <h1>Authentication</h1>
                    <input type="email" name="email" value={email} placeholder="Email" onChange={changeHandler}/><br/>
                    <input type="password" name="password" value={password} placeholder="password" onChange={changeHandler}/><br /><br />
                    <button onClick={signIn}>Sign In</button> &nbsp;&nbsp;
                    <button onClick={signUp}>Sign Up</button>
                </form>
            </ceneter>
        </div>
    )
}

export default UserAuth
