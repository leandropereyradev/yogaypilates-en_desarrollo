import Link from "next/link";
import s from "../styles/footer.module.scss";

export default function Footer() {
  return (
    <div className={s.footer}>
      <p>BienEstar - Todos los derechos reservados 2022</p>
      <div>
        <Link href="/aviso-legal">
          <a target="_blank">Aviso Legal</a>
        </Link>
        {" - "}
        <Link href="/politicas-privacidad">
          <a target="_blank">Políticas de Privacidad</a>
        </Link>
        {" - "}
        <Link href="/cookies">
          <a target="_blank">Cookies</a>
        </Link>
      </div>
      <a href="https://leandropereyra.com" target="_blank" rel="noopener noreferrer">
        Diseñado por LeandroPereyra.com
      </a>
    </div>
  );
}
