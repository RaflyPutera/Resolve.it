import { auth } from "../../firebase.tsx";
import { Buttons, ItemButton} from "../global/styledComponents.ts";
import {signOut } from "firebase/auth";
import {useNavigate } from 'react-router-dom';
import { FadeIn } from "../animations/basic.tsx";
import {motion} from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import "./mainSpace.css";
import "./mainSpace.ts"
import Explore from "../pages/explorePage.tsx";
import HomePage from "../pages/homePage.tsx";
import ProfilePage from "../pages/profilePage.tsx";
import PostRequestPage from "../pages/postRequestPage.tsx";
import SettingsPage from "../pages/settingsPage.tsx";

import { Dispatch, useEffect, useState } from "react";
import { Tooltip } from "@mui/material";

type setter = Dispatch<React.SetStateAction<any>>

const Resolve=((prop:{setSelectedPage:setter})=>{
    const navigate=useNavigate();
    const onclick=()=>{
        navigate('/home')
        prop.setSelectedPage(0)
    }
    return(
        <button style={{borderColor:'transparent'}} onClick={onclick} className="resolve">Resolve.it</button>
    )
    })

const Menu=((prop:{menuLoaded:boolean, isClicked:boolean,setClick:setter})=>{
    const [waitState, setWaitState]=useState(false);
    const handleClick = () => {
        prop.setClick(!prop.isClicked);
    };
    useEffect(()=>{
        if(prop.isClicked==true && prop.menuLoaded==false){
            setWaitState(true);
        }
        else if(prop.isClicked==false && prop.menuLoaded==true){
            setWaitState(true);
        }
        else{
            setWaitState(false)
        }
    },[prop.isClicked,prop.menuLoaded])
    return(
        <div style={{position:'fixed', right:'10px'}}>
                <motion.div
                >
                    <Buttons onClick={handleClick} disabled={waitState} style={{backgroundColor: prop.isClicked ? "#ff7912":"#1a1a1a"}}>
                        <MenuIcon style={{color:"white"}} fontSize="medium"/>
                    </Buttons>
                </motion.div>
        </div>
    )
})

const MenuItems=((prop:{menuLoaded:boolean, SelectedPage:number, setSelectedPage:setter,setClick:setter})=>{
    const navigate=useNavigate();
    const LogoutHandler=(e:any)=>{
        e.preventDefault();
        signOut(auth).then(()=>{
            console.log("logged out");
            navigate('/')
        })
        .catch((error:string)=>{
            console.log(error)
        })
    }

    const pageSelection=(index:number)=>{
        prop.setSelectedPage(index)
        prop.setClick(false)
    }

    return(
        <motion.div 
        style={{display:'flex', flexDirection:'column', width:'100%'}}
        animate={{opacity: prop.menuLoaded ? 1:0}}
        >
            {prop.menuLoaded ?
                <>  
                    <div style={{height:'65px',borderBottom:'1px solid #CFCCCC'}}>
                        <ItemButton 
                        onClick={()=>pageSelection(1)}
                        style={{height:'100%',width:'100%',textTransform:'capitalize', marginBottom:'30px'}}>
                            <AccountCircleIcon style={{marginRight:'10px'}}/>
                            {auth.currentUser?.displayName}
                        </ItemButton>
                    </div>
                    
                    <div className="naviContainer">
                        <div className="menu1">
                            <ItemButton onClick={()=>pageSelection(0)}>
                                <Tooltip title="Home" placement="left">
                                    <HomeIcon/>
                                </Tooltip>
                            </ItemButton>

                            <ItemButton onClick={()=>pageSelection(2)}>
                                <Tooltip title="Explore" placement="left">
                                    <ExploreIcon/>
                                </Tooltip>
                            </ItemButton>

                            <ItemButton onClick={()=>pageSelection(3)}>
                                <Tooltip title="Post request" placement="left">
                                    <PostAddIcon/>
                                </Tooltip>
                            </ItemButton>
                        </div>
                        <div className="menu2">
                            <ItemButton onClick={()=>pageSelection(4)} style={{width:'100%'}}>
                                Settings
                            </ItemButton>
                            <ItemButton style={{width:'100%'}} onClick={LogoutHandler}>
                                Log out
                            </ItemButton>
                        </div>
                    </div>
                </>
                :null}
        </motion.div>
    )
})

const Home=()=>{
    const [isClicked, setIsClicked] = useState(false);
    const [menuLoaded,setMenuLoaded]=useState(true)
    const [SelectedPage, setSelectedPage]=useState(0)
    return(
        <FadeIn duration={0.5} ease="easeInOut">
            <div>
                {/* header */}
                <div className="head">
                    <Resolve setSelectedPage={setSelectedPage}></Resolve>
                    <Menu menuLoaded={menuLoaded} isClicked={isClicked} setClick={setIsClicked}></Menu>
                </div>

                {/* body */}
                <motion.div className="viewer">
                    {
                        SelectedPage===0 ? <HomePage setSelectedPage={setSelectedPage}></HomePage>
                        :
                        SelectedPage===1 ? <ProfilePage setSelectedPage={setSelectedPage}></ProfilePage>
                        :
                        SelectedPage===2 ? <Explore setSelectedPage={setSelectedPage}></Explore>
                        :
                        SelectedPage===3 ? <PostRequestPage setSelectedPage={setSelectedPage}></PostRequestPage>
                        :
                        SelectedPage===4 ? <SettingsPage setSelectedPage={setSelectedPage}></SettingsPage>
                        :
                        null
                    }
                </motion.div>

                {/* navi */}
                <motion.div className="navi"
                    animate={{width: isClicked ? '190px':'0vw'}}
                    transition={{duration:0.3}}
                    onAnimationComplete={()=>{setTimeout(()=>{setMenuLoaded(!menuLoaded)},100)}}>
                    {isClicked ?
                    <MenuItems menuLoaded={menuLoaded} SelectedPage={SelectedPage} setSelectedPage={setSelectedPage} setClick={setIsClicked}></MenuItems>
                    :
                    null}
                </motion.div>
            </div>
        </FadeIn>
        )
}

export default Home