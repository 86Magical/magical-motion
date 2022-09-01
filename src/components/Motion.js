//@ts-nocheck
import { createElement, memo, useLayoutEffect, useRef, useState } from 'react';
import { createMagicalSpringAnimation } from '../utility';
const Motion = (
    {
        as='',
        children=null,
        wait = {},
        transitions = {},
        configure = {},
        initial = {},
        animate = {},
        onFinish = () => null,
        ...otherProps
    }
) =>
{

    const motion = useRef( null );
    const isMountedOnce = useRef( false );
    const [ canMountNow, setCanMountNow ] = useState( false );
    const Component = as || 'main';
    const timer = useRef( null );
    useLayoutEffect( () =>
    {
        if ( isMountedOnce.current )
        {

            if ( typeof transitions.waitFor === 'number' )
            {
                setTimeout( () =>
                {
                    setCanMountNow( true );
                    if ( configure.name )
                    {

                        window[ configure.name ] = configure.name;
                    }
                }, transitions.waitFor );
            }
            else if ( typeof transitions.waitFor === 'string' )
            {

                timer.current = setInterval( () =>
                {
                    console.log( window[ transitions.waitFor ] );
                    if ( window[ transitions.waitFor ] )
                    {
                        clearInterval( timer.current );
                        setCanMountNow( true );
                    }
                }, 1 );

            }
            else{
                setCanMountNow(true)
            }
            if ( canMountNow )
            {
                createMagicalSpringAnimation( motion, {
                    initial,
                    animate,
                    configure,
                    transitions,
                    others: {
                        onFinish: onFinish,
                    }
                } );
            }
        }
        return () =>
        {
            isMountedOnce.current = true;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ canMountNow ] );
    return (
        canMountNow && createElement( Component, { ref: motion, children, ...otherProps } ) 
    );
};

export default memo( Motion );