import javascript from "../../images/skills/javascript.png";
import typescript from "../../images/skills/typescript.png";
import react from "../../images/skills/react.png";
import next from "../../images/skills/next.png";
import gatsby from "../../images/skills/gatsby.png";
import redux from "../../images/skills/redux.png";
import recoil from "../../images/skills/recoil.svg";
import css from "../../images/skills/css.png";
import html from "../../images/skills/html.png";
import sass from "../../images/skills/sass.png";
import tailwind from "../../images/skills/tailwind.png";
import chakraUI from "../../images/skills/chakraUI.png";
import antd from "../../images/skills/antd.svg";
import rest from "../../images/skills/rest.png";
import firebase from "../../images/skills/firebase.png";
import i18n from "../../images/skills/i18n.svg";
import cypress from "../../images/skills/cypress.jpeg";
import git from "../../images/skills/git.png";
import github from "../../images/skills/github.png";
import bitbucket from "../../images/skills/bitbucket.png";
import npm from "../../images/skills/npm.png";
import yarn from "../../images/skills/yarn.png";
import jira from "../../images/skills/jira.png";
import xd from "../../images/skills/xd.png";
import ps from "../../images/skills/ps.png";
import figma from "../../images/skills/figma.png";
import node from "../../images/skills/node.png";

export const getTechnologies = (t: any) => {
  return [
    {
      name: t("skills.javascript.name"),
      image: javascript,
      description: t("skills.javascript.description"),
    },
    {
      name: t("skills.typescript.name"),
      image: typescript,
      description: t("skills.typescript.description"),
    },
    {
      name: t("skills.react.name"),
      image: react,
      description: t("skills.react.description"),
    },
    {
      name: t("skills.next.name"),
      image: next,
      description: t("skills.next.description"),
    },
    {
      name: t("skills.gatsby.name"),
      image: gatsby,
      description: t("skills.gatsby.description"),
    },
    {
      name: t("skills.redux.name"),
      image: redux,
      description: t("skills.redux.description"),
    },
    {
      name: t("skills.css.name"),
      image: css,
      description: t("skills.css.description"),
    },
    {
      name: t("skills.html.name"),
      image: html,
      description: t("skills.html.description"),
    },
    {
      name: t("skills.git.name"),
      image: git,
      description: t("skills.git.description"),
    },
    {
      name: t("skills.rest.name"),
      image: rest,
      description: t("skills.rest.description"),
    },
    {
      name: t("skills.sass.name"),
      image: sass,
      description: t("skills.sass.description"),
    },
    {
      name: t("skills.tailwind.name"),
      image: tailwind,
      description: t("skills.tailwind.description"),
    },
    {
      name: t("skills.chakraUI.name"),
      image: chakraUI,
      description: t("skills.chakraUI.description"),
    },
    {
      name: t("skills.antd.name"),
      image: antd,
      description: t("skills.antd.description"),
    },
    {
      name: t("skills.cypress.name"),
      image: cypress,
      description: t("skills.cypress.description"),
    },
    {
      name: t("skills.node.name"),
      image: node,
      description: t("skills.node.description"),
    },
    {
      name: t("skills.i18n.name"),
      image: i18n,
      description: t("skills.i18n.description"),
    },
    {
      name: t("skills.recoil.name"),
      image: recoil,
      description: t("skills.recoil.description"),
    },
    {
      name: t("skills.firebase.name"),
      image: firebase,
      description: t("skills.firebase.description"),
    },

    {
      name: t("skills.github.name"),
      image: github,
      description: t("skills.github.description"),
    },
    {
      name: t("skills.bitbucket.name"),
      image: bitbucket,
      description: t("skills.bitbucket.description"),
    },
    {
      name: t("skills.npm.name"),
      image: npm,
      description: t("skills.npm.description"),
    },
    {
      name: t("skills.yarn.name"),
      image: yarn,
      description: t("skills.yarn.description"),
    },
    {
      name: t("skills.jira.name"),
      image: jira,
      description: t("skills.jira.description"),
    },
    {
      name: t("skills.xd.name"),
      image: xd,
      description: t("skills.xd.description"),
    },
    {
      name: t("skills.ps.name"),
      image: ps,
      description: t("skills.ps.description"),
    },
    {
      name: t("skills.figma.name"),
      image: figma,
      description: t("skills.figma.description"),
    },
  ];
};
