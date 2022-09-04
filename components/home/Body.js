/* eslint-disable @next/next/no-img-element */
import s from "../../styles/body.module.scss";
import Banner from "../Banner";
export default function Body() {
  return (
    <div className={s.cuerpo}>
      <div className={s.cuerpo_titulo}>
        <img src="/image/nombre_firma.svg" alt="firma" />
        <h2>Espacio de salud, cuerpo y mente</h2>
        <p>
          BienEstar es un espacio creado con la firme certeza de que el Pilates y el Yoga son necesarios para mantener un óptimo estado de
          salud que el ritmo de vida que llevamos nos arrebata. Extendiendo esta visión a todos los ámbitos de la vida diaria, con un trato
          personal y adaptando nuestro servicio a las necesidades de cada alumno.
        </p>
        <p>
          Por eso ofrecemos amplitud de horarios y cambios de turnos según las necesidades, para que sea cual sea tu ocupación y horario
          laboral puedas combinarlo con tu práctica. Nuestros grupos son reducidos, para una meticulosa práctica y seguimiento personal
          persiguiendo la necesidad y objetivo de cada alumno.
        </p>
      </div>
      <div className={s.cuerpo_about}>
        <h3>Dirección y Gestión</h3>
        <h4>Karina Moro Rossi</h4>
        <img src="/image/kary.jpg" alt="" />
        <p>Propietaria - Directora</p>
        <p>Profesora de Yoga</p>
        <p>Instructora de Pilates</p>
      </div>
      <Banner />
    </div>
  );
}
