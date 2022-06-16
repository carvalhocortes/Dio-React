import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hooks";
import RepositoryItem from "../repository-item";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';


const Repositories = () => {
    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

    useEffect(() => {
        if (githubState.user.login) {
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        setHasUserForSearchrepos(githubState.repositories);

    }, [githubState.user.login]);

    return (
        <>
            {hasUserForSearchrepos ? (
                <Container>
                    <Container sx={{m:1}}>
                        <Fab color="primary" aria-label="Repositories" variant="extended" sx={{m:1}}>
                            Repositories
                        </Fab>
                        <Fab color="secondary" aria-label="Starred" variant="extended" sx={{m:1}}>
                            Starred
                        </Fab>
                    </Container>
                    <Container id='container-repositories'>
                        <Grid container spacing={2}>
                            {githubState.repositories.map((item) => (
                                <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.full_name}
                                    fullName={item.full_name}
                                />
                            ))}
                        </Grid>
                    </Container>
                    <Container sx={{display: 'none'}} id='container-starred'>
                        <Grid container spacing={2}>
                            {githubState.starred.map((item) => (
                                <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.html_url}
                                    fullName={item.full_name}
                                />
                            ))}
                        </Grid>
                    </Container>
                </Container>
            ) : (
                <></>
            )}
        </>
    );
};

export default Repositories;
