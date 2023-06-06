export const getExperience = (t: any) => {
  return {
    work: [
      {
        title: t("experience.workExperience.chimeraPrime.position"),
        company: t("experience.workExperience.chimeraPrime.company"),
        date: t("experience.workExperience.chimeraPrime.date"),
        description: [
          t("experience.workExperience.chimeraPrime.responsibilities.1"),
          t("experience.workExperience.chimeraPrime.responsibilities.2"),
          t("experience.workExperience.chimeraPrime.responsibilities.3"),
          t("experience.workExperience.chimeraPrime.responsibilities.4"),
        ],
      },
      {
        title: t("experience.workExperience.neonet.position"),
        company: t("experience.workExperience.neonet.company"),
        date: t("experience.workExperience.neonet.date"),
        description: [
          t("experience.workExperience.neonet.responsibilities.1"),
          t("experience.workExperience.neonet.responsibilities.2"),
          t("experience.workExperience.neonet.responsibilities.3"),
          t("experience.workExperience.neonet.responsibilities.4"),
          t("experience.workExperience.neonet.responsibilities.5"),
        ],
      },
    ],
    education: {
      title: t("experience.education.school"),
      company: t("experience.education.degree"),
      date: t("experience.education.date"),
      description: [
        t("experience.education.responsibilities.1"),
        t("experience.education.responsibilities.2"),
        t("experience.education.responsibilities.3"),
        t("experience.education.responsibilities.4"),
        t("experience.education.responsibilities.5"),
        t("experience.education.responsibilities.6"),
        t("experience.education.responsibilities.7"),
        t("experience.education.responsibilities.8"),
        t("experience.education.responsibilities.9"),
        t("experience.education.responsibilities.10"),
      ],
    },
  };
};
