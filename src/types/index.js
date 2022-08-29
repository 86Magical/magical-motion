/**
 * @typedef {{damping?:number , stiffness?:number , mass?:number,FPS?:number}} SpringSpringOptions - spring options for stiffness/elasticity of spring, mass and damping
 */
/**
 * @typedef SpringProps
 * @property {number} [x] -  horizontal  direction
 * @property {number} [y] -  vertical  direction
 * @property {number} [rotate] - css rotate prop
 * @property {number} [scale] - css transform prop
 * @property {{from:number,to:number}} [opacity] - css transform prop
 * @property {number} [scaleX] - css transform scaleX prop
 * @property {number} [scaleY] - css transform scaleY prop
 * @property {number} [stiffness] - elasticity of the string
 * @property {number} [damping] - damping force to slow down animation FPS
 * @property {number} [mass] - weight of the object
 * @property {number} [FPS] - Amount of frames to generate per second higher FPS = smoother animation
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
 * @property {number} [scaleX]
 *  @property {number} [scaleY]
 * @property {number} [rotate]
 * @property {{from?:number,to?:number}} [opacity] - css transform prop
 * @property {number} [duration]
 */
/**
 * @typedef MotionComponentProps
 * @property {React.ElementType} [as]
 * @property {number} [duration]
 * @property {string} [debugName]
 * @property {React.ReactNode} children
 * @property {SpringSpringOptions} [configure]
 * @property {(()=>void)} [onFinish]
 * @property {{direction?:PlaybackDirection,delay?:number,repeat?:number|Infinity}} [transition]
 * @property {animationOptions} [initial] - used as <move/> initial animation options
 * @property {animationOptions} [animate] - used when <Motion/> is mounted on the Dom
 * @property {animationOptions} [unmounted] - used when <Motion/> is unmounting
 * @property {React.HTMLAttributes<any>} [otherProps]
 */