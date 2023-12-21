import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import OutlinedInput from "@mui/material/OutlinedInput";

export const Buttons = styled(Button)({
    fontFamily:"inherit",
    backgroundColor: "Black",
    color:"White",
    borderRadius:"5px",
    "&:hover, &:active":{
        backgroundColor:"#ff7912",
        outline:"none",
    }
})

export const ButtonBack = styled(Button)({
    fontFamily:"inherit",
    backgroundColor: "white",
    color:"Black",
    border:"1px solid gray",
    borderRadius:"10px",
    "&:hover":{
        border:"1px solid black",
        backgroundColor:"Black",
        color:"White"
    }
})

export const OutInput= styled(OutlinedInput)({
    backgroundColor:"Black"
})