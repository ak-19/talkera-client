import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../header/Header';
import MainFeaturedArticle from '../mainarticle/MainArticle';
import Footer from '../footer/Footer';

import { useDispatch, useSelector } from 'react-redux';
import { getArticlesData, selectArticles } from '../../store/articles';
import { useEffect } from 'react';
import Articles from '../articles/Articles';

const mainFeaturedArticle = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const theme = createTheme();

export default function Blog() {
  const articles = useSelector(selectArticles);
  const dispatch = useDispatch();

  useEffect(() => {
    async function go() {
      dispatch(getArticlesData());
    }
    go();
  }, [dispatch]);

  if (articles) console.log(articles);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <main>
          <MainFeaturedArticle post={mainFeaturedArticle} />
          <Articles articles={articles} />
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
