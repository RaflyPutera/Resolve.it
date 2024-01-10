import {TextField } from "@mui/material"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from "@mui/material/FormControl";
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import Alert from "@mui/material/Alert";
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { Buttons } from "./landing.ts";
import React, { Dispatch, useEffect, useState } from "react"
import axios from "axios";

type setter = Dispatch<React.SetStateAction<any>>

export function Email(prop:{email:string,setEmail:setter, errval:boolean, setError:setter, fail?:boolean}){
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValidator=(e:any)=>{
        prop.setEmail(e.target.value)
    }
    
    return(
        <FormControl sx={{mt:1}}>
            <TextField
                autoComplete="true"
                type="email"
                label="Email" 
                variant="outlined"
                value={prop.email}
                onChange={emailValidator}
                required
                error={prop.fail}
            />
        </FormControl>
    )
}

export function Password(prop:{id:string,pass:string,setpass:setter, matcher?:any, matchval?:boolean}) {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);
    // const [mismatch,setMismatch] =useState(false)

    const handlePassValidate=(e:any)=>{
        prop.setpass(e.target.value)
        if(prop.pass.length<5){
            setError(true)
        }
        else{
            setError(false)
        }
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return(
        <FormControl sx={{mt:2}} variant="outlined">
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
            onChange={handlePassValidate}
            error={error}
            onBlur={prop.matcher? prop.matcher():undefined}
            required
            />
            <FormHelperText>
                { error ? 'Password must be at least 6 characters' : prop.matchval ? 'Password does not match' : '' }
            </FormHelperText>
        </FormControl>
    )
}

export const SignUp=(prop:{setContentState:setter, fail:boolean, setFail:setter})=>{
    const [email,setEmail]=useState("")
    const [passMismatch,setPassMismatch]=useState(false)
    const [Pass1,setPass1]=useState("")
    const [Pass2,setPass2]=useState("")

    const [error,setError]=useState(false)

    const matcher=useEffect(()=>{
        if(Pass1!==Pass2){setPassMismatch(true)}
        else{setPassMismatch(false)}
    })

    const handleSignUp=(e:any)=>{
        e.preventDefault()
        const endpoint="http://localhost:5172/SignUp"
        if(Pass1!==Pass2 || Pass1.length<6 || Pass2.length<6){
            setPass1("")
            setPass2("")
            setPassMismatch(true)
        }
        else{
            prop.setContentState(4)
            setPassMismatch(false)
            const password = Pass1||Pass2
            axios.post(endpoint,{EMAIL:email,PASSWORD:password})
                .then(response=>{
                    if (response.data.process===true){
                        //show success
                        prop.setContentState(5)
                    }
                })
                .catch(error=>{
                    const errcode=error.response.status
                    if(errcode==409){
                        prop.setContentState(2)
                        prop.setFail(true)
                    }
                })
        }
    }
    return(
        <>
            {/* <button onClick={handleSignUp}>test</button> */}
            <form onSubmit={handleSignUp}>
                <Box sx={{mt:2}}>
                    <FormControl sx={{m:2}} variant="outlined">
                        {
                            prop.fail ? <Alert severity="error">Email already in use</Alert>:''
                        }
                        <Email email={email} setEmail={setEmail} errval={error} setError={setError} fail={prop.fail}/>
                        <Password id="pass1" pass={Pass1} setpass={setPass1} matcher={matcher} matchval={passMismatch}/>
                        <Password id="pass2" pass={Pass2} setpass={setPass2} matcher={matcher} matchval={passMismatch}/>
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
