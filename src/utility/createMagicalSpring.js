import { isValidCssProp } from "./validCssProp";
import '../types';


/**
 * @function createMagicalSpring
 * @param {createMagicalSpringProp} createMagicalSpringProps
 * @returns {{frames: number,keyframes: {transform: string}[]}} 
 */
export const createMagicalSpring = ( { initial, animate, configure } ) =>
{
    let {
        x = 0,
        y = 0,
        rotate = 0,
        scale = 0,
        scaleX = 0,
        scaleY = 0,
    } = animate;
    let { stiffness = 100, damping = 10, mass = 1, FPS = 150 } = configure;
    const spring_length = 0;
    const k = -stiffness;
    const d = -damping;
    const frame_rate = 1 / 60;
    // velocity for each parameter 
    let velocity_x = 0;
    let velocity_y = 0;
    let velocity_rotate = 0;
    let velocity_scale = 0;
    let velocity_scaleX = 0;
    let velocity_scaleY = 0;
    /** @type {{transform:string}[]} */
    let keyframes = [];
    // frames 
    let frames = 0;
    while ( frames < FPS )
    {
        let Fspring_x = k * ( x + spring_length );
        let Fspring_y = k * ( y + spring_length );
        let Fspring_rotate = k * ( rotate + spring_length );
        let Fspring_scale = k * ( scale + spring_length );
        let Fspring_scaleX = k * ( scaleX + spring_length );
        let Fspring_scaleY = k * ( scaleY + spring_length );
        let Fdamping_x = d * velocity_x;
        let Fdamping_y = d * velocity_y;
        let Fdamping_rotate = d * velocity_rotate;
        let Fdamping_scale = d * velocity_scale;
        let Fdamping_scaleX = d * velocity_scaleX;
        let Fdamping_scaleY = d * velocity_scaleY;
        let accel_x = ( Fspring_x - Fdamping_x ) / mass;
        let accel_y = ( Fspring_y - Fdamping_y ) / mass;
        let accel_r = ( Fspring_rotate - Fdamping_rotate ) / mass;
        let accel_s = ( Fspring_scale - Fdamping_scale ) / mass;
        let accel_sX = ( Fspring_scaleX - Fdamping_scaleX ) / mass;
        let accel_sY = ( Fspring_scaleY - Fdamping_scaleY ) / mass;
        velocity_x -= accel_x * frame_rate;
        velocity_y -= accel_y * frame_rate;
        velocity_rotate -= accel_r * frame_rate;
        velocity_scale -= accel_s * frame_rate;
        velocity_scaleX -= accel_sX * frame_rate;
        velocity_scaleY -= accel_sY * frame_rate;
        x -= velocity_x * frame_rate;
        y -= velocity_y * frame_rate;
        rotate -= velocity_rotate * frame_rate;
        scale -= velocity_scale * frame_rate;
        scaleX -= velocity_scaleX * frame_rate;
        scaleY -= velocity_scaleY * frame_rate;
        frames++;
        keyframes.push( {
            transform: `translate(${ x }px, ${ y }px) rotate(${ rotate }deg) scale(${ scale + 1 }) scaleX(${ scaleX + 1 }) scaleY(${ scaleY + 1 })`,
        } );
    } if ( keyframes.length === FPS )
    {
        //only run after we're done generating keyframes 
        for ( const member in initial )
        {
            if ( isValidCssProp( member ) )
            {
                //we do not want to animate any css prop in initial
                //we only want it to be the starting point of our animation
                //eg opacity: 0
                // @ts-ignore
                keyframes[ 0 ][ member ] = initial[ member ];
            }
        }
        for ( const member in animate )
        {
            if ( isValidCssProp( member ) )
            {
                // checking if prop from initial is a valid css prop // if true,, apply styles else ignore
                // @ts-ignore
                keyframes[ keyframes.length - 1 ][ member ] = animate[ member ];
            }

        }
    }
    return {
        keyframes,
        frames
    };
};