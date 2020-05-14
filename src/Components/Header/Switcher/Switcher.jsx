import React from 'react';
import styles from './Switcher.module.css'

const Switcher = () => {
    return ( 
        <div className={styles.modeSwitcher}>
            <p className={styles.fieldset}>
                <input type="radio" value="light" id="light" defaultChecked></input>
                <label htmlFor="light"><ion-icon name="sunny-outline"></ion-icon></label>
                <input type="radio" value="dark" id="dark"></input>
                <label htmlFor="dark"><ion-icon name="moon-outline"></ion-icon></label>
                <span className={styles.switch}></span>
            </p>
        </div>
     );
}
 
export default Switcher;