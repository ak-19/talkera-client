import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';

const takeTen = (s) => {
  return s.substring(0, 10) + '....'
}

function ArticleShortBox({ article }) {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component={Link} to={`/article/${article.id}`}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {article.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {article.createdAt}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {article.description}
            </Typography>
            <Typography variant="subtitle2" paragraph>
              {takeTen(article.body)}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default ArticleShortBox;
