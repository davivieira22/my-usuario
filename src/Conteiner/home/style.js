import style, { styled } from 'styled-components'
import fundo from '../../img/fundo3.jpg'


export const ContainerPricipal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background:url(${fundo});
background-size: cover;
height: 100%;
min-height:100vh ;
`;
export const Container = styled.div`
padding: 30px 30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 61px ;
gap:15px;
 background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
;margin-top:-380px;

`;
export const Image = styled.img`
width: 228px;
height: 176px;
margin-bottom: 40px;

`
export const ImgMenino=styled.img`
width:500px;
height: 500px;
margin-top:-100px;
margin-right: 70%;

`



export const InputLabo = styled.p`
font-size:20px;
font-weight:700;
line-height: 22px;
letter-spacing: -0.41px;
color: rgba(255, 255, 255, 1);

`

export const Input = styled.input`
width:342px;
height:58px;
border-radius:14px;
border:3px solid red;
background-color: rgba(255, 255, 255, 0.25);
font-size: 24px;
font-weight: 400;
color: rgba(255, 255, 255, 1);
box-shadow: rgba(0, 0, 0, 0.25);
border: none;

`

export const SetaBotao = styled.img`
margin-left: 14px;
transform: rotateY(180deg);


`

