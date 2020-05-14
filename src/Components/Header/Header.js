import React from 'react';
import styles from './Header.module.css';
import Logo from './Dimianni.svg';
import Switcher from './Switcher/Switcher'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <img alt="dimianni" src={Logo} className={styles.logo}></img>
                <Switcher />
            </div>
        </div>
    );
}

export default Header;