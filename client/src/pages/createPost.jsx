import React, { useState } from 'react'
import styled from "styled-components";
import GenerateImageForm from "../components/forms/GenerateImageform";
import GenerateImageCard from "../components/cards/GeneratedImageCard"
const Container = styled.div`
  padding: 20px 30px;
  min-height:300px;
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

width:100%;
height: fit-content;
max-width: 1200px;
gap: 8%;
justify-content:center;
  display: flex;
  @media (max-width: 768px) {
    flex-direction:column;
  }
`;


const createpost = () => {
 
    const [generateImageLoading, setGenerateImageLoading] = useState(false);
    const [createPostLoading, setcreatePostLoading] = useState(false);
    const [post, setPost] = useState({
      author: "",
      prompt: "",
      photo: "",
    });
  return (
    <>
   
     <Container >
      <Wrapper>
      <GenerateImageForm
          createPostLoading={createPostLoading}
          setcreatePostLoading={setcreatePostLoading}
          generateImageLoading={generateImageLoading}
          setGenerateImageLoading={setGenerateImageLoading}
          post={post}
          setPost={setPost}
        />
      <GenerateImageCard src={post?.photo} loading={generateImageLoading} />
     </Wrapper>
      </Container>
    </>
  )
}

export default createpost;