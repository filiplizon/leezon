import { i18n } from "i18next";

export function lastSingleLetterToNewLine(element: HTMLElement) {
  const regex = / ([A-Za-z]) /g;
  element.innerHTML = element.innerHTML.replace(regex, " $1&nbsp;");
}

export const updateActiveNavigationLink = (
  scrollEventEnabled: boolean,
  setActiveLink: React.Dispatch<React.SetStateAction<string>>
): void => {
  if (!scrollEventEnabled) {
    return;
  }

  const sectionElements = Array.from(
    document.querySelectorAll("section[id]")
  ) as HTMLElement[];

  for (let i = sectionElements.length - 1; i >= 0; i--) {
    const section = sectionElements[i];
    const rect = section.getBoundingClientRect();

    if (rect.top <= 100 && rect.bottom >= 100) {
      setActiveLink(section.id);
      break;
    }
  }
};

export const changeLanguage = (i18n: i18n) => {
  const currentLanguage = i18n.language;
  const newLanguage = currentLanguage === "en" ? "pl" : "en";
  i18n.changeLanguage(newLanguage);
};
