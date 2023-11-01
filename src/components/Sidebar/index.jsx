import SearchInput from '../SearchInput';
import SearchList from '../SearchList';
import Title from '../Title';

import styles from './Sidebar.module.scss';

const Sidebar = () => {
    return (
        <div className={styles.root}>
            <Title>Поиск сотрудников</Title>
            <SearchInput placeholder="Введите id или имя" />
            <Title>Результаты</Title>
            <SearchList />
        </div>
    );
};

export default Sidebar;
