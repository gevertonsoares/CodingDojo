import { Box, Button, Container, Divider, TextField, Typography } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../store/modules/LoginSlice";
import { enqueueSnackbar } from "notistack";
import { Link } from "react-router-dom";
import { GlobalState } from "../../../store";

export default function Login() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const users = useSelector((state: GlobalState) => state.users.users)
    const dispatch = useDispatch();

    const handleInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const handleInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        const existingUser = users.find(user => user.email === email && user.password === password);

        if (existingUser) {
            dispatch(userLogin({ 
                emailUser: existingUser.email, 
                authToken: existingUser.authToken 
            }));
            enqueueSnackbar("Login bem Sucedido!", {
                variant: 'success'
            })
            console.log("Login bem-sucedido:", existingUser);
        } else {
            enqueueSnackbar("Email ou senha inválidos!", {
                variant: 'error'
            })
        }
        setEmail('')
        setPassword('')
    }
      
    return(
        <>
            <Container maxWidth="sm"
                sx={{
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '90vh',
                }}
                >
                <Typography variant="h2" component="h1">CoddingDojo</Typography>
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

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '350px' }}>
                        <TextField value={email} onChange={handleInputEmail} size="small" id="filled-basic" label="Email" type="email" variant="filled" required/>
                        <TextField value={password} onChange={handleInputPassword} size="small" id="filled-basic" label="Password" type="password" variant="filled" required/>
                        <Button type="submit" variant="contained">Login</Button>
                    </form>
                    
                    <Typography variant="caption" component="h6">
                        Ainda nao tem conta? 
                        <Link to={'/signup'}>
                            Clique aqui
                        </Link>
                    </Typography>
                </Box>
            </Container>
        </>
    )
}