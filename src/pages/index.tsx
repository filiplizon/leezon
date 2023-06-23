import * as React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18";
import Home from "../components/pages/Home/Home";
import About from "../components/pages/About/About";
import Experience from "../components/pages/Experience/Experience";
import Skills from "../components/pages/Skills/Skills";
import Projects from "../components/pages/Projects/Projects";
import Contact from "../components/pages/Contact/Contact";

const IndexPage = () => {
  return (
    <>
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export function Head() {
  const { t } = useTranslation();
  return (
    <>
      <html lang={i18n.language} />
      <title>{t("meta.title")}</title>
      <meta name="description" content={t("meta.description") as string} />
    </>
  );
}

export default IndexPage;
