import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './home.css'
import { useNavigate } from 'react-router-dom';


function Home({message}) {
  
  const navigate = useNavigate();

  const saveDetails = () => {
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    let email = document.getElementById('email');
    if(name.value==="")
    {
      name.focus();
    }
    else if(phone.value==="")
    {
      phone.focus();
    }
    else if(email.value==="")
    {
      email.focus();
    }
    
    else
    {
      let obj = {
      name: name.value,
      phone: phone.value,
      email: email.value
    }
    localStorage.setItem("user", JSON.stringify(obj));
    navigate('/main');
  }
  }

  return (
    <div className='form'>
      <h2>{message}</h2>
      <h1>Enter Your Details</h1>
      <div>
        <TextField fullWidth label="Enter your name" required id="name" variant="outlined" margin="normal" />
        <TextField fullWidth label="Enter your phone" required id="phone" variant="outlined" margin="normal" />
        <TextField fullWidth label="Enter your email" required id="email" variant="outlined" margin="normal" />
        <Button variant="contained" onClick={saveDetails}>Save</Button>
    </div>
    </div >
  )
}

export default Home