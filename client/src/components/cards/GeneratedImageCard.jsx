import { CircularProgress } from "@mui/material";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  yellow: "#FFD700", // Example yellow
  arrow: "#33334",
  black: "#000000",
};

const Container = styled.div`
  flex: 1;
  padding: 16px;
  border: 2px dashed ${({ theme }) => theme.yellow + 90};
  color: ${({ theme }) => theme.arrow + 80};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const Image = styled.img`
text-color:"white";
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.black + 50};
  border-radius: 18px;
  object-fit: cover;
`;

const GeneratedImageCard = ({ src, loading }) => {
  return (
    <Container>
      {loading ? (
        <>
          <CircularProgress
            sx={{ color: "inherit", width: "24px", height: "24px" }}
          />
          Generating Your Image . . .
        </>
      ) : src ? (
        <Image src={src} alt="Generated" />
      ) : (
        <>Write a prompt to generate image</>
      )}
    </Container>
  );
};

const App = () => (
  <ThemeProvider theme={theme}>
    <GeneratedImageCard src={null} loading={false} />
  </ThemeProvider>
);

export default App;
