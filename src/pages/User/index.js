import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { searchUser } from '../../services';
import { getRepos } from '../../services';
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import TypographyIconBio from '../../components/typographyIconBio';
const User = () => {
    const { username } = useParams()


    const [userDetail, setUserDetail] = useState();
    const [repos, setRepos] = useState([]);


    const fetchUser = async () => {
        const data = await searchUser(username);
        setUserDetail(data)
        console.log("Detail", data)
    }

    const fetchRepos = async () => {
        const data = await getRepos(username);
        setRepos(data)
        console.log("Repositorios", data)
    }
    useEffect(() => {
        fetchUser();
    }, [])
    useEffect(() => {
        fetchRepos();
    }, []);
    return (
        <Container maxWidth="md" style={{
            backgroundColor: "#000", color: "#fff", borderRadius: "1em"
        }}>
            {userDetail && (
                <Box mt={10}>
                    <Grid container spacing={3}>

                        {/*DETALLES DE USUARIO */}

                        <Grid item xs={12} md={4}>
                            <Box mb={1} style={{
                                textAlign: "center",
                            }}>
                                <img
                                    style={{
                                        borderRadius: "50%",
                                    }}
                                    width={200}
                                    src={userDetail.avatar_url}
                                    alt={userDetail.login}
                                />
                            </Box>
                            {/* NAME */}
                            <Typography mb={1} variant="h6" style={{
                                textAlign: "center", fontWeight: "600"
                            }}>
                                {userDetail.name}
                            </Typography>

                            {/* USUARIO */}
                            <Typography mb={3} variant="h6" fontWeight="600" color="#B2B2B2"
                                style={{
                                    textAlign: "center"
                                }}>
                                {userDetail.login}
                            </Typography>

                            {/* BIO */}
                            <Typography mb={2} variant="body1">
                                {userDetail.bio}
                            </Typography>
                            <Typography mb={2} variant="h6">
                                Repositorios: {userDetail.public_repos}
                            </Typography>
                            <CardContent >
                                <Button variant="contained" fullWidth href={`${userDetail.html_url}`}>
                                    Ver Perfil
                                </Button>
                            </CardContent>

                        </Grid>

                        {/* REPOSITORIOS */}

                        <Grid item xs={12} md={8}>
                            <Typography variant="h5" fontWeight="900" textAlign="center">Repositorios: </Typography>
                            <Box>
                                {repos.length > 0 &&
                                    repos.map((repo, index) => g(
                                        <Box key={index} mt={3}>
                                            <Card>
                                                {/* BOX DE CADA REPO */}
                                                <CardContent>
                                                    <Typography variant="h4" fontWeight="800">
                                                        Nombre // {repo.name}
                                                    </Typography>
                                                    <Typography variant="h6" fontWeight="800">
                                                        ID :{repo.id}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Box>
                                    ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            )}
        </Container>
    );
};


export default User;