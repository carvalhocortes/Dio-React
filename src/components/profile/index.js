import React from "react";
import useGithub from "../../hooks/github-hooks";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import Chip from '@mui/material/Chip';

const Profile = () => {
    const { githubState } = useGithub();

    return (
        <Container sx={{p:2}}>
            <Grid container spacing={5}>
                <Grid item xs={4}>
                    <Avatar
                        src={githubState.user.avatar}
                        sx={{ width: 300, height: 300 }}
                        alt="Avatar of user"
                    />
                </Grid>
                <Grid item xs={8}>
                    <Grid container spacing={1} sx={{p:2}}>
                        <Grid item xs={12}>
                            <Typography variant="h6">Username:</Typography>
                            <Link
                                href={githubState.user.html_url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {githubState.user.login}
                            </Link>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6">Company:</Typography>
                            <Typography>{githubState.user.company}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6">Location:</Typography>
                            <Typography>{githubState.user.location}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6">Blog:</Typography>
                            <Link
                                href={githubState.user.blog}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {githubState.user.blog}
                            </Link>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1} sx={{p:2}}>
                                <Grid item xs={2}>
                                </Grid>
                                <Grid item xs={2}>
                                    <Chip label={githubState.user.followers+" Followers"}/>
                                </Grid>
                                <Grid item xs={2}>
                                    <Chip label={githubState.user.following+" Followings"}/>
                                </Grid>
                                <Grid item xs={2}>
                                    <Chip label={githubState.user.public_gists+" Gists"}/>
                                </Grid>
                                <Grid item xs={2}>
                                    <Chip label={githubState.user.public_repos+" Repos"}/>
                                </Grid>
                                <Grid item xs={2}>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;
