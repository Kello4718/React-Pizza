import { ErrorResponse, useRouteError } from "react-router-dom";
import ButtonLink from "../ui/ButtonLink";

const Error = () => {
    const error = useRouteError() as ErrorResponse;
    return (
        <div className="mx-auto w-full max-w-screen-xl px-4 py-6 text-center">
            <h1 className="mb-8 text-xl font-semibold">
                Something went wrong 😢
            </h1>
            <p className="mb-4 text-base">{error.message}</p>
            {/* TODO */}
            <ButtonLink to="-1">&larr; Go back</ButtonLink>
        </div>
    );
};

export default Error;
