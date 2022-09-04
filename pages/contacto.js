/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout";
import useScreenWidth from "../hook/useScreenWidth";
import s from "../styles/contacto.module.scss";

export default function Contacto() {
  return (
    <Layout title={"Contacto"}>
      <div className={s.contact}>
        <div className={s.contact_info}>
          <div className={s.contact_info_address}>
            <div>
              <h1>Visítanos</h1>
              <p>Gral. Sabino Fernández Campo Nº 8</p>
              <p>Oviedo - Asturias</p>
              <p>Junto al parking público C.C. Los Prados</p>
            </div>
            <div>
              <h1>Llámanos</h1>
              <p>(+34) 984 046 397</p>
              <p>(+34) 627 90 81 08</p>
            </div>
          </div>
          <div className={s.contact_social}>
            <a href="mailto:bienestar@yogaypilatesoviedo.com" target="_blank" rel="noopener noreferrer">
              <img src="/image/mail.svg" alt="mail" />
            </a>
            <a href="tel:+34984046397" target="_blank" rel="noopener noreferrer">
              <img src="/image/phone.svg" alt="phone" />
            </a>
            <a href="https://wa.me/34627908108" target="_blank" rel="noopener noreferrer">
              <img src="/image/whatsapp.svg" alt="whatsapp" />
            </a>
            <a href="https://www.youtube.com/channel/UCEE9SKwTKdmo47Zlx1OQBvA" target="_blank" rel="noopener noreferrer">
              <img src="/image/youtube.svg" alt="youtube" />
            </a>
            <a href="https://www.facebook.com/yogaypilatesoviedo/" target="_blank" rel="noopener noreferrer">
              <img src="/image/facebook.svg" alt="facebook" />
            </a>
            <a href="https://www.instagram.com/bienestar_yoga_pilates_oviedo/" target="_blank" rel="noopener noreferrer">
              <img src="/image/instagram.svg" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
