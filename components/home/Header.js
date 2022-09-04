/* eslint-disable @next/next/no-img-element */
import useScreenWidth from "../../hook/useScreenWidth";
import s from "../../styles/header.module.scss";

export default function Header() {
  const { width } = useScreenWidth();

  function Clip(url) {
    return (
      <video key={url} autoPlay loop muted className={s.header_video}>
        <source src={url} type="video/webm" />
      </video>
    );
  }

  return (
    <div className={s.header}>
      {width <= 1000 ? Clip(`/image/lotus_sm.webm`) : Clip("/image/lotus_lg.webm")}
      <div className={s.header_title}>
        <img src="/image/logo-texto.svg" alt="logo-texto" className={s.header_title_first} />
        <img src="/image/subtitle.svg" alt="logo-texto" className={s.header_title_second} />
      </div>
    </div>
  );
}
