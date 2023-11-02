import { Link } from 'react-router-dom';
import styles from './SearchItem.module.scss';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/usersSlice';

const SearchItem = ({ name, email, id }) => {
    const dispatch = useDispatch();

    const onClickUserItem = () => {
        dispatch(setCurrentUser(id));
    };

    return (
        <li className={styles.item}>
            <Link to={`/user/${id}`} onClick={() => onClickUserItem()}>
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
