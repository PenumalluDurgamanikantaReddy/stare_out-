import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav,  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { styled } from '@mui/material/styles';
import Login from './components/Login';
import { storeActions } from './store/ReduxStore';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import Popup from './components/Popup'
import Edit from "./components/Edit"
import { useHistory } from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const Navs = () => {


  const Addbutton=useSelector((state)=>{return state.store.additembuttonHandler})
  const Loginbutton=useSelector((state)=>{return state.store.loginhandlerbutton})
  const Editbutton=useSelector((state)=>{return state.store.editPopup})
  const loginstatus=useSelector((state)=>{return state.store.locallogin})

const history=useHistory()
const dispatch=useDispatch()


const loggedin=localStorage.getItem("loggedIn")
const loggedmail=localStorage.getItem("loggedemail")

useEffect(()=>{
    
  if(loggedin){
    if(loggedmail){
history.push(`/notes/${loggedmail}`)
    }
    
  }
},[])


    const showAddbuttonhandler=()=>{

        dispatch(storeActions.showadditem())
      }

        const showLoginpopup=()=>{
        console.log(loggedmail,loggedin)
        if(loggedin){
           localStorage.removeItem("loggedIn",false)
          localStorage.removeItem("loggedemail","")
          localStorage.setItem("userloggedout",true)
          history.push("/home")
        }else{
          console.log("loginfrm")
          
        }
        if(loggedin){
         let counter = 0;
    const interval = setInterval(() => {
     counter++;
     dispatch(storeActions.showLoginpopup())
     if (counter === 2) {
      clearInterval(interval);
    } 
}, 10);
       }else{
        dispatch(storeActions.showLoginpopup())
       }
       
 }
 const Logout=styled(("div"))(({theme})=>({

    left:"160%",
    position:"relative",
    [theme.breakpoints.down("md")] : {
        left:"0%",
    position:"relative",
    },

    [theme.breakpoints.down("xl")] : {
        left:"0%",
    position:"relative",
 },
 [theme.breakpoints.down('sm')] : {
    left:"0%",
    position:"relative",
 },
 [theme.breakpoints.down("xs")] : {
    left:"100%",
        position:"relative",
 },
  }))


return ( 
  <div >
    <Navbar bg="dark" variant="dark" expand="lg"  >
    <Navbar.Brand href="#">  <EditNoteIcon style={{color:"#white",width:"6rem",}} />My Notes</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mr-auto my-2 my-lg-0"
     
        navbarScroll
        style={{justifyContent:"center",alignItems:"center",maxHeight: '200px' }}
      >
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#"><AccountCircleIcon/>{localStorage.getItem("loggedemail")}</Nav.Link>
        <Nav.Link href="#"><button class="btn btn-primary" type="button" onClick={showLoginpopup}> 
        {loggedin && "Logout" }  
        {!loggedin && "Login" } 
        {loggedin && <LogoutIcon />}  
        {!loggedin && <LoginIcon/> }  
      </button></Nav.Link>
      {loggedin || loginstatus ? (
        <Logout>
          <Nav.Link href="#">
            <button class="btn btn-primary" type="button" onClick={showAddbuttonhandler}>
              <AddIcon />Add Item
            </button>
          </Nav.Link>
        </Logout>
      ) : null}

      </Nav>
    </Navbar.Collapse>
  </Navbar>

{Addbutton &&
      <Popup showModal={Addbutton}  />
      }
      {Loginbutton &&
      <Login showModal={Loginbutton}     />
      }

{ Editbutton&&
  <Edit showModal={Editbutton}    />
}

</div>
  );
};

export default Navs;
