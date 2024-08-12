import { Box, Button, Container, Divider, TextField, Typography } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../../store/modules/UsersSlice";
import { v4 as generateToken } from 'uuid';
import { isEmailValid } from "../../../utils/validate-email";
import { enqueueSnackbar } from "notistack";
import { Link, useNavigate } from "react-router-dom";




export default function Signup() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const handleInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const handleInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const handleInputConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.currentTarget.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
        if (password !== confirmPassword) {
            enqueueSnackbar("As senhas não coincidem!",{
                variant: 'error' 
            });
            return;
        }

        if (!isEmailValid(email)) {
            enqueueSnackbar("Campos inválidos!", {
                variant: 'error'
            });
            return 
        } else if(isEmailValid(email)) {
            enqueueSnackbar("Conta criada com sucesso!", {
                variant: 'success'
            });

            const newUser = {
                email: email,
                password: password,
                authToken: generateToken()
            }
            
            dispatch(addUser(newUser))
            
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            
            console.log(newUser);
            navigate('/')
        }
       
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
                <Typography variant="h2" component="h1">Crie sua conta</Typography>
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
                    <Typography variant="h4" component="h1">Sign Up</Typography>

                    <Divider orientation="horizontal" variant="middle" flexItem />

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '350px' }}>
                        <TextField value={email} onChange={handleInputEmail} size="small" id="filled-basic" label="Email" type="email" variant="filled" required/>
                        <TextField value={password} onChange={handleInputPassword} size="small" id="filled-basic" label="Password" type="password" variant="filled" required/>
                        <TextField value={confirmPassword} onChange={handleInputConfirmPassword} size="small" id="filled-basic" label="Comfirm Password" type="password" variant="filled" required/>
                        <Button type="submit" variant="contained">Cadastrar</Button>
                    </form>
                    
                    <Typography variant="caption" component="h6">
                        Já possui uma conta?
                        <Link to={'/'} style={{textDecoration: 'none'}} >
                            Clique aqui
                        </Link>
                    </Typography>
                </Box>
            </Container>
        </>
    )
}