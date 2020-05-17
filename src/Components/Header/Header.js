import React from 'react';
import styles from './Header.module.css';
import Logo from './Dimianni.svg';


const Header = ({ themeSwitcher, theme }) => {

    // Class Switcher
    let btnClasses = [`${styles.def}`]

    if (theme === 'dark') {
        btnClasses.push(`${styles.darkMode}`)
    } else {
        btnClasses = [`${styles.def}`]
    }


    
    return (
        <div className={theme === 'light' ? styles.light : styles.dark}>
            <div className={styles.headerContainer}>
                <img alt="dimianni" src={Logo} className={styles.logo}></img>

                {/* Callback functions in React: */}
                {/* https://medium.com/@thejasonfile/callback-functions-in-react-e822ebede766 */}

                {/* Passing back info to the parent component */}
                <button onClick={() => themeSwitcher()} className={btnClasses.join(' ')}>Mode: 
                    {theme === 'light' ? <ion-icon name="sunny"></ion-icon> : <ion-icon name="moon"></ion-icon>}
                </button>
            </div>
        </div>
    );
}

export default Header;