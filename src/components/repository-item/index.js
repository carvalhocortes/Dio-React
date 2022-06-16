import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
    return (
        <Grid item xs={4}>
            <Paper
                sx={{
                my: 1,
                mx: 'auto',
                p: 2,
                }}
            >
                <Typography variant="h5" noWrap>{name}</Typography>
                <Typography noWrap>
                    <Link href={linkToRepo} target="_blank" rel="noreferrer" >
                        {fullName}
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
};

export default RepositoryItem;
