import styles from './EmptyContent.module.scss';

const EmptyContent = () => {
    return (
        <div className={styles.root}>
            <p>Выберите сотрудника, чтобы посмотреть его профиль</p>
        </div>
    );
};

export default EmptyContent;
