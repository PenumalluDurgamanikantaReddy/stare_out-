import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bootstrap';
import Page from './Page';
import { styled } from '@mui/material/styles';

function App() {
  const App  = styled('div')({
    backgroundColor: '#14161a',
    color:"white",
    minHeight:"100vh"
  });
  return (
    <App >
    <Navbar />
<Page/>
    </App>
  );
}

export default App;
