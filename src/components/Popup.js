import React, { useState,useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './popup.css'
import { Plus } from 'react-feather';
import 'bootstrap/dist/css/bootstrap.min.css'
import { storeActions } from '../store/ReduxStore';
import { useDispatch } from 'react-redux';
import { collection,addDoc,serverTimestamp } from 'firebase/firestore'
import db from '../firebase';


function Popup({showModal,}) {



  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [background, setBackground] = useState('#FFE898')
  const dispatch=useDispatch()

  const date = new Date();
  const dayOfMonth = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const options = { weekday: 'long' };
  const dayName = new Intl.DateTimeFormat('en-US', options).format(date);
  const datedata = `${dayName}, ${dayOfMonth}/${month}/${year}`;
  console.log(datedata)
  

const url = window.location.href;
const email = url.split('/').pop();

const [time, setTime] = useState(new Date().toLocaleTimeString());
  
    localStorage.setItem("time",time)

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);



  const handleCancel = () =>{
    dispatch(storeActions.showadditem())
  }

  const handleColor = (bg)=>{
    setBackground(bg)
    
  }

  const showAddbuttonhandler=()=>{

        dispatch(storeActions.showadditem())
      }

const addNoteHandler=()=>{
  const getchannel=collection(db,"Users",email,"Notes")
  addDoc(getchannel,{
     noteTile:title,
     userNotes:content,
     usermail:email,
     theme:background,
     timestamp:serverTimestamp(),
    date:datedata,
    time:time
  })
  dispatch(storeActions.showadditem())
console.log(email)
}



const styles={justifyContent:"start",alignItems:"center",display:"flex",gap:"10%"}



  return (
    <>
      <Modal show={showModal} >
        <Modal.Header closeButton onClick={showAddbuttonhandler}>
          <Modal.Title>Add New Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input className='form-control mb-3' placeholder='Enter title' value={title}  onChange={(e)=>setTitle(e.target.value)} />
          
            <textarea className='form-control' style={{height:'180px'}} placeholder='Enter notes....' value={content} onChange={(e)=>setContent(e.target.value)} ></textarea>
      
        <DropdownButton id="dropdown-basic-button" title="Select Theme">
      <Dropdown.Item ><div className='d-flex' onClick={()=>handleColor('#54BAB9')} style={styles}><div className='circle' style={{backgroundColor:'#54BAB9',}}></div><strong>theme</strong> </div> </Dropdown.Item>
      <Dropdown.Item ><div className='d-flex' onClick={()=>handleColor('#FFE898')} style={styles}  ><div className='circle' style={{backgroundColor:'#FFE898'}}></div>theme </div></Dropdown.Item>
      <Dropdown.Item ><div className='d-flex' onClick={()=>handleColor('#AfB4FF')} style={styles}  ><div className='circle' style={{backgroundColor:'#AfB4FF'}}></div> theme</div></Dropdown.Item>
      <Dropdown.Item ><div className='d-flex' onClick={()=>handleColor('#F9F5EB')} style={styles}  ><div className='circle' style={{backgroundColor:'#9ED2C6'}}></div> Default</div></Dropdown.Item>
    </DropdownButton>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addNoteHandler}>
            <Plus/> Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup;