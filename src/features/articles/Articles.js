
import { Grid } from '@mui/material'
import React from 'react'
import Article from './Article'

export default function Articles({ articles }) {
    return (
        <Grid container spacing={4}>
            {articles.map((article) => (
                <Article key={article.id} article={article} />
            ))}
        </Grid>
    )
}
