import HeaderImage from '../../components/HeaderImage/HeaderImage';
import Page from '../../components/Page/Page';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { RoundButton } from './../../components/Button/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
}));

const AppPage = (props) => {
  const classes = useStyles();

  return (
        <Page {...props}>

          <Grid container spacing="1">

            <Box display="flex" alignItems="center" style={{ width: '100%' }}>

              <Box flexGrow={1}>
                <HeaderImage src={props.headerImageSrc}/>
              </Box>

              <Box>
                <IconButton size="small">
                  {props.headerIcon}
                </IconButton>
              </Box>

            </Box>

            <Grid item>
            <RoundButton
              startIcon={<ExpandMoreRoundedIcon />}
            >
              математика
            </RoundButton>
            </Grid>

          </Grid>

          {props.children}
        </Page>
  );
}

export default AppPage;
