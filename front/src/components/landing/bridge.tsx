import {TextField } from "@mui/material"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Alert from "@mui/material/Alert";
import FormControl from "@mui/material/FormControl";
import Box from '@mui/material/Box';
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { Buttons } from "./landing.ts";
import React, { useState } from "react"
import axios from "axios";

export default function Password(prop:{id:string,pass:string,setpass:React.Dispatch<React.SetStateAction<string>>}) {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return(
        <FormControl sx={{mt:2}} variant="outlined" >
            <InputLabel htmlFor={prop.id}>Password</InputLabel>
            <OutlinedInput
            id={prop.id}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
            }
            label="Password"
            value={prop.pass}
            onChange={(e)=>{prop.setpass(e.target.value)}}
            required
            />
        </FormControl>
    )
}

export const SignUp=()=>{
    const [email,setEmail]=useState("")


    const [passMismatch,setPassMismatch]=useState(false)
    const [Pass1,setPass1]=useState("")
    const [Pass2,setPass2]=useState("")

    const handleSignUp=async (e:any)=>{
        e.preventDefault()
        const endpoint="http://localhost:5172/SignUp"
        if(Pass1!==Pass2){
            setPass1("")
            setPass2("")
            setPassMismatch(true)
        }
        else{
            setPassMismatch(false)
            const password = Pass1||Pass2
            const request=await axios.post(endpoint,{EMAIL:email,PASSWORD:password})
            console.log(request.data.process)
        }
    }
    return(
        <>
            {/* <button onClick={handleSignUp}>test</button> */}
            <form onSubmit={handleSignUp}>
                <Box sx={{mt:2}}>
                    <FormControl sx={{m:2}} variant="outlined">
                        {passMismatch && (
                            <div style={{marginBottom:"12px"}}>
                                <Alert severity="error">
                                    <div>Password did not match.</div>
                                </Alert>
                            </div>
                        )}
                        <TextField
                        type="email"
                        label="Email" 
                        variant="outlined"
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        required
                        />                    
                        <Password id="pass1" pass={Pass1} setpass={setPass1}/>
                        <Password id="pass2" pass={Pass2} setpass={setPass2}/>
                        <Buttons style={{marginTop:'10px'}} type="submit">Sign Up</Buttons>
                    </FormControl>
                </Box>
            </form>
        </>
    )
}

export const LogIn=()=>{
    const [email,setEmail]=useState("")

    const [Pass,setPass]=useState("")

    const handleLogin=(e:any)=>{
        e.preventDefault()
        //send to backend
    }

    return(
        <form onSubmit={handleLogin}>
            <Box sx={{mt:2}}>
                <FormControl sx={{m:2}} variant="outlined">
                    {/* {passMismatch && (
                        <div style={{marginBottom:"12px"}}>
                            <Alert severity="error">
                                <div>Password did not match.</div>
                            </Alert>
                        </div>
                    )} */}
                    <TextField
                    type="email"
                    label="Email" 
                    variant="outlined"
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    required
                    />                    
                    <Password id="pass" pass={Pass} setpass={setPass}/>
                    <Buttons style={{marginTop:'10px'}} type="submit">Log in</Buttons>
                </FormControl>
            </Box>
        </form>
    )
}
