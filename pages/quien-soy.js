/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../components/Layout";

export default function Quiensoy() {
  return (
    <Layout title={"Quién Soy"}>
      <div className="pt-8">
        <div className="fondo header h-screen">
          <div className="fondo contenedor texto y foto relative">
            <div className="imagen absolute">
              <img src="/image/kary2.jpg" alt="foto" className="h-screen object-cover object-top" />
            </div>
            <div className="bg-black opacity-40 absolute h-screen w-full" />
            <div className="absolute">
              <div className="w-full h-screen flex flex-col text-center justify-end">
                <div className="text-slate-50 pb-12">
                  <h1>De la vida se aprende cada día…</h1>
                  <p>
                    Cuando la propia existencia te muestra que en la forma en la que estás actuando no te está haciendo feliz, nunca es
                    tarde para cambiar.
                  </p>
                </div>
                {/* <div className="w-[80%]">
                    <img src="/image/kary.jpg" alt="foto" className="rounded-full" />
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
