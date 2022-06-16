import React from "react";
import Header from "../header";
import Container from '@mui/material/Container';

const Layout = ({ children }) => {
    return (
        <Container maxWidth='lg' sx={{p:2}}>
            <Header />
            {children}
        </Container>
    );
};

export default Layout;
