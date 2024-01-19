import { Dispatch } from "react";

type setter = Dispatch<React.SetStateAction<any>>

const PostRequestPage=((prop:{setSelectedPage:setter})=>{
    return(
        <>
            Post a request
        </>
    )
})

export default PostRequestPage;
