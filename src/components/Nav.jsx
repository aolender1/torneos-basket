import React from 'react';
import styles from './Nav.module.css';

const Nav = ({ onSelectTournament }) => {
  const tournaments = ['Ibarreta Primera Masculino', 'Ibarreta Primera Femenino', 'Formosa +35', 'Castelli Chaco Primera']; // Array de Torneos

  const handleSelectTournament = (tournament) => {
    onSelectTournament(tournament);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.dropdownContainer}>
        <button className={styles.button}>
          Torneos
        </button>
        <ul className={styles.dropdown}>
          {tournaments.map((tournament, index) => (
            <li key={index} onClick={() => handleSelectTournament(tournament)}>
              {tournament}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;