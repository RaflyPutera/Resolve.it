import { FadeIn } from "../../animations/basic"
import "./pageStyle.css"

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useState } from "react";


export const Headline=(({children}:{children:React.ReactNode})=>{
    return(
        <FadeIn duration={0.5} ease="easeInOut">
            <div className="headline">
                {children}
            </div>
        </FadeIn>
    )
})

export function TextMobileStepper(props:{text:any}) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = props.text.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div style={{height:'10rem'}}>
            <div>
                <div style={{marginBottom:'10px',fontSize:'1.5em',color:'#FF7912'}} >{props.text[activeStep].label}</div>
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:"100%", height:'80%'}}>
                {props.text[activeStep].description}
            </div>
            <MobileStepper style={{marginBottom:'20px'}}
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                >
                    Next
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                    ) : (
                    <KeyboardArrowRight />
                    )}
                </Button>
                }
                backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                    ) : (
                    <KeyboardArrowLeft />
                    )}
                    Back
                </Button>
                }
            />
        </div>
    );
    }

