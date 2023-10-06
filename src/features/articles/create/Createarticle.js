import { Fragment, useState } from 'react';
import { Typography, TextField, Grid, Container, CssBaseline, Paper, Button, Alert, AlertTitle } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { clearError, makeArticle } from '../articleReducer';

export default function Createarticle() {
    const { authenticated } = useSelector(state => state.authentication);
    const { error } = useSelector(state => state.articles);
    const [formData, setFormData] = useState({ title: '', description: '', body: '' });
    const dispatch = useDispatch();
    const history = useNavigate();

    if (!authenticated) return <Navigate to="/articles" />;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        dispatch(clearError())
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(makeArticle({ article: formData }))
        history('/articles');
    };

    return (
        <Container>
            <CssBaseline />
            <Container sx={{ textAlign: 'center', marginTop: '70px' }}>
                <Typography variant="h4" >
                    Create article
                </Typography>
            </Container>

            <Container component="form" noValidate onSubmit={handleSubmit} maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Fragment>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="titla"
                                    label="Title"
                                    fullWidth
                                    autoComplete="title"
                                    variant="standard"
                                    name="title"
                                    onChange={handleChange}
                                    value={formData.title}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="description"
                                    label="description"
                                    fullWidth
                                    autoComplete="description"
                                    variant="standard"
                                    name="description"
                                    onChange={handleChange}
                                    value={formData.description}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="body"
                                    label="Body"
                                    fullWidth
                                    placeholder="Placeholder"
                                    multiline
                                    variant="standard"
                                    minRows={4}
                                    name="body"
                                    onChange={handleChange}
                                    value={formData.body}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                >
                                    Create
                                </Button>
                            </Grid>
                            {error && <Alert severity="error"><AlertTitle>Error</AlertTitle> {error} </Alert>}
                        </Grid>
                    </Fragment>
                </Paper>
            </Container>
        </Container>
    );
}
