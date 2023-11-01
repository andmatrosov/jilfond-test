import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import styles from './Input.module.scss';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../redux/usersSlice';

const SidebarInput = ({ placeholder }) => {
    const [searchValue, setSearchValue] = useState('');
    const [inputError, setInputError] = useState(false);
    const dispatch = useDispatch();

    const onChangeInput = (event) => {
        const value = event.target.value;
        setSearchValue(value);
    };

    const updateSearchValue = useCallback(
        debounce((str) => {
            const arr = str
                .split(',')
                .map((item) => (parseInt(item) ? parseInt(item) : item.trim()))
                .filter((item) => item !== '');

            let arrType = '';
            let error = false;

            const searchRequest = arr.reduce((acc, item, indx, arr) => {
                const isNumber = typeof item === 'number';
                const isSametype = typeof item === arrType;
                arrType === ''
                    ? (arrType = isNumber ? 'number' : 'string')
                    : (error = !error ? (isSametype ? false : true) : true);

                if (!error) {
                    acc.push(isNumber ? item : item.toLowerCase());
                }
                return acc;
            }, []);

            setInputError(error);
            dispatch(setSearch(searchRequest));
        }, 500),
        [],
    );

    useEffect(() => {
        updateSearchValue(searchValue);
    }, [searchValue]);

    return (
        <div className={styles.root}>
            <input
                type="text"
                value={searchValue}
                onChange={(e) => onChangeInput(e)}
                placeholder={placeholder}
            />
            {inputError && (
                <p className={`${styles.error} `}>
                    Используйте для поиска только id или только имена
                </p>
            )}
        </div>
    );
};

export default SidebarInput;
