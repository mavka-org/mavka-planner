import HeaderImage from '../../components/HeaderImage/HeaderImage';
import Page from '../../components/Page/Page';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import FlashOnRoundedIcon from '@material-ui/icons/FlashOnRounded';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
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
                <IconButton size="small" onClick={props.handleIconClick}>
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

          <Box py={2}>
            <Alert severity="success" icon={<FlashOnRoundedIcon fontSize="inherit" />} onClose={() => {}}>
              <AlertTitle><strong>Заряджайся впевненістю в своїх силах 💪</strong></AlertTitle>
              Не забудь прочитати нашу <strong><Link href='google.com'>Cтратегію Підготовки</Link></strong>, яку ми підготували спеціально для тебе разом з іншими чудовими ЗНОшниками!
            </Alert>
          </Box>

          {props.children}
        </Page>
  );
}

export default AppPage;
