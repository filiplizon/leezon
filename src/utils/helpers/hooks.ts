import { RefObject, useEffect } from "react";
import i18n from "../../../i18";
import { useTranslation } from "react-i18next";
import { lastSingleLetterToNewLine } from "./helpers";

export const useNavigationLinksEffect = (
  updateActiveLink: () => void
): void => {
  useEffect(() => {
    window.addEventListener("scroll", updateActiveLink);
    i18n.on("languageChanged", updateActiveLink);

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
      i18n.off("languageChanged", updateActiveLink);
    };
  }, [i18n, updateActiveLink]);

  useEffect(() => {
    updateActiveLink();
  }, [updateActiveLink, i18n.language]);
};

export const useLastSingleLetterToNewLine = (
  ref: RefObject<HTMLParagraphElement>,
  activeElement?: string
) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
      lastSingleLetterToNewLine(element);
    }
  }, [t, ref, activeElement]);
};
