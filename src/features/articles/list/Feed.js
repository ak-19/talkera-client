import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import ArticleShortBox from "../detail/Articleshortbox";

export default function Feed() {
    const { feed } = useSelector(state => state.articles);

    return (
        <Grid container spacing={4}>
            {feed.map((article) => (
                <ArticleShortBox key={article.id} article={article} />
            ))}
        </Grid>
    )
}