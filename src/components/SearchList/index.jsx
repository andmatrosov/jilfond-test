import SearchItem from '../SearchItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchUsers, selectFilteredUsers } from '../../redux/usersSlice';

import styles from './SearchList.module.scss';

const SearchList = () => {
    const dispatch = useDispatch();
    const { search, status } = useSelector((state) => state.users);
    const usersState = useSelector((state) => state.users);
    const [usersList, setUsersList] = useState([]);

    const getUserList = () => {
        dispatch(fetchUsers());
        setUsersList(selectFilteredUsers(usersState));
    };

    useEffect(() => {
        getUserList();
    }, [search]);

    return (
        <div className={styles.wrapper}>
            {usersList.length > 0 ? (
                <ul className={styles.root}>
                    {usersList.map((user, indx) => {
                        return <SearchItem key={indx} {...user} />;
                    })}
                </ul>
            ) : status === 'success' && !usersList.length && search.length ? (
                <p>Пользователи не найдены</p>
            ) : status !== 'loading' ? (
                <p>Начните поиск</p>
            ) : (
                <p>Загрузка...</p>
            )}
        </div>
    );
};

export default SearchList;
