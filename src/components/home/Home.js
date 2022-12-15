import { useEffect } from 'react';
import { Typography } from '@mui/material';

import { retrieveArticles } from '../../features/articleReducer';

import Articles from '../articles/Articles';
import MainArticle from '../mainarticle/MainArticle';
import Sections from '../sections/Sections';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const { articles, articlesCount } = useSelector(state => state.articles)

  const dispatch = useDispatch();

  useEffect(() => { dispatch(retrieveArticles()) }, [])

  return (
    <main>
      <Sections />
      <MainArticle />
      <Articles articles={articles} />
      <Typography variant="subtitle1" gutterBottom sx={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="caption" display="block" gutterBottom>
          Number of articles
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          {articlesCount}
        </Typography>
      </Typography>
    </main>
  );
}
