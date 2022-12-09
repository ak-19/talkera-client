import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainFeaturedArticle from '../mainarticle/MainArticle';
import { getArticlesData, selectArticles } from '../../store/articles';
import Articles from '../articles/Articles';
import { Toolbar } from '@mui/material';
import Link from '@mui/material/Link';

const mainFeaturedArticle = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

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
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      <MainFeaturedArticle post={mainFeaturedArticle} />
      <Articles articles={articles} />
    </main>
  );
}
