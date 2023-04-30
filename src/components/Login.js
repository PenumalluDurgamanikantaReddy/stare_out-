import React, { useState,useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import './popup.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { storeActions } from '../store/ReduxStore';
import { useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth }  from "../firebase"
import { useHistory } from "react-router-dom"
import {  collection, } from 'firebase/firestore';
import db from '../firebase';
import { doc, setDoc } from "firebase/firestore"; 
import { onSnapshot } from "firebase/firestore";

function Popup({showModal,}) {

   
  const [createaccount,Setcreateaccount] = useState(false)

  const [existingmails,Setexistingmails] =useState([])

  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  })
  const [errorMsg, setErrorMsg] = useState("");
 const dispatch=useDispatch()
 const history=   useHistory()

const showAddbuttonhandler=()=>{
  dispatch(storeActions.showLoginpopup())
        }
  
        useEffect(() => {
          const channelsCollection = collection(db, "Users");
          const unsubscribe = onSnapshot(channelsCollection, (snapshot) => {
            Setexistingmails(snapshot.docs.map((doc) => (
              doc.id
             
            )))
      
          });
          return unsubscribe;
        }, []);

       
        
  const LoginHadler= async()=>{
if(createaccount===false){
  if (!values.name || !values.email || !values.pass) {
    setErrorMsg("Fill all fields");
    return;
  }
  setErrorMsg("");
 createUserWithEmailAndPassword(auth, values.email, values.pass)
    .then(async (res) => {
      Setcreateaccount(true)
      const user = res.user;
      await updateProfile(user, {
        displayName: values.name,
      });
     
    })
    .catch((err) => {
     
      setErrorMsg(err.message);
    });

}else{

signInWithEmailAndPassword(auth, values.email, values.pass)
  .then((userCredential) => {
 
    localStorage.setItem("loggedIn",true)
    localStorage.setItem("loggedemail",values.email)
 dispatch(storeActions.showLoginpopup())

dispatch(storeActions.userlogin())

    history.push(`/notes/${values.email}`)

    const usermail=userCredential.user.reloadUserInfo.email
  

    if(!existingmails.includes(usermail)){
      const response =  setDoc(doc(db, "Users", `${usermail}`), {
        name: usermail
      
      });
    }

   })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   
    alert(`${errorMessage}`)
  })

}
}




const ExisitngAccount=()=>{
  Setcreateaccount((prev)=>{
    return !prev
  })
}

  return (
    <>
      <Modal show={showModal} >
        <Modal.Header closeButton onClick={showAddbuttonhandler}>
          <Modal.Title>Add New Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
       
        {!createaccount&&
          <>
          <label for="exampleInputEmail1" class="form-label"> Enter Name</label>
        <input className='form-control mb-3' placeholder='Enter Name'    onChange={(event) =>
          setValues((prev) => ({ ...prev, name: event.target.value }))
        } />
        </>
        }

        <label for="exampleInputEmail1" class="form-label"> Email address</label>
         <input className='form-control mb-3' placeholder='Email address'   onChange={(event) =>
          setValues((prev) => ({ ...prev, email: event.target.value }))
        } />

            <label for="exampleInputEmail1" class="form-label"> Password</label>
            <input className='form-control mb-3' placeholder='Enter Password'
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
            />

        </Modal.Body>
      
        <Modal.Footer>
        <p style={createaccount?{left:"5%",position:"absolute",color:"green"}:{left:"4%",position:"absolute",color:"blue"}} onClick={ExisitngAccount}>
        {createaccount ? "Create New Account":"Exsiting User"}
        
      </p>
          <Button variant="success" onClick={LoginHadler}>
             {createaccount ? "Sign In" :"Sign Up"}  
          </Button>

        
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup;