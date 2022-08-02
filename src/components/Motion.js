import '../types'
import React, { useLayoutEffect, useRef, useState } from 'react';
import { clearAnimationFrameTimeout, createMagicalAnimation, setAnimationFrameTimeout } from '../utility';
/**
 *
 * @param {MotionComponentProps} props
 * @returns
 */
export const Motion = ( {
    as,
    children,
    debugName,
    transition = { delay: 0, easing: 'linear', repeat: 1 },
    configure = {
        stiffness: 100, damping: 10, mass: 1
    },
    mounted = { // For when <Motion/> is Mounted
        x: 1000, y: 0, scale: 0, rotate: 0
    },
    ...otherProps
} ) =>
{
    const move = useRef( HTMLElement )
    /** @type {React.MutableRefObject<Canceller>} */
    const timer = useRef( { id: 0 } );
    const [ isMounted, setIsMounted ] = useState( true )
    //    which animation to run
    const [ animationToStage, setAnimationToStage ] = useState( isMounted ? 'initial' : null )
    useLayoutEffect( () =>
    {
        /**  
         * This useLayoutEffect is to set Animation Stage
         * ? Initial shouldn't be animated right ?
         * useLayoutEffect  switch between spring animation stage
        * *  when <Motion/> is just  mounted to the DOM, isMounted is set to true 
        * *  when is mounted is true, animation would run else it wouldn't
        */
        setIsMounted( true )
        clearAnimationFrameTimeout( timer.current );
        if ( isMounted )
        {
            /**
             * I want the unmounting api to be similar to framer's animate presence
             * {shouldMount && <Motion/>} not <Motion shouldMount={aBooleanSate}/>
             * 
             * TODO -- Look for a way to delay unmounting 💀😩
             */
            setAnimationToStage( 'initial' );
            timer.current = setAnimationFrameTimeout( () =>
            {
                setAnimationToStage( 'mounted' );
            } );
        }
        return () =>
        {

            clearAnimationFrameTimeout( timer.current );
            setIsMounted( false )
        }
    }, [ isMounted ] )
    useLayoutEffect( () =>
    {
        if ( animationToStage === 'initial' )
        {
            createMagicalAnimation( move, {
                dx: mounted.x,
                dy: mounted.y,
                scale: mounted.scale,
                rotate: mounted.rotate,
                stiffness: configure.stiffness,
                damping: configure.damping,
                mass: configure.mass,
                delay: transition.delay,
                easing: transition.easing,
                repeat: transition.repeat
            } )
        }
    }, [ animationToStage ] )
    const Component = as || "div";
    return (
        <Component ref={ move } { ...otherProps }>{ children }</Component>
    )
};
