import * as React from "react";
import { Flex, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import SocialLink from "../SocialLink/SocialLink";
import { useTranslation } from "react-i18next";
import { opacityAnimation } from "../../utils/animations";

const Links = () => {
  const [isDesktop] = useMediaQuery("(min-width: 821px)");
  const { colorMode } = useColorMode();
  const { t } = useTranslation();

  return (
    <Flex
      zIndex="1000"
      position="fixed"
      bottom={5}
      w={isDesktop ? "100px" : "120px"}
      left="50%"
      transform="translateX(-50%)"
      justifyContent="space-around"
      borderRadius={30}
      bgColor={`mode.${colorMode}.background`}
      color={`mode.${colorMode}.text`}
      px={3}
      py={1}
      shadow="md"
      border="1px solid"
      borderColor={`mode.${colorMode}.gray`}
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

export default Links;
