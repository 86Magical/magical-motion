//@ts-nocheck
import { createMagicalSpring } from "./createMagicalSpring";

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
      stiffness: configure.stiffness,
      mass: configure.mass ,
      damping: configure.damping ,
      FPS: configure.FPS ,
    },
  } );
  if ( keyframes.length > 0 )
  {
    const kfEffect = new KeyframeEffect( refObject.current, keyframes, {
      duration: ( frames / 60 ) * 1000,
      fill: "both",
      easing: "linear",
      iterations: transitions.repeat ?? 1,
      delay: transitions.delay,
      direction: transitions.direction,
    } );
    animation = new Animation( kfEffect );
    animation.play();
    animation.onfinish = function ()
    {
      // callback when animation finishes
      others.onFinish && others.onFinish();
    };
  }

  return { animation };
};
