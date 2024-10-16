import React from 'react';
import SeccionPosiciones from './SeccionPosiciones';
import SeccionPartidos from './SeccionPartidos';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <SeccionPosiciones />
      <SeccionPartidos />
    </main>
  );
};

export default Main;