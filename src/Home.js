import React from 'react'
import {auth} from './firebase';

const Home = ({presentUser}) => {
    return (
        <div>
           <h1> Welcome {presentUser.email} to dashboard</h1>
           <button className="btn btn-primary" onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default Home
