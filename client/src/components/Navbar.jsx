import React from 'react';
import styled from 'styled-components'
import Button from "./buttons/button"
import {AddRounded,ExploreRounded } from "@mui/icons-material";
import {useNavigate,useLocation} from "react-router-dom"
const Container = styled.div`

background:${({theme})=>theme.navbar};
color:${({theme})=>theme.text_primary};
font-weight:bold;
font-size:22px;
padding:14px 50px;
display:flex;
justify-content: space-between;
align-items:center;
box-shadow: 0 0 10px rgba(45, 34, 254, 0.15);
@media only screen and (max-width:600px){
padding:10px 12px;}

`;
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let path = location.pathname.split("/");

  const gotoCreatePost = () => {
    navigate("/post");
  };
  const gottoHome = () => {
    navigate("/");
  };
  console.log(path);
  return (
    <>
   <Container>
      GenAI
      {path[1] === "post" ? (
        <Button
          text="Explore Posts"
          leftIcon={<ExploreRounded style={{ fontSize: "18px" }} />}
          onClick={gottoHome}
          type="secondary"
        />
      ) : (
        <Button
          text="Create new post"
          leftIcon={<AddRounded style={{ fontSize: "18px" }} />}
          onClick={gotoCreatePost}
        />
      )}
    </Container>
    </>
  )
 }
 export default Navbar;