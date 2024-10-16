import React, { useState } from 'react';
import Nav from './Nav';
import styles from './Header.module.css';

const Header = () => {
  const [selectedTournament, setSelectedTournament] = useState('Ibarreta Primera Masculino');

  const handleSelectTournament = (tournament) => {
    setSelectedTournament(tournament);
  };

  return (
    <header className={styles.header}>
      <Nav onSelectTournament={handleSelectTournament} />
      <div className={styles.headerText}>
        <p>{selectedTournament}</p>
      </div>
    </header>
  );
};

export default Header;