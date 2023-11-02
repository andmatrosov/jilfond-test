import { useDispatch, useSelector } from 'react-redux';
import styles from './MainWrapper.module.scss';
import { fetchUsers } from '../../redux/usersSlice';
import { useEffect } from 'react';

const MainWrapper = (props) => {
    return <div className={styles.wrapper}>{props.children}</div>;
};

export default MainWrapper;
