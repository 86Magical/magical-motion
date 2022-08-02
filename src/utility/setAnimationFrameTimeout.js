import '../types'
/**
 * 
 * @param {()=>void} callback 
 * @param {number} timeout 
 * @returns {any}
 */
export function setAnimationFrameTimeout (
    callback,
    timeout = 0
)
{
    const startTime = performance.now();
    /** @type {Canceller} */
    const canceller = { id: 0 };

    function call ()
    {
        canceller.id = requestAnimationFrame( ( now ) =>
        {
            if ( now - startTime > timeout )
            {
                callback();
            } else
            {
                call();
            }
        } );
    }

    call();
    return canceller;
}

/**
 * @param {Canceller} canceller
 */
export function clearAnimationFrameTimeout ( canceller )
{
    if ( canceller.id ) cancelAnimationFrame( canceller.id );
}