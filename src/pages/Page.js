
import React,{useState,useEffect} from 'react'



import Notes from "../note/Notes"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { storeActions } from "../store/ReduxStore"


const Page = () => {
    const [data, setData] = useState([])
    const Addbutton=useSelector((state)=>{return state.store.additembuttonHandler})
    const Loginbutton=useSelector((state)=>{return state.store.loginhandlerbutton})
    const dispatch=useDispatch()



    useEffect(()=>{
     
          dispatch(storeActions.showLoginpopup())
        setData(JSON.parse(localStorage.getItem('myNotes')) || [])
        

    },[])

    const [showModal, setShowModal] = useState(false)

    const refresher = () =>{
        setData(JSON.parse(localStorage.getItem('myNotes')) || [])
    }


  return (

 
    



    <div className='row justify-content-between mx-0 p-5'>
 
        {
         data.map((item,i)=>(
            <Notes key={i}/>
        ))
    }
    </div>
  

  )
}

export default Page