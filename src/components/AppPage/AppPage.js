import React, { useContext } from 'react';
import { SubjectContext } from './../../providers/SubjectProvider';
import HeaderImage from '../../components/HeaderImage/HeaderImage';
import SubjectsDialog from '../../components/SubjectsDialog/SubjectsDialog';
import { strategy_url } from './../../config';
import Page from '../../components/Page/Page';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import FlashOnRoundedIcon from '@material-ui/icons/FlashOnRounded';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { RoundButton } from './../../components/Button/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import {UserContext} from "../../providers/UserProvider";



const AppPage = (props) => {

  const subject = useContext(SubjectContext)[0]
  const user = useContext(UserContext);


  const [openSubjectsDialog, setOpenSubjectsDialog] = React.useState(false);

  const handleClickSubjectsDialog = () => {
    setOpenSubjectsDialog(true);
    window.gtag('event', 'subject_dropdown_action', {
      'action' : 'dropdown_open'
    })
  };

  const handleSubjectsDialogClosed = () => {
    setOpenSubjectsDialog(false);
  };

  return (
        <Page {...props}>

          <Grid container>

            <Box display="flex" alignItems="center" width="100%">

              <Box flexGrow={1}>
                <HeaderImage src={props.headerImageSrc}/>
              </Box>

              <Box>
                <IconButton name="headerIcon" size="small" onClick={props.handleIconClick}>
                  {props.headerIcon}
                </IconButton>
              </Box>

            </Box>

            <Grid item>
            <RoundButton
              name="selectSubjectButton"
              startIcon={<ExpandMoreRoundedIcon />}
              onClick={handleClickSubjectsDialog}
            >
              { subject.name }
            </RoundButton>

            <SubjectsDialog open={openSubjectsDialog} onClose={handleSubjectsDialogClosed} />
            </Grid>

          </Grid>

          {props.showStrategy ? (
              <Box py={2}>
                <Alert severity="success" icon={"🔥"} >
                  <AlertTitle><Typography variant="h3"><strong>Стратегія підготовки</strong></Typography></AlertTitle>
                  <Typography>
                    Чудові ЗНОшники минулих років підібрали для тебе серію порад, які допомогли їм потрапити в їх омріяні універи.
                    <strong><Link
                        href = {strategy_url}
                        onClick = { () => window.gtag('event', 'strategy_link_click') }
                    >→ Читай тут!
                    </Link></strong>
                  </Typography>
                </Alert>
              </Box>
          ) : ("")}




          {props.children}
        </Page>
  );
}

export default AppPage;
