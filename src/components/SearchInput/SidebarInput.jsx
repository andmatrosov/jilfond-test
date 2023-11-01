import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import styles from './Input.module.scss';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../redux/usersSlice';

export const SidebarInput = ({ placeholder }) => {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    const onChangeInput = (event) => {
        setSearchValue(event.target.value);
    };

    const updateSearchValue = useCallback(
        debounce((str) => {
            const arr = str
                .split(',')
                .map((item) => (parseInt(item) ? parseInt(item) : item.trim()));

            const arrType = '';

            const searchRequest = arr.reduce((acc, item, indx, arr) => {
                const isNumber = typeof item === 'number';
                arrType === '' ? (isNumber ? 'number' : 'string') : null;
                console.log(arrType);
            });

            // const searchRequest = arr.reduce((acc, item, indx, arr) => {
            //     const isNumber = typeof item === 'number';
            //     const itemVal = `${isNumber ? 'id' : 'name'}=${
            //         isNumber ? item : item.charAt(0).toUpperCase() + str.slice(1)
            //     }${indx !== arr.length - 1 ? '&' : ''}`;
            //     return acc + itemVal;
            // }, '');
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
        </div>
    );
};
