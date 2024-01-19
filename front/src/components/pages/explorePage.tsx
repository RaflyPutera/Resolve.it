import { Dispatch } from "react";

type setter = Dispatch<React.SetStateAction<any>>

const Explore=((prop:{setSelectedPage:setter})=>{
    return(
        <>
            explore page
        </>
    )
})

export default Explore;
