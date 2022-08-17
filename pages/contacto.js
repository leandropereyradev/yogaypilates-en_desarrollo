/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout";
import useScreenWidth from "../hook/useScreenWidth";

export default function Contacto() {
  const { width } = useScreenWidth();

  return (
    <Layout title={"Contacto"}>
      <div
        className={`${
          width <= 768 ? "contact__container--small" : "contact__container--large"
        } bg-cover h-screen w-full flex justify-center items-center`}
      >
        <div className="contact__info--container">
          <div className="contact__address--container">
            <div>
              <h1 className="contact__address--h1">Visítanos</h1>
              <p className="mb-3 contact__address--p">Gral. Sabino Fernández Campo Nº 8</p>
              <p className="mb-3 contact__address--p">Oviedo - Asturias</p>
              <p className="contact__address--p">Junto al parking público C.C. Los Prados</p>
            </div>
            <div className="mt-6 md:mt-12">
              <h1 className="contact__address--h1">Llámanos</h1>
              <p className="mb-3 contact__address--p">(+34) 984 046 397</p>
              <p className="contact__address--p">(+34) 627 90 81 08</p>
            </div>
          </div>
          <div className="contact__social--container">
            <a href="mailto:bienestar@yogaypilatesoviedo.com" target="_blank" rel="noopener noreferrer" className="contact__social--link">
              <img src="/image/mail.svg" alt="mail" />
            </a>
            <a href="tel:+34984046397" target="_blank" rel="noopener noreferrer" className="contact__social--link">
              <img src="/image/phone.svg" alt="phone" />
            </a>
            <a href="https://wa.me/34627908108" target="_blank" rel="noopener noreferrer" className="contact__social--link">
              <img src="/image/whatsapp.svg" alt="whatsapp" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCEE9SKwTKdmo47Zlx1OQBvA"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social--link"
            >
              <img src="/image/youtube.svg" alt="youtube" />
            </a>
            <a
              href="https://www.facebook.com/yogaypilatesoviedo/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social--link"
            >
              <img src="/image/facebook.svg" alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/bienestar_yoga_pilates_oviedo/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social--link"
            >
              <img src="/image/instagram.svg" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
