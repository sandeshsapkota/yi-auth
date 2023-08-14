import React, {FC, ReactNode, useEffect, useRef} from 'react';

/*
	for accessibility
 	1. this component repeats focusing of <div[tabindex]> tag which are inside this component
 	2. also calls the handleClickOutside function (if passed a callback function) - setOpen(which accept a boolean param)
 */

const TAB_KEY = 9;

interface FocusTrapProps {
    setOpen?: (value: boolean) => void
    children: ReactNode
    classes?: string
}

const FocusTrap: FC<FocusTrapProps> = (props) => {
    const trapContainerRef = useRef<HTMLDivElement>(null);
    const {classes, setOpen} = props;

    const keyboardHandler = (e: any) => {
        if (e.keyCode === TAB_KEY) {
            if (trapContainerRef && trapContainerRef.current) {
                const children: NodeListOf<HTMLDivElement> = trapContainerRef.current.querySelectorAll('div[tabindex]');
                if (children.length) {
                    const firstFocusableEl = children[0];
                    const lastFocusableEl = children[children.length - 1];
                    if (e.shiftKey && document.activeElement === firstFocusableEl) {
                        children[children.length - 1].focus();
                        e.preventDefault();
                    } else if (!e.shiftKey && document.activeElement === lastFocusableEl) {
                        children[0].focus();
                        e.preventDefault();
                    }
                }
            }
        }
    };

    const handleClickOutside = (event: any) => {
        if (trapContainerRef.current && !trapContainerRef.current.contains(event.target)) {
            if (setOpen) {
                setOpen(false);
            }
        }
    }

    useEffect(() => {
        if (trapContainerRef && trapContainerRef.current) {
            trapContainerRef.current.addEventListener('keydown', keyboardHandler);
        }

        return () => {
            if (trapContainerRef && trapContainerRef.current) {
                trapContainerRef.current.removeEventListener('keydown', keyboardHandler);
            }
        };
    }, []);

    useEffect(() => {
        if (setOpen) {
            document.addEventListener('click', handleClickOutside);
            return () => {
                document.removeEventListener('click', handleClickOutside);
            };
        }
    }, []);


    return (
        <div className={classes} ref={trapContainerRef}>
            {props.children}
        </div>
    );
};

export default FocusTrap;
