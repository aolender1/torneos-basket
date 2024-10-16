import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Desarrollado y mantenido por aolender |{' '}
        <a href="https://github.com/aolender1/" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;