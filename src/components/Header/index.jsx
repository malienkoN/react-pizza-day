import { Link, NavLink } from "react-router-dom";
// components
import TextInput from "../TextInput";

const Header = () => {
    return (
        <header className="header">
            <Link className="logo" to="/">
                Pizza Day
            </Link>
            <nav>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/menu">Menu</NavLink>
            </nav>
            <form>
                <TextInput placeholder="Search for the order #" />
            </form>
        </header>
    );
};

export default Header;
