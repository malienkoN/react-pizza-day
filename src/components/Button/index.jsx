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

export default Button;
