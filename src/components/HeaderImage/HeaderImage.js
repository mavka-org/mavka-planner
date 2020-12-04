import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Image: {
    height: "66px",
  },
}));

const HeaderImage = (props) => {
  const classes = useStyles();
  return (
        <img src={props.src} className={classes.Image}/>
  );
}

export default HeaderImage
