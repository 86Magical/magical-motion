/**
 * @typedef {object} springAnimationProps 
 * @property {number} [x]
 * @property {number} [y]
 * @property {number} [scaleX]
 * @property {number} [scaleY]
 * @property {number} [rotate]
 * @property {number} [scale]
 */

/**
 * @typedef springParameter
 * @property {number} [stiffness]
 * @property {number} [damping]
 * @property {number} [mass]
 * @property {number} [FPS]
 */

/**
 * @typedef createMagicalSpringProp
 * @property {React.CSSProperties & springAnimationProps } initial
 * @property {React.CSSProperties & springAnimationProps} animate
 * @property {springParameter} configure
 */
/**
 * @typedef transitionsProp
 * @property {number} [repeat]
 * @property {number} [delay]
 * @property {PlaybackDirection} [direction]
 * @property {string | number} [waitFor]
 */
/**
 * @typedef otherAnimationsProp
 * @property {(()=>void)} [onAnimationFinish]
 */
/**
 * @typedef createMagicalSpringAnimationProp
 * @property {createMagicalSpringProp & transitionsProp} springAndAnimationProp
 */
/**
 * @typedef motionWaitProp
 * @property {number | string} [waitFor]
 */
/**
 * @typedef motionProp
 * @property {React.ElementType| ""} [as]
 * @property {React.ReactNode} [children]
 * @property {React.CSSProperties & springAnimationProps} [initial]
 * @property {React.CSSProperties & springAnimationProps} [animate]
 * @property {springParameter & {name?:string}} [configure]
 * @property {transitionsProp} [transitions]
 * @property {React.HTMLAttributes<any>} [otherProps]
 */