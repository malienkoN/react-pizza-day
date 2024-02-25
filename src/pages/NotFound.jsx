import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <h1>404 Page not found :(</h1>
            <Link to="/">Back to homepage</Link>
        </>
    );
};

export default NotFound;
