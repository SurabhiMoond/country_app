import React, { useState } from 'react'
import { Button, Heading, Input } from '@chakra-ui/react';
import { jsonUrls } from '../../apiUrl/url';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      let res = await fetch(jsonUrls.user,{
        method : "POST",
        headers : {"Content-Type": "application/json"},
        body : JSON.stringify({name,email,password})
      });
      if(res.ok){
        navigate('/login');
      }else{
        setError(" Please try again.");
      }
    }catch(err){
      setError("Error signing up. Please try again.");
    }
  }

  return (
    <>
    <Heading style={{display:'flex', alignItems:"center", justifyContent:'center', color:'#f0f0f0'}}>Sign up</Heading>
    <div style={{padding:'20px', border:'1px solid #f0f0f0', display:'flex', width:'500px', borderRadius:'10px', marginLeft:'32%', marginTop:'1%'}}>
      <form onSubmit={handleSubmit}>
        <Input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' required/>
        <Input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' required/>    
        <Input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='set password.....' required/>
        <Button type="submit">Sign up</Button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </div>
    </>
  )
}