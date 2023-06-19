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
      school: t("experience.education.school"),
      degree: t("experience.education.degree"),
      date: t("experience.education.date"),
      description: [
        t("experience.education.subject.1"),
        t("experience.education.subject.2"),
        t("experience.education.subject.3"),
        t("experience.education.subject.4"),
        t("experience.education.subject.5"),
        t("experience.education.subject.6"),
        t("experience.education.subject.7"),
        t("experience.education.subject.8"),
        t("experience.education.subject.9"),
        t("experience.education.subject.10"),
      ],
    },
  };
};
