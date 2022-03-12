import styled, { keyframes } from "styled-components";
import { bounceInDown } from "react-animations";

const bounceInDownAnim = keyframes`${bounceInDown}`;

export const BounceInDiv = styled.div`
  animation: 1.25s ${bounceInDownAnim};
`;