import { Fragment, useEffect } from 'react';
import { Typography, Grid, Container, CssBaseline, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBySlug } from '../articleReducer';

export default function ArticleDetails() {
    const { slug } = useParams();
    const { article } = useSelector(state => state.articles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBySlug(slug))
    }, [slug, dispatch])

    return (
        <Container>
            <CssBaseline />
            <Container noValidate maxWidth="sm" sx={{ mb: 4, marginTop: '70px' }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Fragment>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h3" gutterBottom>
                                    {article?.title}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5" gutterBottom>
                                    {article?.description}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1" gutterBottom
                                >
                                    {article?.body}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Fragment>
                </Paper>
            </Container>
        </Container>
    );
}
