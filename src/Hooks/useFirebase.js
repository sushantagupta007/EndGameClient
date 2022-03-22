import {
  GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, FacebookAuthProvider,
  createUserWithEmailAndPassword, updateProfile, sendEmailVerification, updatePassword,
  signInWithEmailAndPassword, sendPasswordResetEmail, getIdToken
} from "firebase/auth";

import { useState, useEffect } from 'react';
import firebaseInitialization from './../Firebase/init';




firebaseInitialization()
const auth = getAuth();



const googleProvider = new GoogleAuthProvider();


const useFirebase = () => {
  const [newUser, setNewUser] = useState(null)
  const [loggedUser,setLoggedUser] = useState({})
  const [existingUser,setExistingUser] = useState({})
  const [errors, setError] = useState("")

  const [loading,setIsLoading] = useState(true); 

  const googleSign = (history) => {
      signInWithPopup(auth, googleProvider)
          .then((result) => {
              if(result){
                  console.log(result)
                setLoggedUser(result.user)
                  history.replace('/home')
              }
          }).catch((error) => {
              setError(error)
          });   
  }

  
  const logOut = (history) => {
      const auth = getAuth();
      signOut(auth).then(() => {
        setLoggedUser({})
      }).catch((error) => {
          setError(error)
      });
      history.replace('/home')
  }

  const verifyEmail = () => {
      sendEmailVerification(auth.currentUser)
          .then((result) => {
              setError(result)

          })
  }
  useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
          if (user) {
              getIdToken(user).then(idToken=>localStorage.setItem('idToken',idToken))
            setNewUser(user)
            setLoggedUser(user)
          } else {
         
          }
          setIsLoading(false)
      });
  },[])

  const userCreate = (name, email, password, phone, history) => {
      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              //User Create after registration
              const newUser = { email, displayName: name, phoneNumber: phone };
              
              verifyEmail();
        
              updateProfile(auth.currentUser, {
                  displayName: newUser.displayName,
              })
                  .then(() => {
                    
                  })
                  .catch((error) => {
                  });
              history.replace('/');
          })
          .catch((error) => {
              alert(error.message)
          })
  }

  const resetPassword = (email, history) => {
      sendPasswordResetEmail(auth, email)
          .then(() => {
              alert("Password Reset Email Sent")
          })
          .catch((error) => {
              setError(error)
          });

  }

  const signInUser = (email, password, history) => {
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              const user = userCredential.user;
              setLoggedUser(user)
              if (user) {
                  history.replace('/home')
              }
              console.log(user)
          })
          .catch((error) => {

          });
  }




  const updatePass = (newpassword, history) => {

      const user = auth.currentUser;
      const newPassword = newpassword

      updatePassword(user, newPassword).then(() => {
          if (newPassword) {
              alert("Password Update Successfully")
              history.replace('/signin')
          }
      }).catch((error) => {
          console.log(error)
      });
  }

  return ({
      googleSign,
      logOut,
    
      userCreate,
      resetPassword,
      signInUser,
      updatePass,
      newUser,
      errors,
      loading,
      existingUser,
      loggedUser

  })

}

export default useFirebase; 