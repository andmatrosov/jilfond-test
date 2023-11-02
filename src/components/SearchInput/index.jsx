import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import styles from './Input.module.scss';
import { useDispatch } from 'react-redux';
import { fetchUsers, clearStategot } from '../../redux/usersSlice';
import { useNavigate } from 'react-router-dom';
import crossIcon from '/cross.svg';

const SidebarInput = ({ placeholder }) => {
    const [searchValue, setSearchValue] = useState('');
    const [inputError, setInputError] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onChangeInput = (event) => {
        const value = event.target.value;
        setSearchValue(value);
        if (!value) {
            dispatch(clearState());
            setInputError(false);
            return navigate('/');
        }
    };

    const updateSearchValue = useCallback(
        debounce((str) => {
            const arr = processInputString(str);
            const { searchRequest, error } = generateSearchRequest(arr);

            setInputError(error);
            if (searchRequest.length) {
                dispatch(fetchUsers(searchRequest));
            }
        }, 500),
        [],
    );

    const processInputString = (str) => {
        return str
            .split(',')
            .map((item) => (parseInt(item) ? parseInt(item) : item.trim()))
            .filter((item) => item !== '');
    };

    const generateSearchRequest = (arr) => {
        let arrType = '';
        let error = false;

        const searchRequest = arr.reduce((acc, item, indx, arr) => {
            const isNumber = typeof item === 'number';
            const isSametype = typeof item === arrType;
            arrType === ''
                ? (arrType = isNumber ? 'number' : 'string')
                : (error = !error ? (isSametype ? false : true) : true);

            if (!error) {
                acc += `${indx === 0 ? '/?' : ''}${isNumber ? 'id' : 'username'}=${item}${
                    indx !== arr.length - 1 ? '&' : ''
                }`;
                console.log(acc);
            }
            return acc;
        }, '');

        return { searchRequest, error };
    };

    const inputClear = () => {
        setSearchValue('');
        dispatch(clearState());
        return navigate('/');
    };

    useEffect(() => {
        updateSearchValue(searchValue);
        if (searchValue.lenght) {
            dispatch(clearState());
            return navigate('/');
        }
    }, [searchValue]);

    return (
        <div className={styles.root}>
            <input
                type="text"
                value={searchValue}
                onChange={(e) => onChangeInput(e)}
                placeholder={placeholder}
            />
            {searchValue.length > 0 && (
                <button className={styles.clear} onClick={() => inputClear()}>
                    <img width="20" heigth="20" src={crossIcon} alt="" />
                </button>
            )}
            {inputError && (
                <p className={`${styles.error} `}>
                    Используйте для поиска только id или только username
                </p>
            )}
        </div>
    );
};

export default SidebarInput;
