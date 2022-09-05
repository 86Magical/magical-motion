
import { createMagicalSpring } from "./createMagicalSpring";
import '../types';

/**
 * 
 * @param {React.MutableRefObject<any>} refObject 
 * @param {createMagicalSpringProp & {transitions?:transitionsProp,others?:otherAnimationsProp}} [propObject]
 * @returns {{animation:Animation | null}}
 */
export const createMagicalSpringAnimation = (
  refObject,
  { initial, animate, configure, transitions, others }
) =>
{
  let animation = null;

  const { keyframes, frames } = createMagicalSpring( {
    initial,
    animate,
    configure: {
      stiffness: configure?.stiffness,
      mass: configure?.mass,
      damping: configure?.damping,
      FPS: configure?.FPS,
    },
  } );
  if ( keyframes.length > 0 )
  {
    const kfEffect = new KeyframeEffect( refObject.current, keyframes, {
      duration: ( frames / 60 ) * 1000,
      fill: "both",
      easing: "linear",
      iterations: transitions?.repeat,
      delay: transitions?.delay,
      direction: transitions?.direction,
    } );
    animation = new Animation( kfEffect );
    animation.play();
    animation.onfinish = function ()
    {
      // callback when animation finishes
      others?.onAnimationFinish && others?.onAnimationFinish();
    };
  }

  return { animation };
};
