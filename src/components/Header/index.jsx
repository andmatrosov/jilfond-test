import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <Link to="/">
                <span className={styles.logo}>Жилфонд</span>
            </Link>

            <span>Пользователь</span>
        </div>
    );
};

export default Header;
