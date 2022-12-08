import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainFeaturedArticle from '../mainarticle/MainArticle';
import { getArticlesData, selectArticles } from '../../store/articles';
import Articles from '../articles/Articles';

const mainFeaturedArticle = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

export default function Home() {
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
    <main>
      <MainFeaturedArticle post={mainFeaturedArticle} />
      <Articles articles={articles} />
    </main>
  );
}
