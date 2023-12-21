import {motion} from 'framer-motion'

export const FadeIn = ({children,duration,ease}:{children: React.ReactNode,duration:number,ease:string}) => {
    return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: duration, ease:ease}}>
        {children}
    </motion.div>
    )
}

export const FadeOut = ({children,duration,ease}:{children: React.ReactNode,duration:number,ease:string}) => {
    return (
    <motion.div
    initial={{opacity: 1}}
    animate={{opacity: 0}}
    exit={{opacity: 1}}
    transition={{duration: duration, ease:ease}}>
        {children}
    </motion.div>
    )
}