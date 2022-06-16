import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const NoSearch = () => {
    return (
        <Container>
            <Typography
                variant="h2"
                display="flex"
                justifyContent="center"
                alignItems="center">
                Nenhum usuário pesquisado.
            </Typography>
        </Container>
    );
};

export default NoSearch;
