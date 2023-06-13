import { keyframes } from "@chakra-ui/react";

export const opacityAnimation = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `;

export const slideFromBottom = keyframes`
    0% {
      transform: translateY(50%)
    }
    100% {
     transform: translateY(0)
    }
  `;

export const slideFromRight = keyframes`
    0% {
      transform: translateX(50%)
    }
    100% {
     transform: translateX(0)
    }
  `;

export const slideToRight = keyframes`
    0% {
      transform: translateX(0);
      
    }
    100% {
        transform: translateX(100%);
    }
  `;

export const scaleAnimation = keyframes`
    0% {
      transform: translate(-50%, -50%) scale(0);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  `;
