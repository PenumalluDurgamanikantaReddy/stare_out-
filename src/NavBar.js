import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import { styled } from '@mui/material/styles';

import Typography from '@mui/material/Typography';
import { Collapse,dropdwon,offcanvas,Container } from 'bootstrap';


function Navbar() {

    const Logo=styled("div")(({ theme })=>({
        width:"auto",
        display:"flex",
        alignItems:"flex-start",


 
     }))
    //  const LogoImg = styled('img')({
    //     width: '13rem',
    //     height: '5%',
    //     padding: '15px',

    //   });
    const LogoImg = styled("div")(({ theme }) => ({
        padding: "15px",
        width: "13rem",
      
        [theme.breakpoints.down("xl")]: {
          width: "8rem",
          height: "auto",
        },
 
      }));


      const StyledTypography = styled(Typography)({
        flexGrow: 1,
        "&:hover":{
      
             color:"white",
             cursor:"pointer"
          },
      });
    

  return (
    <div style={{position:"fixed",top:"0",left:"0",right:"0",zIndex:99999}}>

    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark" >

    <div class="container-fluid">
      
     {/* <button class="navbar-toggler" ml-auto type="button" data-bs-toggle="offcanvas" ata-bs-toggle="offcanvas" 
        data-bs-target="#offcanvasExample" aria-controls="navbarSupportedContent" aria-expanded="false"
        data-bs-placement="end" aria-label="Toggle navigation">        <span class="navbar-toggler-icon"></span>
  </button>*/}
      <button class="navbar-toggler" style={{left:"80%",position:"relative"}}  type="button" data-bs-toggle="offcanvas" ata-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
       aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>


      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{fontFamily:"montserrat",fontWeight:"400",
        display:"flex",margin:"0px auto",justifyContent:"space-between",  width: "90%"}}>
          <li class="nav-item">
         
       <StyledTypography variant="h6" component="div" style={{color:"white"}} >
     
        </StyledTypography>
        </li>
        <li class="nav-item">
         

         <StyledTypography variant="h6" component="div" style={{color:"white"}} >
        HOME
          </StyledTypography>
          
          </li>
          
          <li class="nav-item">
                   

      <StyledTypography variant="h6" component="div" style={{color:"white"}} >
      About us
       </StyledTypography>
          
        </li>
        <li class="nav-item">
        <StyledTypography variant="h6" component="div" style={{color:"white"}} >
        Services
         </StyledTypography>
      </li>
      <li class="nav-item">
      <StyledTypography variant="h6" component="div" style={{color:"white"}} >
      Technology
       </StyledTypography>

    </li>
    <li class="nav-item">
    <StyledTypography variant="h6" component="div" style={{color:"white"}} >
    Careers
     </StyledTypography>

  </li>
  <li class="nav-item">
  <StyledTypography variant="h6" component="div" style={{color:"white"}} >
  Blogs
   </StyledTypography>
</li>
<li class="nav-item">
<StyledTypography variant="h6" component="div" style={{color:"white"}} >
Our Works
 </StyledTypography>


</li>  
<li class="nav-item">
<StyledTypography variant="h6" component="div" style={{color:"white"}} >
Contact Us
 </StyledTypography>

</li>     
        
        </ul>
        
      </div>
    </div>
  </nav>


<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{backgroundColor:"black"}}>
  <div class="offcanvas-header">


    <div type="button" data-bs-dismiss="offcanvas" aria-label="Close"
     style={{color:"gray",backgroundColor:"black",fontSize:"bold",fontWeight:"bold",width:"10px"}}>X</div>
  </div>
  <div class="offcanvas-body">
  
    <div class="dropdown mt-3" style={{color:"black",backgroundColor:"gray"}} >
<ul style={{listStyle:"none",backgroundColor:"black",textAlign:"left",
color:"gray",alignItems:"left",justifyItems:"left",fontWeight:"500",display:"flex",flexDirection:"column",gap:"1rem"}}>

<li >Home</li>

<li >
   About us</li>

   <li >  Services</li>

   <li> <a class="navbar-brand" href="#" >Technology</a></li>
   <li> <a class="navbar-brand" href="#" >Careers</a></li>
   <li> <a class="navbar-brand" href="#" >Blogs</a></li>
   <li> <a class="navbar-brand" href="#" >Our Works</a></li>
   <li >  Contact Us</li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar