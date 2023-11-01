import style from './Title.module.scss';

const Title = ({ children }) => {
    return <h4 className={style.title}>{children}</h4>;
};

export default Title;
