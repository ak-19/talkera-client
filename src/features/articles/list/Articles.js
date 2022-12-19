
import { Grid } from '@mui/material'
import React from 'react'
import ArticleShortBox from '../detail/Articleshortbox'

export default function Articles({ articles }) {
    return (
        <Grid container spacing={4}>
            {articles.map((article) => (
                <ArticleShortBox key={article.id} article={article} />
            ))}
        </Grid>
    )
}
