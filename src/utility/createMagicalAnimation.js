import '../types'
import React from 'react'
import { createMagicalSpring } from "./createMagicalSpring"


/**
 * 
 * @param {React.MutableRefObject<any>} refObject - a ref object
 * @param  {SpringProps &{direction?:string,delay?:number,easing?:springEasing,repeat?:number| Infinity}} others - important for spring effect
 */
export const createMagicalAnimation = ( refObject, others ) =>
{

    let animation = null

    const { keyframes, frames } = createMagicalSpring( {
        dx: others.dx,
        dy: others.dy,
        stiffness: others.stiffness,
        mass: others.mass,
        damping: others.damping,
        scale: others.scale,
        rotate: others.rotate,
    } );
    if ( keyframes.length > 0 )
    {
        const kfEffect = new KeyframeEffect( refObject.current, keyframes, {
            duration: ( frames / 60 ) * 1000,
            fill: "both",
            easing: others.easing,
            iterations: others.repeat,
            delay: others.delay,
        } );

        animation = new Animation( kfEffect );
        animation.play();
    }

    return { animation }
}

