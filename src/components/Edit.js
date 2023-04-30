import React, { useState,useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

import './popup.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { storeActions } from '../store/ReduxStore';
import { useDispatch } from 'react-redux';
import { collection,doc,serverTimestamp,updateDoc } from 'firebase/firestore'
import db from '../firebase';
import { useSelector } from 'react-redux';
import BorderColorIcon from '@mui/icons-material/BorderColor';


function Editpop({showModal,}) {

const editNote=useSelector((state)=>{return state.store.editNote})
const [title, setTitle] = useState(editNote.title)
const [content, setContent] = useState(editNote.notes)
const [background, setBackground] = useState(`${editNote.theme}`)
const id=editNote.id
const url = window.location.href;
const email = url.split('/').pop();
const dispatch=useDispatch()


const date = new Date();
const dayOfMonth = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const options = { weekday: 'long' };
const dayName = new Intl.DateTimeFormat('en-US', options).format(date);
const datedata = `${dayName}, ${dayOfMonth}/${month}/${year}`;
console.log(datedata)
const [time, setTime] = useState(new Date().toLocaleTimeString());

useEffect(() => {
  const interval = setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return () => clearInterval(interval);
}, []);


const handleCancel = () =>{
    dispatch(storeActions.editNoteButton())
  }


const TitleHandler=(event)=>{
if(event.target.value){
  setTitle(event.target.value)
  
}else{
    console.log(editNote.title)
}
}

const NoteHandler=(event)=>{
  if(event.target.value){
    setContent(event.target.value)
    
  }else{
      console.log(editNote.title)
  }
  }
const addNoteHandler=()=>{
  const getchannel = collection(db, "Users", email, "Notes");
  const docRef = doc(getchannel, id);
  updateDoc(docRef,{
     noteTile:title,
     userNotes:content,
     usermail:email,
     theme:background,
     timestamp:serverTimestamp(),
     date:datedata,
     time:time
      
  })
  dispatch(storeActions.editNoteButton())
}


return (
    <>
      <Modal show={showModal} >
        <Modal.Header closeButton onClick={handleCancel} style={{backgroundColor:`${editNote.theme}`}}>
          <Modal.Title>Edit Your Note</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:`${editNote.theme}`}}>
            <input className='form-control mb-3' style={{fontWeight:"bold",   backgroundColor: "rgba(255, 255, 255, 0.5)", }} placeholder='Enter title'  defaultValue={editNote.title} onChange={TitleHandler} />
          
            <textarea className='form-control'  defaultValue={editNote.notes} style={{height:'180px', backgroundColor: "rgba(255, 255, 255, 0.5)",}} placeholder='Enter notes....'  onChange={NoteHandler} ></textarea>
     
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:`${editNote.theme}`}}>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addNoteHandler}>
            <BorderColorIcon/> Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Editpop;