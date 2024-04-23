import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import seta from '../../img/seta.svg'
import Lixo from '../../img/lixeira.svg'
import Avatar from '../../img/avatar.svg'
import 'animate.css';
import Axios from 'axios'
import H1 from '../../Components/titulo'
import Botao from '../../Components/botao'
import {
  ContainerPricipal,
  Image,
  Container,
  SetaBotao,
  Usuario
}
  from "../users/style";




const Users = () => {
  const [user, setUser] = useState([])


  const Navigate = useNavigate()




  useEffect(() => {
    async function mydata() {
      const { data: allUsers } = await Axios.get("http://localhost:3001/protect")
      setUser(allUsers)
    }
    mydata()

  }, [])


  const deleteUser = async (userid) => {
    await Axios.delete(`http://localhost:3001/protect/${userid}`)

    const newUsers = user.filter(user => user.id !== userid)

    setUser(newUsers)
  }
  // { id: Math.random(), name: 'larissa ', age: 25 },

  const BotaoVoutar = () => {
    Navigate('/')
  }



  return (
    <ContainerPricipal>

      <Image alt="logo-image" src={Avatar}></Image>

      <Container>

        <H1 class="animate__animated animate__bounce">usuarios</H1>

        <ul>
          {
            user.map(user => (

              <Usuario key={user.id}>

                <p>{user.name}</p>

                <p>{user.age}</p>


                <button onClick={() => deleteUser(user.id)}> <img src={Lixo}></img>
                </button>
              </Usuario>


            ))


          }


        </ul>

        <  Botao onClick={BotaoVoutar}><SetaBotao src={seta}></SetaBotao>  voltar </  Botao>

      </Container>

    </ContainerPricipal>











  )






}








export default Users;