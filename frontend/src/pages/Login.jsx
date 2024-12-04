import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const [currentState, setCurremtState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {token, setToken, backendUrl,navigate} = useContext(ShopContext);

  const handleSubmit = async (event) =>{
    event.preventDefault();

    try {
      
      if (currentState === "Sign Up"){

        const {data} = await axios.post(backendUrl + "/api/user/register", {name, email, password});
        
        if(data.success){
          setToken(data.token);
          localStorage.setItem("token", data.token);
        }else{
          toast.error(data.message)
        }

      }else {

        const {data} = await axios.post(backendUrl + "/api/user/login", {email, password});

        if(data.success){
          setToken(data.token);
          localStorage.setItem("token", data.token);
        }else{
          toast.error(data.message)
        }
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(token){
      navigate("/")
    }
  }, [token])

  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'
      onSubmit={handleSubmit}>
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className='prata-regular text-3xl'>{currentState}</p>  
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div> 

      {currentState==="Login" ? ""
        :<input type="text" onChange={(e)=>setName(e.target.value)} value={name} className='w-full px-3 py-2 border border-gray-800' placeholder='name' required/>
      }
      <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
      <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className='cursor-pointer'>Forget your password</p>
        {
          currentState === "Login" 
          ? <p onClick={()=>setCurremtState("Sign Up")} className='cursor-pointer'>Create Account</p>
          : <p onClick={()=>setCurremtState("Login")} className='cursor-pointer'>Login Here</p>
        }
      </div>

      <button className='bg-black text-white font-light px-8 py-2 mt-5'>{currentState==="Login" ? "Sign In" : "Sign Up"}</button>
    </form>
  )
}

export default Login
