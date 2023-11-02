import SearchItem from '../SearchItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// import { fetchUsers } from '../../redux/usersSlice';

import styles from './SearchList.module.scss';

const SearchList = () => {
    const { status } = useSelector((state) => state.users);
    const { users, currentUser } = useSelector((state) => state.users);
    const [usersList, setUsersList] = useState([]);

    const getUserList = () => {
        if (users.length > 0) {
            setUsersList(users);
        } else {
            setUsersList([]);
        }
    };

    useEffect(() => {
        getUserList();
    }, [users, currentUser]);

    const defaultText = <p>Начните поиск</p>;

    return (
        <div className={styles.wrapper}>
            {status === 'loading' ? (
                <p>Загрузка...</p>
            ) : status === 'success' ? (
                usersList.length > 0 ? (
                    <ul className={styles.root}>
                        {usersList.map((user, indx) => {
                            return <SearchItem key={indx} {...user} />;
                        })}
                    </ul>
                ) : (
                    <p>Совпадений не найдено</p>
                )
            ) : (
                defaultText
            )}
        </div>
    );
};

export default SearchList;
