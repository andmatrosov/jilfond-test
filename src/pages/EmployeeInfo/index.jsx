import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../redux/usersSlice';
import { useEffect } from 'react';

import styles from './EmployeeInfo.module.scss';

const EmployeeInfo = () => {
    const { currentUser } = useSelector((state) => state.users);

    return (
        <>
            {currentUser ? (
                <div className={styles.root}>
                    <div className={`${styles.side} ${styles.sideLeft}`}>
                        <img className={styles.img} src="./img/photo-placeholder.jpg" alt="" />
                    </div>
                    <div className={`${styles.side} ${styles.sideRight}`}>
                        <h3>{currentUser.name}</h3>
                        <p>
                            <strong>email:</strong> {currentUser.email}
                        </p>
                        <p>
                            <strong>phone:</strong> {currentUser.phone}
                        </p>
                        <h3>О себе:</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati esse
                            asperiores sed saepe magnam nulla dignissimos consectetur repudiandae
                            voluptas itaque? Veritatis explicabo quaerat aut quis optio, recusandae
                            nemo expedita nihil. Laboriosam voluptas maxime optio nostrum quisquam
                            dignissimos dolorum omnis delectus.
                        </p>
                    </div>
                </div>
            ) : (
                <div className={styles.error}>
                    <h2>Упс! 🤭</h2>
                    <p>Такого пользователя не существует.</p>
                </div>
            )}
        </>
    );
};

export default EmployeeInfo;
