import "../types";
/**
 * @function createMagicalSpring
 * @param {SpringProps} props
 * @returns {SpringKeyFrames}
 */
export const createMagicalSpring = ( {
    dx = 0,
    dy = 0,
    rotate = 0,
    scale = 0,
    stiffness = 0,
    damping = 0,
    mass = 0
} ) =>
{
    if ( dx === 0 && dy === 0 )
    {
        // no animation is happening atm
        return { keyframes: [], frames: 0 };
    }
    const spring_length = 0;
    const k = -stiffness;
    const d = -damping;
    const frame_rate = 1 / 60;

    // velocity for each parameter
    let velocity_dx = 0;
    let velocity_dy = 0;
    let velocity_rotate = 0;
    let velocity_scale = 0;

    /** @type {{transform:string}[]} */
    let keyframes = [];

    // frames
    let frames = 0;
    while ( frames < 7000 )
    {
        let Fspring_dx = k * ( dx - spring_length );
        let Fspring_dy = k * ( dy - spring_length );
        let Fspring_rotate = k * ( rotate - spring_length );
        let Fspring_scale = k * ( scale - spring_length );
        let Fdamping_dx = d * velocity_dx;
        let Fdamping_dy = d * velocity_dy;
        let Fdamping_rotate = d * velocity_rotate;
        let Fdamping_scale = d * velocity_scale;

        let accel_x = ( Fspring_dx + Fdamping_dx ) / mass;
        let accel_y = ( Fspring_dy + Fdamping_dy ) / mass;
        let accel_r = ( Fspring_rotate + Fdamping_rotate ) / mass;
        let accel_s = ( Fspring_scale + Fdamping_scale ) / mass;

        velocity_dx += accel_x * frame_rate;
        velocity_dy += accel_y * frame_rate;
        velocity_rotate += accel_r * frame_rate;
        velocity_scale += accel_s * frame_rate;

        dx += velocity_dx * frame_rate;
        dy += velocity_dy * frame_rate;
        rotate += velocity_rotate * frame_rate;
        scale += velocity_scale * frame_rate;
        frames++;

        keyframes.push( {
            transform: `translate(${ dx }px, ${ dy }px) rotate(${ rotate }deg) scale(${ scale + 1
                })`
        } );
    }
    if ( frames === 0 )
    {
        frames = 1000;
    }

    return { keyframes: keyframes, frames };
};
