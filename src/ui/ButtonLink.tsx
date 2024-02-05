import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";

type ButtonLinkProps = {
    to: string;
    children: ReactNode;
};

const ButtonLink = ({ to, children }: ButtonLinkProps) => {
    const navigate = useNavigate();
    if (to === "-1") {
        return (
            <button
                className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
                onClick={() => navigate(-1)}
            >
                {children}
            </button>
        );
    }

    return (
        <Link
            to={to}
            className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
        >
            {children}
        </Link>
    );
};

export default ButtonLink;
