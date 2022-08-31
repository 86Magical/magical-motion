//@ts-nocheck
import { createElement, memo, useLayoutEffect, useRef } from 'react'
import { createMagicalSpringAnimation } from '../utility'
const defaultAnimate = {x:0,y:0}
const Motion =  (
    { 
        as,
        children,
        transitions = {},
        configure={} ,
        initial,
        animate=defaultAnimate,
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
        initial,
        animate,
        configure,
        transitions,
        others:{
            onFinish: onFinish,
        }
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