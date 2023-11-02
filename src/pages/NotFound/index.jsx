import styles from './NotFound.module.scss';

const NotFound = () => {
    return (
        <div className={styles.root}>
            <h1>404</h1>
            <p>Увы! Здесь ничего нет 😞</p>
        </div>
    );
};

export default NotFound;
