import { useEffect } from 'react';

import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Profilebox from './Profilebox';
import { useDispatch, useSelector } from 'react-redux';
import { getProfiles } from './profileReducer';

export default function Profiles() {
    const profiles = useSelector(state => state.profiles.profiles);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProfiles());
    }, [])


    return (
        <main>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h2"
                        variant="h3"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        User profiles
                    </Typography>
                </Container>
            </Box>
            <Container sx={{ py: 8 }} maxWidth="md">

                <Grid container spacing={4}>
                    {profiles.map((profile) => (
                        <Profilebox key={profile.id} profile={profile} />
                    ))}
                </Grid>
            </Container>
        </main>

    );
}
