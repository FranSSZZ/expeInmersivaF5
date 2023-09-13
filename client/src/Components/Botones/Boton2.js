import React from 'react'
import styled from 'styled-components';


const Boton2 = () => {
    return (
        <a href="/LoginPage"><StyledButton2 href="/Login" type="submit" >Inicia Sesión</StyledButton2></a> 
      );
}

const StyledButton2 = styled.button`
  background-color: #4a2fa3ed;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 12px 22px;
  cursor: pointer;
  font-size: 1.5rem;
  transition: background-color 0.3s;
  top: auto;
  z-index: 100;
  position: relative;
  height: 60px;
  margin: 20px;
  margin-top: 90%;

  &:hover {
    background-color: #4F59CF;
  }

  @media screen and (max-width: 750px) {
    margin-top: 105px;
    }
`;

export default Boton2