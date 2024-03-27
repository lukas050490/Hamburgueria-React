import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Bag from "../../assets/BagBurger.png";
import Trash from "../../assets/trash.svg";

import H1 from "../../components/title";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import { Container, Image, User } from './styles';

const Users = () => {
const [users, setUsers] = useState([]);
const navigate = useNavigate()



useEffect(() =>{
async function fetchUsers(){
  const {data: newUsers} = await axios.get("http://localhost:3001/users");
  setUsers(newUsers);
}
fetchUsers()
},[])

 async function deleteUser (userid){
 await axios.delete(`http://localhost:3001/users/${userid}`);
 
  const newUsers = users.filter((user) => user.id !== userid);
  setUsers(newUsers);
}
function goBackPage(){
  navigate("/");
}
  return (
    <Container>
      <Image alt="logo-imagem" src={Bag} />
      <ContainerItens>
        <H1>Pedidos</H1>
       
<ul>
  {users.map((user)=>(
    <User key={user.id}>
    <p>{user.order}</p> <p>{user.name}</p>
    <button onClick={()=> deleteUser(user.id)}><img src={Trash} alt="lata-de-lixo"/></button>
  </User>
  ))}
</ul>
<Button isBack={true} onClick={goBackPage}> voltar</Button>

      </ContainerItens>

    </Container>
  );
}

export default Users;
