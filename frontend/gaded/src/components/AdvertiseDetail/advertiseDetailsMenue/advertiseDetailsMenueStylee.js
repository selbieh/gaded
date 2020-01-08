import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',

  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    height:'auto'
  },
  Details:{
   color:'#880e4f',
   fontWeight:'bold',
   marginRight:'6px'
  },
  badge:{
    marginRight:'15px'
  }

}));


export default useStyles;