import React, { useState } from "react";
import useGithub from "../../hooks/github-hooks";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';


const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

    return (
        <header>
            <Container maxWidth="lg">
                <TextField
                    fullWidth
                    size="small"
                    autoFocus='true'
                    type="text" id="text-field" label="Usuário"
                    helperText="Digite o username para pesquisa..."
                    onChange={(event) => setUsernameForSearch(event.target.value)}/>

                <Button type="text"
                    fullWidth
                    variant="outlined"
                    disableElevation
                    onClick={submitGetUser} >
                        Buscar
                </Button>
            </Container>
        </header>
    );
};

export default Header;
