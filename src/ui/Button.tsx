import { MouseEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ClassesByType, ClassesByTypeKeys } from "../components/types/types";

type ButtonProps = {
    disabled?: boolean;
    children: ReactNode;
    to?: string;
    type?: ClassesByTypeKeys;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const baseClasses =
    "inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

const classesByType: ClassesByType = {
    primary: baseClasses + " px-4 py-3 sm:px-6 sm:py-4",
    round: baseClasses + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
        "inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
    small: baseClasses + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
};

const Button = ({ disabled, children, to, type, onClick }: ButtonProps) => {
    if (to) {
        return (
            <Link
                to={to}
                className={classesByType[type as keyof ClassesByType]}
            >
                {children}
            </Link>
        );
    }
    if (onClick) {
        return (
            <button
                disabled={disabled}
                className={classesByType[type as keyof ClassesByType]}
                onClick={onClick}
            >
                {children}
            </button>
        );
    }

    return (
        <button
            disabled={disabled}
            className={classesByType[type as keyof ClassesByType]}
        >
            {children}
        </button>
    );
};

export default Button;
