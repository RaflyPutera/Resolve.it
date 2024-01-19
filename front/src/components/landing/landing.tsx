import React, { Dispatch,useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import Stack from '@mui/material/Stack';
import { Buttons, ButtonBack } from "./../global/styledComponents.ts";
import { SignUp, LogIn } from "./bridge.tsx";
import { FadeIn } from "../animations/basic.tsx";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import "./landing.css"
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

type setter = Dispatch<React.SetStateAction<any>>


const ContentStage=(prop:{contentState:number, setContentState:setter,})=>{
    const contentSelection = (value:number)=>{
        prop.setContentState(value)
    }

    const [signUpFailed,setSignUpFail]=useState(false)
    const [logInFailed,setLogInFail]=useState(0)
    return(
        <>  
            {/* initial */}
            {prop.contentState === 0 && (
            <FadeIn duration={0.5} ease="easeInOut">
                <Stack spacing={2} direction="column">
                <Buttons variant="contained" onClick={() => contentSelection(1)}>Log in</Buttons>
                <Buttons variant="contained" onClick={() => contentSelection(2)}>Sign up</Buttons>
                <Buttons variant="contained" onClick={() => contentSelection(3)}>Anonymous</Buttons>
                </Stack>
            </FadeIn>
            )}

            {/* log in */}
            {prop.contentState === 1 && (
            <FadeIn duration={0.5} ease="easeInOut">
                <LogIn setContentState={prop.setContentState} fail={logInFailed} setFail={setLogInFail}/>
                    <ButtonBack style={{marginBottom:"10px"}} onClick={() => contentSelection(0)}>
                        <ArrowBack/>
                    </ButtonBack>
                </FadeIn>
            )}

            {/* sign up */}
            {prop.contentState === 2 && (
            <FadeIn duration={0.5} ease="easeInOut">
                    <SignUp setContentState={prop.setContentState} fail={signUpFailed} setFail={setSignUpFail}/>
                    <ButtonBack style={{marginBottom:"10px"}} onClick={() => contentSelection(0)}>
                        <ArrowBack/>
                    </ButtonBack>
            </FadeIn>
            )}

            {/* anonymous access */}
            {prop.contentState === 3 && (
            <FadeIn duration={0.5} ease="easeInOut">
                <ButtonBack style={{marginBottom:"10px"}} onClick={() => contentSelection(0)}>
                    <ArrowBack/>
                </ButtonBack>
            </FadeIn>
            )}

            {/* loading stage */}
            {prop.contentState === 4 && (
                <FadeIn duration={0.5} ease="easeInOut">
                    <Box sx={{ width: '100%' }}>
                        <CircularProgress />
                    </Box>
                </FadeIn>
            )}

            {/* sign up complete */}
            {prop.contentState === 5 && (
                <FadeIn duration={0.5} ease="easeInOut">
                    <div style={{marginBottom:"15px"}}>Sign up complete</div>
                    <ButtonBack style={{marginBottom:"10px"}} onClick={() => contentSelection(0)}>
                        log in
                    </ButtonBack>
                </FadeIn>
            )}

        </>
    )
}   

const Landing=(setuser:any)=>{
    const descList=["for developers.","by developers."]
    const [descStatus,setDescStatus]=useState(0)
    const [isMounted, setIsMounted] = useState(true);

    const controls = useAnimation();
    const [contentState,setContentState]=useState(0)

    const navigate=useNavigate()

    
    // console.log(setuser.userState)
    if(!setuser.userState){
        useEffect(()=>{
            // setIsMounted(true);
            const animateNext=async()=>{
                await controls.start({
                    opacity:1,
                })
                await controls.start({opacity:0, transition:{delay:10, ease:'backInOut'}})
                setDescStatus((prevStatus) => (prevStatus + 1) % descList.length);      
                setIsMounted(!isMounted);
            }
            animateNext()
        },[isMounted])
    
        return(
            <div className="landingContainer">
                <div style={{gridArea:'head'}}>
                    <div className="title">Resolve.it</div>
                    <div style={{marginBottom:'12px'}} className="description">A community driven educational platform
                        <motion.span initial={{opacity:1}} animate={controls}>
                            {' '}{descList[descStatus]}
                        </motion.span>
                    </div>
                </div>
                <div style={{display:'flex',gridArea:'content',justifyContent:'center'}}>
                    <div className="content">
                        <ContentStage contentState={contentState} setContentState={setContentState}/>      
                    </div>   
                </div>         
                {/* <LoginButton/>   */}
            </div>
        )
    }else{useEffect(()=>{navigate('/home')})}
}
export default Landing