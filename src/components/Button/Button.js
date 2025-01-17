import MuiButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


export const RoundButton = withStyles({
  root: {
    textTransform: 'none',
    borderRadius: '50px',
    height: "fit-content",
    textDecoration: "none",
  },
})(MuiButton);

export const LargeButton = withStyles({
  root: {
    height: '58px',
    fontSize: '1.1rem',
    fontWeight: 600,
    boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.15)',
  },
})(RoundButton);

export const ScalableLargeButton = withStyles({
  root: {
    width: "70%",
    minWidth:'250px',
    maxWidth: "300px"
  }
})(LargeButton);

export const Button = (props) => {
  return (
    <RoundButton size="small" color="primary" style={props.active ? {fontWeight: "700"} : {}} {...props}/>
  )
}

export const LinkButton = withStyles({
  root: {
    width: '90px'
  },
})(Button);

export default Button
