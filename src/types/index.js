/**
 * @typedef {{damping?:number , stiffness?:number , mass?:number}} SpringSpringOptions - spring options for stiffness/elasticity of spring, mass and damping
 */
/**
 * @typedef SpringProps
 * @property {number} [dx] -  horizontal  direction
 * @property {number} [dy] -  vertical  direction
 * @property {number} [rotate]
 * @property {number} [scale]
 * @property {number} [stiffness] - elasticity of the string
 * @property {number} [damping] - damping force to slow down animation FPS
 * @property {number} [mass] - weight of the object
 */

/**
 * @typedef SpringKeyFrames
 * @property {{transform:string}[]} keyframes
 * @property {number} frames
 */

/** 
 * @typedef animationOptions - options for <Motion /> initial mounted and unmounted prop
 * @property {number} [x]
 * @property {number} [y]
 * @property {number} [scale]
 * @property {number} [rotate]
 * @property {number} [duration]
 */

/**
 * @typedef {"linear"|"ease"|"ease-in"|"ease-out"|"ease-in-out"} springEasing
 */

/**
 * @typedef MotionComponentProps
 * @property {React.ElementType} [as]
 * @property {number} [duration]
 * @property {string} [debugName]
 * @property {React.ReactNode} children
 * @property {SpringSpringOptions} [configure]
 * @property {{delay?:number,easing?:springEasing,repeat?:number|Infinity}} [transition]
 * @property {animationOptions} [initial] - used as <move/> initial animation options
 * @property {animationOptions} [mounted] - used when <Motion/> is mounted on the Dom
 * @property {animationOptions} [unmounted] - used when <Motion/> is unmounting
 * @property {React.HTMLAttributes<any>} [otherProps]
 */

/**
 * @typedef Canceller
 * @property {number} id
 */



/**
 * @typedef AnimateSpringArgs
 * @property {any} element
 * @property {boolean} visible
 * @property {number} [duration]
 */
