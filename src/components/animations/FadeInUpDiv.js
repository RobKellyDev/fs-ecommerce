import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";

const fadeInUpAnimation = keyframes`${fadeInUp}`;

export const FadeInUpDiv = styled.div`
  animation: 1.5s ${fadeInUpAnimation};
`;