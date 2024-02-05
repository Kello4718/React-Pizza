import { ErrorResponse, useRouteError } from "react-router-dom";
import ButtonLink from "../ui/ButtonLink";

const Error = () => {
    const error = useRouteError() as ErrorResponse;
    return (
        <div>
            <h1>Something went wrong 😢</h1>
            <p>{error.message}</p>
            <ButtonLink to="-1">&larr; Go back</ButtonLink>
        </div>
    );
};

export default Error;
