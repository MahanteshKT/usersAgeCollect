import React from 'react'
import styled from 'styled-components';

const Buttons=styled.button`
        {
            width:100%;
            background-color:blue;
            border-radius:0.3rem;
            padding:0.5rem 1rem;
            border:2px solid blue;
            color:black;
            font-size:15px;
            font-weight:700;
        }
        &:hover,
        &:focus{
            transition:0.2s;
            border:2px solid cyan;
            background-color:cyan;
            box-shadow:0 0 6px grey;
        }

        @media screen and (min-width:700px){
          width:10rem;
          
        }

`

function Button(props) {
  return (
    <Buttons onClick={props.onClick} className={props.className}>
        {props.children}
    </Buttons>
  )
}

export default Button
