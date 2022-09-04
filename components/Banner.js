/* eslint-disable @next/next/no-img-element */
import s from "../styles/banner.module.scss";

export default function Banner() {
  return (
    <div className={s.banner}>
      <div className={s.banner_image}>
        <a href="https://connect.timp.pro/centers/7496-bienestar-pxBCLL" target="_blank" rel="noreferrer">
          <img src="/image/appstore.png" alt="appstore" />
        </a>
      </div>
      <div className={s.banner_text}>
        <h1>Gestiona tus reservas</h1>
        <h3>Olvídate de volver a llamar por teléfono o pedir cita por WhatsApp</h3>
        <h4>¡Descarga la app y gestiona tus reservas!</h4>
      </div>
    </div>
  );
}
