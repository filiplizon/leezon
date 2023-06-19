import * as React from "react";
import { useTranslation } from "react-i18next";
import { Flex, useColorMode, useMediaQuery } from "@chakra-ui/react";
import SocialLink from "../SocialLink/SocialLink";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { opacityAnimation } from "../../utils/animations";

const SocialLinks = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  const [isDesktop] = useMediaQuery("(min-width: 821px)");

  return (
    <Flex
      as="footer"
      w={isDesktop ? "100px" : "120px"}
      px={3}
      py={1}
      position="fixed"
      bottom={5}
      left="50%"
      transform="translateX(-50%)"
      justifyContent="space-around"
      bgColor={`mode.${colorMode}.background`}
      color={`mode.${colorMode}.text`}
      borderRadius={30}
      border="1px solid"
      borderColor={`mode.${colorMode}.gray`}
      shadow="md"
      zIndex="1000"
      opacity={0}
      animation={`${opacityAnimation} .5s ease-in-out 2.2s forwards`}
    >
      <SocialLink
        name="github-link"
        link={t("socialLinks.github")}
        isDesktop={isDesktop}
        icon={<AiFillGithub />}
      />
      <SocialLink
        name="linkedin-link"
        link={t("socialLinks.linkedin")}
        isDesktop={isDesktop}
        icon={<AiFillLinkedin />}
      />
    </Flex>
  );
};

export default SocialLinks;
