import { Box, Button, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jsonUrls } from '../../apiUrl/url';

export const Login = () => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${jsonUrls.user}?email=${email}`);
      if (res.data.length === 0) {
        setError("User not found. Please signup first.");
      } else {
        const user = res.data[0];
        if (user.password === password) {
          navigate("/favourite");
        } else {
          setError("Invalid email");
        }
      }
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <Box bor>
      <form onSubmit={handleSubmit}>
        <Input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email' required/>
        <Input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password.....' required/>
        <Button type="submit">Login</Button>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <p>Don't have an account? <Button onClick={handleSignup}>Signup</Button></p>
      </form>
    </Box>
  )
}