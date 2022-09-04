/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../components/Layout";
import s from "../styles/about.module.scss";

export default function Quiensoy() {
  return (
    <Layout title={"Quién Soy"}>
      <div className={s.about}>
        <div className={s.about_title}>
          <div className={s.about_title_image} />
          <div className={s.about_title_text}>
            <h1>De la vida se aprende cada día…</h1>
            <p>
              Cuando la propia existencia te muestra que en la forma en la que estás actuando no te está haciendo feliz, nunca es tarde para
              cambiar.
            </p>
          </div>
        </div>
        <div className={s.about_title_paragraph}>
          <p>
            De la vida se aprende cada día. Cuando la propia existencia te muestra que en la forma en la que estás actuando no te está
            haciendo feliz, nunca es tarde para cambiar. A través de un curso de Yoga para desempleados encontré mi vocación actual, y eso
            me ha hecho entender que el cambio es intrínseco a la propia naturaleza. Aceptarlo es el primer paso para superarlo. Esa primera
            formación fue la puerta para adentrarme en un mundo que me apasiona. De eso hace ya mas de ocho años, no puedo llevar la cuenta
            de cuántos han venido detrás.Nunca son suficientes:
          </p>
          <div className={s.about_title_paragraph_ul}>
            <div>
              <ul>
                <li>Gerontogimnasia</li>
                <li>Pilates suelo</li>
                <li>Pilates máquina</li>
                <li>Monitora polivalente</li>
                <li>Yoga-Taichi-Pilates</li>
                <li>Pilates reformer</li>
                <li>Pilates torre</li>
                <li>Seminarios</li>
                <li>Convenciones</li>
                <li>y un largo etcétera</li>
              </ul>
            </div>
            <div className={s.about_title_paragraph_ul_image}></div>
          </div>
          <p>
            Tras impartir clases en varios centros de Yoga, estudios de Pilates, gimnasios, polideportivos, asociaciones, centros de día, …
            consiguiendo la experiencia necesaria que la formación en si no puede aportarte, el sueño se hace realidad y abro mi propio
            Estudio de Yoga y Pilates en abril de 2015. El entusiasmo y la ilusión aumentan cuando abro la puerta del Estudio a alumnos que
            conocieron mi manera de trabajar en los lugares citados anteriormente, y a nuevas personas que se suman a este proyecto vital,
            ayudándome a crecer cada día. La práctica de un método, o el conocimiento de una disciplina que nos hace sentir mejor y afrontar
            nuestro día a día de una manera más saludable puede llegarnos en cualquier momento, a cualquier edad. Yo trasmito mi
            conocimiento y a su vez aprendo de mis alumnos/as en cada clase. Retroalimentación.
          </p>
        </div>
      </div>
    </Layout>
  );
}
