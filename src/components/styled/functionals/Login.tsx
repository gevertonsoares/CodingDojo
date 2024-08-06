import { Box, Button, Container, Divider, TextField, Typography } from "@mui/material";

export default function Login() {
    
    
    return(
        <>
            <Container maxWidth="sm"
                sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                }}
                >
                <Box
                    height={500}
                    width={500}
                    my={4}
                    display="flex"
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems="center"
                    gap={4}
                    p={2}
                    boxShadow={20}
                    sx={{ border: 'grey', borderRadius:'1rem', background: 'linear-gradient(10deg, #b7b7fa, white)'}}
                    >
                    <Typography variant="h4" component="h1">Sign in</Typography>

                    <Divider orientation="horizontal" variant="middle" flexItem />

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '350px' }}>
                        <TextField size="small" id="filled-basic" label="Email" type="text" variant="filled" required/>
                        <TextField size="small" id="filled-basic" label="Password" type="password" variant="filled" required/>
                        <Button type="submit" variant="contained">Login</Button>
                    </form>
                    
                    <Typography variant="caption" component="h6">
                        Ainda nao tem conta? Clique aqui
                    </Typography>
                </Box>
            </Container>
        </>
    )
}