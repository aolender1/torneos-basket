import React from 'react';
import styles from './TablaPosiciones.module.css';

const TablaPosiciones = ({ equipos }) => {
  return (
    <table className={styles.tablaPosiciones}>
      <thead>
        <tr>
          <th>N°</th>
          <th>Equipo</th>
          <th>P.J.</th>
          <th>P.G.</th>
          <th>P.P.</th>
          <th>P.F.</th>
          <th>P.C.</th>
          <th>Puntos</th>
        </tr>
      </thead>
      <tbody>
        {equipos.map((equipo, index) => (
          <tr key={equipo.nombre}>
            <td>{index + 1}</td>
            <td>{equipo.nombre}</td>
            <td>{equipo.partidosJugados}</td>
            <td>{equipo.partidosGanados}</td>
            <td>{equipo.partidosPerdidos}</td>
            <td>{equipo.puntosFavor}</td>
            <td>{equipo.puntosContra}</td>
            <td>{equipo.partidosGanados * 2 + equipo.partidosPerdidos}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaPosiciones;