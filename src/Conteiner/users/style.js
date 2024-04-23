import style, { styled } from 'styled-components'
import fundo from '../../img/tela.jpg'


export const ContainerPricipal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background:url(${fundo});
background-size: cover;
height:100%;
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
;
backdrop-filter:blur(45px);
// min-height:calc(100vh - 170px) ;

`;
export const Image = styled.img`
width: 328px;
height: 176px;
margin-bottom: 40px;
animation: piscar 2s infinite;

  
@keyframes piscar {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}
`
export const SetaBotao = styled.img`

animation-name: pulse;
  animation: pulse 0.5s infinite;
  @keyframes pulse {
  0% {
    transform: scale(1);
    filter: brightness(100%);
  }
  100% {
    transform: scale(1.1);
    filter: brightness(200%);
  }
}

`
export const Usuario = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width:342px;
    height:58px;
    border-radius:14px;
    border:3px solid red;
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;
    margin-bottom:20px;
p{
    font-size:20px;
    font-weight:700;
    line-height: 22px;
    letter-spacing: -0.41px;
    color: rgba(255, 255, 255, 1);

}
button{
    background: none;
    border: none;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity:0.5 ;
    background-color: red;
    width:20px;
    }
}

`
