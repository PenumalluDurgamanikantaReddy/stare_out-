import { MdDeleteForever } from 'react-icons/md';
import DeleteIcon from '@mui/icons-material/Delete';
import './note.css'
import {Rating} from 'react-simple-star-rating'
import { Check, PenTool, Trash } from 'react-feather'
import 'bootstrap/dist/css/bootstrap.min.css'
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';


const Note = ({ id, text, date, handleDeleteNote }) => {


      const Card=styled(("div"))(({theme})=>({
        backgroundColor:"#fef68a",
        borderRadius:"10px",
        padding:"1rem",
        minheight:"170px",
maxWidth:"30%",
display:"flex",
flexDirection:"column",
justifyContent:"space-between",
whiteSpace:"pre-wrap",
color:"#333333",
     
        [theme.breakpoints.down("md")] : {
            maxWidth:"100%",
        },
    
        [theme.breakpoints.down("xl")] : {
            maxWidth:"50%",
     },
     [theme.breakpoints.down('sm')] : {
        maxWidth:"100%",
     },
     [theme.breakpoints.down("xs")] : {
        maxWidth:"100%",
     },
      }))





	return (
		<Card >
			<span><strong>Eaing</strong></span>
      <p>Lorem Ipsum is simply dummy text of the
         printing and typesetting industry. 
         Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s,
         when an unknown printer took a galley of
        type and scrambled it to make a type specimen
        book. It has survived not only five centuries,
        but also the leap into electronic typesetting,
          remaining essentially unchanged.   </p>
			<div className='note-footer'>
            <span><small>Sun</small> <small>10 Mar 2023</small>	<small>22:10 PM</small></span>
			<EditIcon />	<DeleteIcon
					onClick={() => handleDeleteNote()}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</Card>
	);
};

export default Note;