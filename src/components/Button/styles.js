import styled from "styled-components";

export const Button = styled.button`

background:${ props => props.isBack ? '	rgb(255,140,0)': 'rgb(255,0,0)'};
border-radius: 14px;
margin-bottom: 30px;

width: 342px;
height: 68px;
padding-left: 25px;
border: none;
outline: none;

display:flex;
align-items: center;
justify-content: center;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;

color: #ffffff;

cursor: pointer;

&:hover{
opacity: 0.8;
}
&active{
opacity: 0.5;
}
`