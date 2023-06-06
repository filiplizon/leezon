import quiz from "../../images/counry-quiz.png";
import dayen from "../../images/dayen.png";
import whatToDo from "../../images/what-to-do.png";
import dishes from "../../images/dishes-form.png";

export const getProjects = (t: any) => {
  return [
    {
      title: t("projects.flNews.title"),
      image: quiz,
      technologies: t("projects.flNews.stack"),
      description: t("projects.flNews.description"),
      githubURL: "",
    },
    {
      title: t("projects.dishes-form.title"),
      image: dishes,
      technologies: t("projects.dishes-form.stack"),
      description: t("projects.dishes-form.description"),
      liveURL: "",
      githubURL: "",
    },
    {
      title: t("projects.country-quiz.title"),
      image: quiz,
      technologies: t("projects.country-quiz.stack"),
      description: t("projects.country-quiz.description"),
      liveURL: "",
      githubURL: "",
    },
    {
      title: t("projects.what-to-do.title"),
      image: whatToDo,
      technologies: t("projects.what-to-do.stack"),
      description: t("projects.what-to-do.description"),
      liveURL: "",
      githubURL: "",
    },
    {
      title: t("projects.simple-editor.title"),
      image: quiz,
      technologies: t("projects.simple-editor.stack"),
      description: t("projects.simple-editor.description"),
      liveURL: "",
      githubURL: "",
    },
    {
      title: t("projects.dayen.title"),
      image: dayen,
      technologies: t("projects.dayen.stack"),
      description: t("projects.dayen.description"),
      liveURL: "",
      githubURL: "",
    },
    {
      title: t("projects.sasinomierz.title"),
      image: quiz,
      technologies: t("projects.sasinomierz.stack"),
      description: t("projects.sasinomierz.description"),
      liveURL: "",
      githubURL: "",
    },
    {
      title: t("projects.make-a-burger.title"),
      image: quiz,
      technologies: t("projects.make-a-burger.stack"),
      description: t("projects.make-a-burger.description"),
      liveURL: "",
      githubURL: "",
    },
    {
      title: t("projects.leezon.title"),
      image: quiz,
      technologies: t("projects.leezon.stack"),
      description: t("projects.leezon.description"),
      liveURL: "",
      githubURL: "",
    },
  ];
};
