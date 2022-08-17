import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./Navbar";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Bienestar" : "Bienestar"}</title>
        <meta name="description" content="Yoga y Pilates en Oviedo - Asturias" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar
        menues={[
          ["Inicio", "/"],
          ["Quién Soy", "/quien-soy"],
          ["Contacto", "/contacto"],
        ]}
        image={"/image/logo.svg"}
      />
      {children}
      <Footer />
    </>
  );
}
