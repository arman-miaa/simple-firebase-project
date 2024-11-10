import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase.init';


const provider = new GoogleAuthProvider();


const LogingPage = () => {

    const [user,setUser] = useState('')

const handleGoogleSignIn = (e) => {
  e.preventDefault();
  signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result.user);
        setUser(result.user)
    })
    .catch((error) => console.log("ERROR", error));
    };
    
    const handleLogOut = () => {
        signOut(auth)
            .then(result => {
            setUser(result)
            })
        .catch(eroor => setUser("ERROR",eroor))
    }



    return (
      <div className="flex flex-col justify-center items-center">
        {user && (
          <div>
            <h1>Name: {user.displayName}</h1>
            <p>Email: {user.email}</p>
            <img src={user.photoURL} alt="" />
          </div>
        )}

        {user ? (
          <button  onClick={handleLogOut} className='btn btn-primary mt-8'>Log Out</button>
        ) : (
          <button onClick={handleGoogleSignIn} className="btn mt-8 btn-primary">
            Login
          </button>
        )}
      </div>
    );
};

export default LogingPage;