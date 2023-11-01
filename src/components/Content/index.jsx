import { Routes, Route } from 'react-router-dom';

import styles from './Content.module.scss';
import EmptyContent from '../../pages/EmptyContent';
import EmployeeInfo from '../../pages/EmployeeInfo';
import NotFound from '../../pages/NotFound';

const Contetn = () => {
    return (
        <div className={styles.root}>
            <Routes>
                <Route path="/" element={<EmptyContent />} />
                <Route path="/user" element={<EmptyContent />} />
                <Route path="/user/:id" element={<EmployeeInfo />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/404" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default Contetn;
