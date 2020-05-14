import React from 'react';
import styles from './Footer.module.css'


const Footer = () => {
    return ( 
        <footer className={styles.footer}>
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