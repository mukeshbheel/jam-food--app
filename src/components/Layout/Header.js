import { Fragment } from "react";
import classes from './Header.module.css';
import mainImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return <Fragment>
        <div className={classes.header}>
            <h1>Jam Meals</h1>
            <HeaderCartButton onShowCart={props.onShowCart} />
        </div>
        <div className={classes['main-image']}>
            <img src={mainImage} alt="main" />
        </div>
    </Fragment>
};

export default Header;