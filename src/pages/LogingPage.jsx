import { GoogleAuthProvider, signInWithPopup, signOut, TwitterAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase.init';
import { GithubAuthProvider } from 'firebase/auth';


const provider = new GoogleAuthProvider();

const gitHubProvider = new GithubAuthProvider();

const twitterProvider = new TwitterAuthProvider();


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
  
  const handleGitHubSignIn = () => {
    console.log('github btn clicked');
    signInWithPopup(auth, gitHubProvider)
      .then(result => {
        console.log(result.user);
        setUser(result.user)
    })
  }

  const handleTwitterSignIn = () => {
    console.log('twitter clicked');
    signInWithPopup(auth, twitterProvider)
      .then(result => {
        console.log(result);
        setUser(result.user)
      })
    .catch(error => console.log('ERROR',error))
  }
    
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
            {user.email ? (
              <div>
                {" "}
                <p>Email: {user.email}</p>
              </div>
            ) : (
              <div>
                {" "}
                <p>Email: {user.providerData[0].email}</p>
              </div>
            )}

            <img src={user.photoURL} alt="" />
          </div>
        )}

        {user ? (
          <div>
            <button onClick={handleLogOut} className="btn btn-primary mt-8">
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex gap-4 items-center justify-center h-[40vh]">
            <button
              onClick={handleGoogleSignIn}
              className="btn mt-8 btn-primary"
            >
              Login Google
            </button>
            <button
              onClick={handleGitHubSignIn}
              className="btn mt-8 btn-primary"
            >
              Login GitHub
            </button>
            <button
              onClick={handleTwitterSignIn}
              className="btn mt-8 btn-primary"
            >
              Login Twitter
            </button>
          </div>
        )}
      </div>
    );
};

export default LogingPage;