
import './App.css';
import Page from './pages/Page';
import { styled } from '@mui/material/styles';
import React,{useState,} from 'react'
import Home from './pages/Home';
import Navbaar from "./Navbaar"
import { BrowserRouter,Route,Redirect } from 'react-router-dom';

function App() {
  const [data, setData] = useState([])




 
  const App  = styled('div')({
    backgroundColor: '#14161a',
    color:"white",
    minHeight:"100vh"
  });
  return (
    <BrowserRouter>
    <App >
   <Navbaar data={data} setData={setData}/>
    
    
      <Route path="/">
      <Redirect to="/home"></Redirect>
    </Route>
      <Route path='/home'>
      <Home/>
    </Route>

      <Route path='/notes/:useremail' exact>
        <Page/>
      </Route>
    
     
    </App>
    </BrowserRouter>
  );
}

export default App;
