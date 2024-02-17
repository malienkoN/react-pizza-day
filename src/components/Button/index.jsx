import PropTypes from "prop-types";

import styles from "./index.module.css";

const Button = (props) => {
    const { type = "button", onClick, disabled = false, children } = props;
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={styles.button}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit"]),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default Button;
