import { Button, Toolbar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Sections() {
    const { authenticated } = useSelector(state => state.authentication);

    if (!authenticated) return <div></div>;

    return (
        <Toolbar
            component="nav"
            variant="dense"
            sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
            <Button
                component={Link}
                nowrap='true'
                variant="text"
                to="/feed"
                sx={{ p: 1, flexShrink: 0 }}>
                My feed
            </Button>
            <Button
                component={Link}
                nowrap='true'
                variant="text"
                to="/add"
                sx={{ p: 1, flexShrink: 0 }}>
                Add article
            </Button>
        </Toolbar>
    )
}
