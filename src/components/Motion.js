//@ts-nocheck
import { createElement, memo, useLayoutEffect, useRef } from 'react'
import { createMagicalSpringAnimation } from '../utility'

 const Motion =  (
    { as,
        children,
        transition = {
            delay: 0,
            repeat: 1,
            
        },
        configure = {
            mass: 1,
            stiffness: 100,
            damping: 10,
        },
        animate = { // For when <Motion/> is Mounted
            x: 0,
            y: 0,
            scale: 0,
            scaleX: 0,
            scaleY: 0,
            rotate: 0,
            opacity:{}
        },
        onFinish,
        ...otherProps 
    }
) =>
{

    const motion = useRef( null )
    const isMountedOnce = useRef(true)
    const Component = as || 'main'
    useLayoutEffect( () =>
    {
      if(isMountedOnce.current){
        createMagicalSpringAnimation( motion, {
            x: animate.x,
            y: animate.y,
            scale: animate.scale,
            scaleX: animate.scaleX,
            scaleY: animate.scaleY,
            rotate: animate.rotate,
            stiffness: configure.stiffness || 100,
            damping: configure.damping||10,
            mass: configure.mass || 1,
            delay: transition.delay,
            repeat: transition.repeat,
            onFinish: onFinish,
            FPS:configure.FPS,
            direction: transition.direction,
            // @ts-ignore
            opacity:{from: animate.opacity.from , to:  animate.opacity.to } 
        } )
      }
       return ()=>{
       isMountedOnce.current=false
       }
    }, [] )
    return (
        createElement( Component, { ref: motion, children, ...otherProps } )
    )
}

 

export default memo(Motion)