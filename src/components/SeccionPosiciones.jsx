import React from 'react';
import TablaPosiciones from './TablaPosiciones';
import styles from './SeccionPosiciones.module.css';

const SeccionPosiciones = () => {
  const equipos = [
    { nombre: 'Leones', partidosJugados: 6, partidosGanados: 6, partidosPerdidos: 0, puntosFavor: 400, puntosContra: 300 },
    { nombre: 'Huracan', partidosJugados: 6, partidosGanados: 3, partidosPerdidos: 3, puntosFavor: 350, puntosContra: 310 },
    { nombre: 'Libertad', partidosJugados: 6, partidosGanados: 3, partidosPerdidos: 3, puntosFavor: 340, puntosContra: 305 },
    { nombre: 'Sarmiento', partidosJugados: 6, partidosGanados: 0, partidosPerdidos: 6, puntosFavor: 280, puntosContra: 450 },
  ];

  return (
    <section className={styles.seccionPosiciones}>
      <h2 className={styles.titulo}>Tabla de Posiciones</h2>
      <TablaPosiciones equipos={equipos} />
      <p className={styles.explicacion}>
        N° (posición del equipo en la tabla). Equipo (nombre del equipo). P.J. (número de partidos jugados). P.G. (número de partidos ganados). P.P. (número de partidos perdidos). P.F. (cantidad de puntos a favor). P.C. (cantidad de puntos en contra). Puntos (la sumatoria de puntos, partido ganado suma +2 y partido perdido suma +1).
      </p>
    </section>
  );
};

export default SeccionPosiciones;