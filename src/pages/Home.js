import React from 'react'
import { styled } from '@mui/material/styles';

function Home() {

  const Homee=styled(("div"))(({theme})=>({
    justifyContent:"center",
    alignItems:"center",
    display:"flex" ,
    marginTop:"10%",
 
    

 [theme.breakpoints.down('md')] : {
  justifyContent:"center",
  alignItems:"center",
  display:"flex" ,
  marginTop:"10%",
  marginLeft:"10%"
 },

 [theme.breakpoints.down("sm")] : {
  justifyContent:"center",
  alignItems:"center",
  display:"flex" ,
  marginTop:"40%",
  marginLeft:"10%"
 }, 
}))

  return (
    
    <Homee>
    <h1 class="display-1">Please Login to Create Your Own notes</h1><p></p></Homee>
  )
}

export default Home;