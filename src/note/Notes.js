import DeleteIcon from '@mui/icons-material/Delete';
import './note.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { storeActions } from "../store/ReduxStore"
import { collection,doc,deleteDoc} from 'firebase/firestore'
import db from '../firebase';

const Note = ({ title,time,bgtheme,email,notes,id,date }) => {
  const dispatch=useDispatch()



  const Card=styled(("div"))(({theme})=>({
         backgroundColor:`${bgtheme}`,
         borderRadius:"10px",
         display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        whiteSpace:"pre-wrap",
         color:"#333333",
        width: "80%",
       minHeight:"4rem",
        padding:"2rem",
        [theme.breakpoints.down("md")] : {
            maxWidth:"100%",
        },
       [theme.breakpoints.down("xl")] : {
          width: "10  0%",
        },
       [theme.breakpoints.down('sm')] : {
        maxWidth:"100%",
        },
        [theme.breakpoints.down("xs")] : {
        maxWidth:"100%",
     },
      }))


   
   const ShoweditHandler=()=>{
    dispatch(storeActions.editNoteButton({title:title,theme:bgtheme,notes:notes,id:id}))
   }

const deleteNoteHandler=()=>{
  const getchannel = collection(db, "Users", email, "Notes");
  const docRef = doc(getchannel, id);
  deleteDoc(docRef);

}

	return (
		<Card >
			<span><strong>{title}</strong></span>
      <p>{notes}  </p>
			<div className='note-footer'>
            <span><small>{date}</small> 	<small>{time}</small></span>
			<EditIcon onClick={ShoweditHandler}/>	<DeleteIcon
					onClick={deleteNoteHandler}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</Card>
	);
};

export default Note;


