import { useMediaQuery } from "react-responsive";
import { styled } from "styled-components";

export const isMobile = useMediaQuery({
  query: "(max-width:780px)",
});

export const isPC = useMediaQuery({
  query: "(min-width:781px)",
});

export const borderBottom = styled.div`
  border-bottom: 5px solid green;
`;
