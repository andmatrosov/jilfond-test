import { useDispatch, useSelector } from 'react-redux';
import styles from './MainWrapper.module.scss';
import { fetchUsers } from '../../redux/usersSlice';
import { useEffect } from 'react';

const MainWrapper = (props) => {
    const dispatch = useDispatch();
    const { search } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [search]);

    return <div className={styles.wrapper}>{props.children}</div>;
};

export default MainWrapper;
