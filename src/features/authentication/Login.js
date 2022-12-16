import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Visibility } from '@mui/icons-material';

import { Avatar, Box, Button, CssBaseline, Checkbox, TextField, Grid, Link, Container, Typography, IconButton, InputAdornment, FormControlLabel, Alert, AlertTitle } from '@mui/material';

import { clearAuthenticationError, loginUser } from './authReducer';

export default function Login() {
    const { user, error } = useSelector(state => state.authentication)
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' })

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (error) dispatch(clearAuthenticationError());
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(loginUser({ user: formData }))
    };

    if (user) return <Navigate to="/articles" />

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                        value={formData.password}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)}> <Visibility /></IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    {error && <Alert severity="error"><AlertTitle>Error</AlertTitle> {error} </Alert>}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/signup" component={RouterLink}>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}
