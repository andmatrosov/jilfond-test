import { Link } from 'react-router-dom';
import styles from './SearchItem.module.scss';

const SearchItem = ({ name, email, id }) => {
    return (
        <li className={styles.item}>
            <Link to={`/user/${id}`}>
                <div className={styles.itemImg}>
                    <img src="/img/photo-placeholder--small.jpg" alt="" />
                </div>
                <div className={styles.info}>
                    <h4 title={name}>{name}</h4>
                    <p title={email}>{email}</p>
                </div>
            </Link>
        </li>
    );
};

export default SearchItem;
