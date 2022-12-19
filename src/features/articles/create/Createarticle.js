import { Fragment } from 'react';
import { Typography, TextField, Grid, Container, CssBaseline, Paper, Button } from '@mui/material';

export default function Createarticle() {
    return (
        <Container>
            <CssBaseline />
            <Container sx={{ textAlign: 'center', marginTop: '70px' }}>
                <Typography variant="h4" >
                    Create article
                </Typography>
            </Container>

            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Fragment>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="titla"
                                    name="title"
                                    label="Title"
                                    fullWidth
                                    autoComplete="title"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="description"
                                    name="description"
                                    label="description"
                                    fullWidth
                                    autoComplete="description"
                                    variant="standard"
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
                        </Grid>
                    </Fragment>
                </Paper>
            </Container>
        </Container>
    );
}
