import { Dispatch } from "react";

type setter = Dispatch<React.SetStateAction<any>>

const ProfilePage=((prop:{setSelectedPage:setter})=>{
    return(
        <>
            profile page
        </>
    )
})

export default ProfilePage;