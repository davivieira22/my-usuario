import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Menino from '../../img/menino.png'
import Logo1 from '../../img/dog.png'
import seta from '../../img/seta.svg'
import Axios from 'axios'
import H1 from '../../Components/titulo'
import Botao from '../../Components/botao'
import {
  ContainerPricipal,
  Image,
  ImgMenino,
  Container,
  InputLabo,
  Input,
  SetaBotao
} from "../home/style";

const Home = () => {
  const [user, setUser] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  const Navigate = useNavigate()
  const AddUser = async () => {
    const { data: newUser } = await Axios.post("http://localhost:3001/protect",
      { name: inputName.current.value, age: inputAge.current.value })

    console.log(newUser)

    setUser([...user, newUser])

    Navigate('/usuarios')
  }
  return (<ContainerPricipal>
    <Image alt="logo-image" src={Logo1}></Image>

<ImgMenino alt="menino-com-tablet" src={Menino}></ImgMenino>

    <Container>

      <H1> ola amigo 😄</H1>

      <InputLabo>seu Nome 👇</InputLabo>

      <Input ref={inputName} placeholder="  name"></Input>

      <InputLabo>sua Idade 👇</InputLabo>

      <Input ref={inputAge} placeholder=" idade"></Input>

      <  Botao isFram={true} onClick={AddUser}>cadastrar <SetaBotao src={seta}></SetaBotao> </  Botao>



    </Container>

  </ContainerPricipal>











  )






}








export default Home