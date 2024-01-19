import { Dispatch } from "react";

type setter = Dispatch<React.SetStateAction<any>>

const SettingsPage=((prop:{setSelectedPage:setter})=>{
    return(
        <>
            settings page
        </>
    )
})

export default SettingsPage;