import { Headline } from "./shared/bits";
// import {auth} from "./../../firebase"

import { StartDoodle } from "../../assets/doodle";
import "./shared/pageStyle.css"
import { Dispatch, useState } from "react";
import { Waypoint, aboutText } from "./f_home/functions";
import {motion} from "framer-motion"
import { TextMobileStepper } from "./shared/bits";

type setter = Dispatch<React.SetStateAction<any>>

const Zone=((prop:{nowZone:number})=>{
    return(
        <div className="zoneClass">
            {
            prop.nowZone==0? 
            <>  
                <StartDoodle size="280px"/>
                <Headline>You're one resolve away!</Headline>
            </>
            :
            prop.nowZone==1?
            <>
                <Headline>About Resolve</Headline>
                <TextMobileStepper text={aboutText}/>
            </>
            :null
            }
        </div>
    )
})

const HomePage=((prop:{setSelectedPage:setter})=>{
    const [nowZone,setNowZone]=useState(0)
    return(
        <div className="parent">
            <Zone nowZone={nowZone}></Zone>
            <div className='holder-container'>
                <Waypoint iconNumber={0} setAbout={setNowZone}/>
                <Waypoint iconNumber={1}/>
                <Waypoint iconNumber={2}/>
                
            </div>
        </div>
    )
})

export default HomePage;