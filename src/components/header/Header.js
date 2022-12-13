import { Fragment, useEffect } from 'react';

import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/auth';

function Header() {
  const user = useSelector(state => state?.authReducer?.authData?.user);
  const history = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser(), history);
    history('/login');
  };

  useEffect(() => {
    if (user) return history("/articles");
  }, [history, user])

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
        {user ? (
          <Button component={Link} variant="outlined" size="small" onClick={logout}>
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
