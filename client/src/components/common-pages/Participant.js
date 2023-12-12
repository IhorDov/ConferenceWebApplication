import styles from './Participant.module.css';

function Participant({ Navn, Mail, Hvorerduansat }) {
    return (
        <div>
            {Mail !== null &&
                Mail !== undefined &&
                Navn !== null &&
                Navn !== undefined &&
                Hvorerduansat !== null &&
                Hvorerduansat !== undefined && (
                    <div className={styles.card}>
                        <h3>Email: {Mail}</h3>
                        <h3>Name: {Navn}</h3>
                        <h3>Working Place: {Hvorerduansat}</h3>
                    </div>
                )}
        </div>
    );
}

export default Participant;
