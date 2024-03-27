import React,{useState, useRef} from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Burger from "../../assets/burger 1.png";

import H1 from "../../components/title"
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import { Container, Image, InputLabel, Input } from './styles';

const Home = () => {
const [users, setUsers] = useState([]);
const navigate = useNavigate()

const inputOrder = useRef()
const inputName = useRef()

async function addNewUser(){

  const {data: newUsers}= await axios.post("http://localhost:3001/users",{
    order:inputOrder.current.value,
    name:inputName.current.value, 
  });
  setUsers([...users,newUsers]);

  navigate("/usuarios")

}


  return (
    <Container>
      <Image alt="logo-imagem" src={Burger} />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Pedido"/>
        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Nome"/>
        <Button  onClick={addNewUser}> Novo Pedido</Button>
      </ContainerItens>

    </Container>
  );
}

export default Home;
