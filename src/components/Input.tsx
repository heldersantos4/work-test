import clsx from "clsx";
import React, { forwardRef } from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    classnames?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>( (props, ref) => {
    return (
        <input
            ref={ref}
            className={clsx("w-full px-3 py-1 rounded-md bg-transparent ring ring-zinc-800 hover:ring-zinc-700 focus:ring-blue-500 placeholder:text-zinc-600", props.classnames)}
            {...props}
        />
    );
});