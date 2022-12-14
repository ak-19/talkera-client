import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

import { fetchData } from '../../actions/auth';

import Articles from '../articles/Articles';
import MainArticle from '../mainarticle/MainArticle';
import Sections from '../sections/Sections';

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [articlesCount, setArticlesCount] = useState(0);

  useEffect(() => { fetchData(setArticles, setArticlesCount); }, [])

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
