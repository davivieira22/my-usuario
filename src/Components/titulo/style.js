import styled from "styled-components";


export const H1 = styled.h1`
font-size:34px ;
font-weight: 700;
line-height: 39.84px;
align-items: center;
color: rgba(255, 255, 255, 1);
margin-bottom:5%;
animation-direction: alternate;
  -webkit-animation-name: pulse;
  animation-name: pulse;
  animation: pulse 2.0s infinite;
  @-webkit-keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    -webkit-filter: brightness(100%);
  }
  100% {
    -webkit-transform: scale(2.1);
    -webkit-filter: brightness(200%);
  }
}
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
  
`;
