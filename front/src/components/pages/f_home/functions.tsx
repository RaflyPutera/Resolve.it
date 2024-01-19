import {motion} from "framer-motion"
import "./functions.css"
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import WysiwygOutlinedIcon from '@mui/icons-material/WysiwygOutlined';
import { Button } from "@mui/material";
import { useState, Dispatch } from "react";

type setter = Dispatch<React.SetStateAction<any>>

export const aboutText = [
    {
        label: 'What is it?',
        description: `
        Resolve.it is an inclusive educational platform designed for individuals to both seek and share tutorials online. 
        Users can request specific tutorials or contribute their expertise by publishing educational content, 
        fostering a collaborative and diverse learning environment.`,
    },
    {
        label: 'How do i get started?',
        description:`
        Begin by exploring a wealth of requested posts through the "Explore" 
        option, or kickstart your learning adventure by initiating your own tutorial request with the 
        "Request Post" feature. Start your educational exploration and growth with Resolve today.`,
    },
    {
        label: 'Credits',
        description: `credits to ok`,
    },
];


export const Waypoint=((props:{iconNumber:number, setAbout?:setter})=>{
    const [isHovered, setIsHovered] = useState(false);
    return(
        <>
            {
                props.iconNumber === 0 ? 
                    <motion.div className="wayclass"
                    whileHover={{scale:1.1}}>
                        <Button className="wayclass"
                        onClick={()=>{props.setAbout?.(true)}}
                        onMouseEnter={()=>{setIsHovered(true)}}
                        onMouseLeave={()=>{setIsHovered(false)}}>
                            <LightbulbOutlinedIcon 
                            style={{transform:'scale(3)',color:isHovered ? "#F7A118":"#c4c4c4"}}
                            />
                                <div style={{color:'#1A1A1A',textTransform:'none',fontSize:'1.3em', marginTop:'30px'}}>
                                    About
                                </div>
                        </Button>
                    </motion.div>
                :
                props.iconNumber === 1 ?
                    <motion.div className="wayclass"
                    whileHover={{scale:1.1}}>
                        <Button className="wayclass"
                        onMouseEnter={()=>{setIsHovered(true)}}
                        onMouseLeave={()=>{setIsHovered(false)}}>
                            <ExploreOutlinedIcon style={{transform:'scale(3)',color:isHovered ? "#F7A118":"#c4c4c4"}}/>
                                <div style={{color:'#1A1A1A',textTransform:'none',fontSize:'1.3em', marginTop:'30px'}}>
                                    Explore
                                </div>
                        </Button>
                    </motion.div>
                :
                props.iconNumber === 2 ?
                    <motion.div className="wayclass"
                    whileHover={{scale:1.1}}>
                        <Button className="wayclass"
                        onMouseEnter={()=>{setIsHovered(true)}}
                        onMouseLeave={()=>{setIsHovered(false)}}>
                        <WysiwygOutlinedIcon style={{transform:'scale(3)',color:isHovered ? "#F7A118":"#c4c4c4"}}/>
                            <div style={{color:'#1A1A1A',textTransform:'none',fontSize:'1.3em', marginTop:'30px'}}>
                                Post request
                            </div>
                        </Button>
                    </motion.div>
                :null
            }
        </>
    )
})

