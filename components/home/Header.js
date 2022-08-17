/* eslint-disable @next/next/no-img-element */
import useScreenWidth from "../../hook/useScreenWidth";

export default function Header() {
  const { width } = useScreenWidth();

  function Clip(url) {
    return (
      <video key={url} autoPlay loop muted className="w-full h-full object-right-bottom object-cover absolute">
        <source src={url} type="video/webm" />
      </video>
    );
  }

  return (
    <div className="home__container">
      {width <= 768 ? Clip(`/image/lotus_sm.webm`) : Clip("/image/lotus_lg.webm")}
      <div className="home__video--container">
        <div className="home__image--container">
          <img src="/image/logo-texto.svg" alt="logo-texto" className="home__image--first" />
          <img src="/image/subtitle.svg" alt="logo-texto" className="home__image--second" />
        </div>
      </div>
    </div>
  );
}

// UTILIZAR useSCREEN
