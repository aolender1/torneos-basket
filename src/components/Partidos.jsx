import React from 'react';
import styles from './Partidos.module.css';

const Partidos = ({ partidos }) => {
  return (
    <table className={styles.tablaPartidos}>
      <thead>
        <tr>
          <th>Fecha / Hora</th>
          <th>Local</th>
          <th>Logo</th>
          <th>Puntos</th>
          <th>Puntos</th>
          <th>Logo</th>
          <th>Visitante</th>
          <th>Campo de Juego</th>
        </tr>
      </thead>
      <tbody>
        {partidos.map((partido, index) => (
          <tr key={index}>
            <td>{partido.fechaHora}</td>
            <td>{partido.local}</td>
            <td><img src={partido.logoLocal} alt={`${partido.local} logo`} className={styles.logo} /></td>
            <td>{partido.puntosLocal}</td>
            <td>{partido.puntosVisitante}</td>
            <td><img src={partido.logoVisitante} alt={`${partido.visitante} logo`} className={styles.logo} /></td>
            <td>{partido.visitante}</td>
            <td>{partido.campoDeJuego}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Partidos;