import styled, { keyframes } from "styled-components";
import { slideInUp } from "react-animations";

const slideInUpAnimation = keyframes`${slideInUp}`;

export const SlideInUpDiv = styled.div`
  animation: 1s ${slideInUpAnimation};
`;