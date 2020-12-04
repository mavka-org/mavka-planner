import HeaderImage from '../../components/HeaderImage/HeaderImage';
import Page from '../../components/Page/Page';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Grid from '@material-ui/core/Grid';
import { Button } from './../../components/Button/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Grid: {
    width: "100%"
  },
}));

const AppPage = (props) => {
  const classes = useStyles();

  return (
        <Page {...props}>

          <Grid container spacing="1" className={classes.Grid}>

            <Grid item container direction="row" spacing="2" alignItems="center" className={classes.Grid}>

              <Grid item >
                <HeaderImage src={props.headerImageSrc}/>
              </Grid>

              <Grid item>
                {props.headerIcon}
              </Grid>

            </Grid>

            <Grid item>
            <Button
              startIcon={<ExpandMoreRoundedIcon />}
            >
              математика
            </Button>
            </Grid>

          </Grid>

          {props.children}
        </Page>
  );
}

export default AppPage;
