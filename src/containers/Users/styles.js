import styled from 'styled-components'

export const Container = styled.div`
background: black;
background-size: cover;


display: flex;
flex-direction: column;
align-items: center;
gap: 40px;

height: 100%;
min-height: 100vh;

`
export const Image = styled.img`
margin-top: 30px;

`

export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;

background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
margin-bottom: 30px;

width: 342px;
height: 58px;
padding-left: 25px;
border: none;
outline: none;

font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
color: #ffffff;

button {
  
    cursor: pointer;
    background:none;
    border: none;
}

`