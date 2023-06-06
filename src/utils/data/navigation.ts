export const getLinks = (t: any) => {
  return [
    { name: t("navigation.home.label"), link: t("navigation.home.link") },
    { name: t("navigation.about.label"), link: t("navigation.about.link") },
    {
      name: t("navigation.experience.label"),
      link: t("navigation.experience.link"),
    },
    { name: t("navigation.skills.label"), link: t("navigation.skills.link") },
    {
      name: t("navigation.projects.label"),
      link: t("navigation.projects.link"),
    },
    { name: t("navigation.contact.label"), link: t("navigation.contact.link") },
  ];
};
