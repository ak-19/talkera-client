import React from 'react'
import MuiMarkdown from 'mui-markdown';
import { useParams } from 'react-router-dom';

export default function ArticleDetails() {
    const { id } = useParams();
    return (
        <MuiMarkdown>{`# Hello article number ${id}`}</MuiMarkdown>
    )
}
