import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
    const error = useRouteError();
    return (
        <div>
            <h1>Something went wrong 😢</h1>
            <p>{isRouteErrorResponse(error) && error.data}</p>
            <button onClick={() => navigate(-1)}>&larr; Go back</button>
        </div>
    );
};

export default Error;
