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

export const LargeButton = withStyles({
  root: {
    textTransform: 'none',
    borderRadius: '50px',
    height: '58px',
    fontSize: '1.1rem',
    fontWeight: 600,
    boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.15)',
  },
})(MuiButton);

export default MuiButton
