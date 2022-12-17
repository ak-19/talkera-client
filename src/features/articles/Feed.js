import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Article from "./Article";

export default function Feed() {
    const { feed } = useSelector(state => state.articles);

    return (
        <Grid container spacing={4}>
            {feed.map((article) => (
                <Article key={article.id} article={article} />
            ))}
        </Grid>
    )
}