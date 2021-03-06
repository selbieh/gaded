
export const styles = theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    input: {
      display: 'none',
      margin:'auto',
    },
    lable:{
      marginTop:'65px',
    },
    Done:{
      [theme.breakpoints.up('md')]: {
        marginTop: '186px',
      },
      
    },
    // ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
    //   width: '80%'
    // }
    // }
  });