import { getArticles } from '../api'

export async function fetchData(setArticles, setArticlesCount) {
    try {
        const { data: { articles, articlesCount } } = await getArticles();
        setArticles(articles)
        setArticlesCount(articlesCount)
    } catch (error) {
        console.log(error);
    }
}