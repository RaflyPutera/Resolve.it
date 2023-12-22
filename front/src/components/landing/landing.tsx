import React, { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import Stack from '@mui/material/Stack';
import { Buttons, ButtonBack } from "./landing.ts";
import { SignUp, LogIn } from "./bridge.tsx";
import { FadeIn } from "../animations/basic.tsx";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';




import "./landing.css"
import { ArrowBack } from "@mui/icons-material";

const ContentStage=(prop:{contentState:number, setContentState:React.Dispatch<React.SetStateAction<number>>})=>{
    const contentSelection = (value:number)=>{
        prop.setContentState(value)
    }
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
                <LogIn/>
                    <ButtonBack style={{marginBottom:"10px"}} onClick={() => contentSelection(0)}>
                        <ArrowBack/>
                    </ButtonBack>
                </FadeIn>
            )}

            {/* sign up */}
            {prop.contentState === 2 && (
            <FadeIn duration={0.5} ease="easeInOut">
                    <SignUp setContentState={prop.setContentState}/>
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

const Landing=()=>{
    const descList=["for developers.","by developers."]
    const [descStatus,setDescStatus]=useState(0)
    const [isMounted, setIsMounted] = useState(true);

    const controls = useAnimation();
    const [contentState,setContentState]=useState(0)

    useEffect(()=>{
        // setIsMounted(true);
        const animateNext=async()=>{
            await controls.start({
                opacity:1,
            })
            await controls.start({opacity:0, transition:{delay:5, ease:'backInOut'}})
            setDescStatus((prevStatus) => (prevStatus + 1) % descList.length);      
            setIsMounted(!isMounted);
        }
        animateNext()
        
        // setIsMounted(true);
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
}
export default Landing