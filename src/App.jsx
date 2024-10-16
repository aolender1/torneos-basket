import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.content}>
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default App;