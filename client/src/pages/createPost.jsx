import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
  background: ${({ theme }) => theme.background};
`;

const Wrapper = styled.div`
  display: flex;
  gap: 8%;
  flex:1;
  max-width: 1200px;
  height: fit-content;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;


const createpost = () => {
  return (
    <>
   
     <Container ><Wrapper>
      Create post</Wrapper>
      </Container>
    </>
  )
}

export default createpost;