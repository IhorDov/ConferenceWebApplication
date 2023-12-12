import styles from './Input.module.css';

function Input(props) {
    const { disabled = false } = props;

    return <input {...props} className={styles.input} disabled={disabled} />;
}

export default Input;
