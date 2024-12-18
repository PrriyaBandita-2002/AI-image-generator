import React from 'react'
import styled from 'styled-components';
import TextInput from "../input/input"
import Buttons from "../buttons/buttons";
import {AutoAwesome, CreateRounded} from "@mui/icons-material"


 
 const Form = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 9%;
  justify-content: center;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Actions = styled.div`
  display: flex;
  flex: 1;
  gap: 8px;
`;

const GenerateImageForm = ( {createPostLoading,
  setcreatePostLoading,
  generateImageLoading,
  setGenerateImageLoading,
  post,setPost}) => {
  return (
    <Form>
      <Top>
        <Title>Generate Image with </Title>
        <Desc>Write your prompt according to the image you want.</Desc>

   </Top>
      <Body>
      <TextInput
          label="Author"
          placeholder="Enter your name"
          name="author"
    value={post.author}
          handelChange={(e) => setPost({ ...post, author: e.target.value })}/>
          <TextInput
          label="Image Prompt"
          placeholder="Write a detailed prompt about the image"
          name="prompt"
          textArea
          rows="8"
          value={post.prompt}
          handelChange={(e) => setPost({ ...post, prompt: e.target.value })}
        />
      ** You can generate AI image to the community**
      </Body>
      <Actions>
        <Buttons
          text="Generate Image"
          leftIcon={<AutoAwesome />}
          flex
          isLoading={generateImageLoading}
          isDisabled={post.prompt === ""}
         
        />
        <Buttons
          text="Post Image"
          leftIcon={<CreateRounded />}
          type="secondary"
          flex
          isDisabled={
            post.author === "" || post.photo === "" || post.prompt === ""
          }
          isLoading={createPostLoading}
          onClick={() => createPost()}
        />
      </Actions>
    </Form>
 
  )
}

export default GenerateImageForm;