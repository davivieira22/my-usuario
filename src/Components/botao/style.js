import styled from "styled-components";

export const Botao = styled.button`
width:342px ;
height: 74px;
display: flex;
justify-content: center;
align-items:center;
border-radius: 14px;
background-color: ${ props => props.isFram ? ` rgb(999,0,0,999)`:'rgb(1,21 ,21)'} ;
font-size:30px;
font-weight: 700;
line-height:28px;
color:rgba(255, 255, 255, 1);
gap:10px;
cursor: pointer;
&:hover{opacity:0.8 ;}
&:active{opacity:0.5 ;}


`