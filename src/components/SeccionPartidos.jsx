import React from 'react';
import Partidos from './Partidos';
import listaPartidos from './ListaPartidos';
import styles from './SeccionPartidos.module.css';

const SeccionPartidos = () => {
  return (
    <section className={styles.seccionPartidos}>
      <h2 className={styles.titulo}>Partidos</h2>
      <Partidos partidos={listaPartidos} />
    </section>
  );
};

export default SeccionPartidos;