//@ts-nocheck
import { createMagicalSpring } from "./createMagicalSpring"



export const createMagicalSpringAnimation = ( refObject, others ) =>
{

    let animation = null

    const { keyframes, frames } = createMagicalSpring( {
        x: others.x,
        y: others.y,
        stiffness: others.stiffness,
        mass: others.mass,
        damping: others.damping,
        scale: others.scale,
        scaleX: others.scaleX,
        scaleY: others.scaleY,
        rotate: others.rotate,
        FPS: others.FPS,
        // @ts-ignore
        opacity:{from:others.opacity.from,to:others.opacity.to}
    } );
    if ( keyframes.length > 0 )
    {
       
        const kfEffect = new KeyframeEffect( refObject.current, keyframes, {
            duration: ( frames / 60 ) * 1000,
            fill: "both",
            easing: 'linear',
            iterations: others.repeat,
            delay: others.delay,
            direction: others.direction
        } );
        animation = new Animation( kfEffect );
        animation.play();
        animation.onfinish = function (  )
        
        {
            // callback when animation finishes
            others.onFinish && others.onFinish()
        }
    }

    return { animation }
}























