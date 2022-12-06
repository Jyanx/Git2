import { Typography } from "@mui/material";
import { useParams,useNavigate } from "react-router-dom";
import { searchUsers } from "../../services";
import Box from '@mui/material/Box';
import { Container } from "@mui/material";
import { useEffect,useState } from "react";
import CustomCard from "../../components/CustomCard";


const Users =()=>{
const{username}= useParams();
const history = useNavigate();

const [usersList,setUsersList]= useState([]);

const fetchUsers = async ()=>{
    const data = await searchUsers(username);
    setUsersList(data.items);
    console.log(data)
}

const handleClick= (username)=>{
    history(`/user/${username}`)

}

useEffect(()=>{
    fetchUsers()
},[])



    return(
        <Container>
            <Box>
                <Typography variant="h6">
                    Resultado de la busqueda del usuario: {username}
                </Typography>
            </Box>
            <Box>
                {usersList.length > 0 &&
                usersList.map((user,index)=>(
                    <CustomCard key={index} user={user} handleClick={handleClick}/>

                ))}

            </Box>

        </Container>
       
    )
}


export default Users;