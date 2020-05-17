import React from 'react';
import styles from './Footer.module.css'


const Footer = ({theme}) => {
    return ( 
        <footer className={theme === 'light' ? styles.light : styles.dark}>
            <div>
                Built with <span role="img" alt="love" aria-label="">&#10084;&#65039;</span> 
            </div>
            <div>
                © 2020 by <a href="https://dimianni.github.io/">Dimianni</a>.
            </div>
        </footer>
     );
}
 
export default Footer;