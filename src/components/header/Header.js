import { Fragment } from 'react';

import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Header(props) {
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
          Talkera
        </Typography>
        <Button variant="outlined" size="small">
          Sign in
        </Button>
      </Toolbar>

    </Fragment>
  );
}

export default Header;
