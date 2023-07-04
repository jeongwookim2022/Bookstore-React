import { useMediaQuery } from "react-responsive";
import { styled } from "styled-components";

const isMobile = useMediaQuery({
  query: "(max-width:780px)",
});

const isPC = useMediaQuery({
  query: "(min-width:781px)",
});
