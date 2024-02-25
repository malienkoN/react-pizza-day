import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button";
import TextInput from "../TextInput";

const LoginForm = () => {
    const [username, setUserName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(username);
        navigate("/menu");
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <TextInput
                placeholder="Your full name"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
            />
            <Button type="submit">Login</Button>
        </form>
    );
};

export default LoginForm;
