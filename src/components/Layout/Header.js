import { Fragment } from "react";
import classes from './Header.module.css';
import mainImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Jam Meals</h1>
            <HeaderCartButton onShowCart={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mainImage} alt="main" />
        </div>
    </Fragment>
};

export default Header;