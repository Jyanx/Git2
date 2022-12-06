import { TextField,Grid,Button } from "@mui/material"
import { Container } from "@mui/system"
import {Link} from "react-router-dom"
import { useState } from "react"


const Search =()=>{
    const [username,setUsername]=useState("");

    const handleInputChange=(event)=>{
     setUsername(event.target.value);
    }



    return(
        <Container maxWidth ="sm" sx={{
            display :"flex",
            alignItems :"center",
            height :"100vh"
        }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                    label ="Buscar usuario de github"
                    onChange={handleInputChange}
                    value={username}
                    fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <Link to ={`/users/${username}`}>
                    <Button variant="contained" fullWidth>
                        Buscar
                    </Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>

    )
}

export default Search;