import React from 'react'
import styled from "styled-components";

const CardDiv=styled.div`
    {
        width:30rem;
        max-width:80%;
        background-color: azure;
        margin-bottom:2rem;
        border-radius:0.5rem;
        padding:1rem;
        display:flex;
        justify-content:center;
        align-items:center;
        box-shadow:0 0 10px rgba(255,255,255,0.7);
    }

`
function Card(props) {
  return (
    <CardDiv className={`card ${props.className}`}>
      {props.children}
    </CardDiv>
  )
}

export default Card
