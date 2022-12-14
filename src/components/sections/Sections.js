import { Toolbar } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
];

export default function Sections() {
    return (
        <Toolbar
            component="nav"
            variant="dense"
            sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
        >
            {sections.map((section) => (
                <Link
                    color="inherit"
                    nowrap='true'
                    key={section.title}
                    variant="body2"
                    href={section.url}
                    sx={{ p: 1, flexShrink: 0 }}
                >
                    {section.title}
                </Link>
            ))}
        </Toolbar>
    )
}
