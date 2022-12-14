import { Fragment } from 'react';

import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Header() {
  const user = null;//useSelector(state => state.authReducer.user);
  const logouUser = () => { }

  return (
    <Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          <Typography
            component={Link}
            variant="h3"
            to="/articles"
            sx={{
              mr: 2,
              fontFamily: 'sans-serif',
              fontWeight: 700,
              color: 'grey',
              textDecoration: 'none',
              flexGrow: 1
            }}>
            Talkera
          </Typography>

        </Typography>
        {user !== null ? (
          <Button component={Link} variant="outlined" size="small" onClick={logouUser}>
            Logout
          </Button>
        ) : (
          <Button component={Link} variant="outlined" size="small" to="/login">
            Sign in
          </Button>
        )}
      </Toolbar>
    </Fragment>
  );
}

export default Header;
