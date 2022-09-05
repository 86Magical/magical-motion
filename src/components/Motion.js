import { createElement, memo, useLayoutEffect, useRef, useState } from 'react';
import { createMagicalSpringAnimation } from '../utility';
import '../types';

/**
 * 
 * @param {motionProp & otherAnimationsProp} motionProp 
 * @returns {React.ReactElement<any, string | React.JSXElementConstructor<any>> | null}
 */
const Motion = (
    {
        as = '',
        children = null,
        transitions = {},
        configure = {},
        initial = {},
        animate = {},
        onAnimationFinish = () => null,
        ...otherProps
    }
) =>
{

    const motion = useRef( null );
    const isMountedOnce = useRef( false );
    const [ canMountNow, setCanMountNow ] = useState( false );
    const Component = as || 'main';
    const timer = useRef( setInterval( () =>
    {

    } ) );
    useLayoutEffect( () =>
    {
        if ( isMountedOnce.current )
        {
            switch ( typeof transitions.waitFor )
            {
                case 'number':
                    setTimeout( () =>
                    {
                        setCanMountNow( true );

                    }, transitions.waitFor );
                    break;
                case 'string':
                    const motionPromise = new Promise( ( resolve ) =>
                    {
                        timer.current = setInterval( () =>
                        {
                            // @ts-ignore
                            if ( window[ transitions.waitFor ] )
                            {
                                clearInterval( timer.current );
                                resolve( transitions.waitFor );
                            }
                        } );

                    } );
                    motionPromise.then( () =>
                    {
                        setCanMountNow( true );
                    } );
                    break;
                default:
                    setCanMountNow( true );
            }
            if ( canMountNow )
            {
                createMagicalSpringAnimation( motion, {
                    initial,
                    animate,
                    configure,
                    transitions,
                    others: {
                        onAnimationFinish: onAnimationFinish,
                    }
                } );
                if ( configure.name )
                {

                    // @ts-ignore
                    window[ configure.name ] = configure.name;
                }
            }
        }
        return () =>
        {
            isMountedOnce.current = true;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ canMountNow ] );
    return (
        canMountNow ? createElement( Component, { ref: motion, children, ...otherProps } ) : null
    );
};

export default memo( Motion );