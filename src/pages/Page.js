
import React,{useState,useEffect} from 'react'

import {
  collection,onSnapshot,doc,query,orderBy,} from 'firebase/firestore'
import db from '../firebase';
import Notes from "../note/Notes"
import { useDispatch } from 'react-redux';
import { storeActions } from "../store/ReduxStore"

import { styled } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
const Page = () => {
  
    const [notes,Setnotes]=useState([])
    const [notesDetailes,SetnotesDetailes]=useState([])
    const dispatch=useDispatch()

    const url = window.location.href;
    const email = url.split('/').pop();



    useEffect(() => {

      if (email) {
        const data = doc(db, "Users", email);
        const unsubscribe = onSnapshot(data, (doc) => {
          SetnotesDetailes(doc.data());
        });
      
    }
const data= collection(db,"Users",email,"Notes")

const ascendingmessages=query(data,orderBy("timestamp","asc"))

const holdata=onSnapshot(ascendingmessages,((queysnapshot)=>{
const msgsdata=queysnapshot.docs.map((doc)=> { 


  return  {data:doc.data(),id:doc._key.path.segments[8] }
})


Setnotes(msgsdata) 
})

)


}, [email]);

const Cards = styled(("div"))(({ theme }) => ({
  display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gridTemplateRows: 'repeat(2, 1fr)', 
        gap: '0.5rem',
        justifyContent: "center",
        alignItems: "center",
        marginTop:"5rem",
        alignContent:"center",
        justifyItems:"center",
        [theme.breakpoints.down("md")]: {
            display:"flex",
          flexDirection: "column",
          alignItems: 'center',
          gap: '1rem',
        },

}));
const EmptyNote=styled(("div"))(({theme})=>({
  justifyContent:"center",
  alignItems:"center",
  display:"flex" ,
marginLeft:"80%",
width:"150%",
  

[theme.breakpoints.down('md')] : {
justifyContent:"center",
alignItems:"center",
display:"flex" ,
marginTop:"10%",
marginLeft:"10%",
width:"100%",
},

[theme.breakpoints.down("sm")] : {
justifyContent:"center",
alignItems:"center",
display:"flex" ,
marginTop:"40%",
marginLeft:"10%",
width:"100%",
}, 
}))
return (

 <Cards >
   {
    notes.length ===0 ?
   
   <EmptyNote> <h1 class="display-4">Your Notes Is Empty Click Add Item To Add Notes</h1></EmptyNote>
   :

          notes.map((each,i)=>(
            <Notes key={i} title={each.data.noteTile} notes={each.data.userNotes} id={each.id}
            email={each.data.usermail} time={each.data.time } bgtheme={each.data.theme} date={each.data.date}/>
        ))
    }
    </Cards>
  

  )
}

export default Page