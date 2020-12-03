import TextField from '@material-ui/core/FilledInput';
import { withStyles } from '@material-ui/core/styles';

const TextBox = withStyles({
  root: {
    width: 264,
    height: 58,
    fontSize: 16,
    lineHeight: 19,
    borderRadius: '5px 30px 30px 5px',
    border:'1px solid black',
    backgroundColor: 'white',
    padding: '0px 0px 12px 0px',
    fontFamily: 'Gilroy-Regular',
  },
})(TextField);
const Input = props => {
  return(
    <TextBox
      placeholder={props.placeholder}
      disableUnderline = {true} 
    />
  )
}

export default Input