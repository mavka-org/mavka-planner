import MuiButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

export const FullWidthButton = withStyles({
  root: {
    textTransform: 'none',
    width: '100%',
    padding: '10px'
  },
})(MuiButton);

export const RoundButton = withStyles({
  root: {
    textTransform: 'none',
    borderRadius: '50px'
  },
})(MuiButton);

export default MuiButton
