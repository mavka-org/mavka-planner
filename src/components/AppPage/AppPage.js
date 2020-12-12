import React from 'react';
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
import { RoundButton } from './../../components/Button/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const subjects = [
  {
    name: 'математика',
    icon: '♾️',
    id: 'math',
    available: true
  },
  {
    name: 'українська мова',
    icon: '💖',
    id: 'math',
    available: false
  },
  {
    name: 'українська література',
    icon: '📚',
    id: 'math',
    available: false
  },
  {
    name: 'історія України',
    icon: '📜',
    id: 'math',
    available: false
  },
  {
    name: 'фізика',
    icon: '🎡',
    id: 'math',
    available: false
  },
  {
    name: 'біологія',
    icon: '🧬',
    id: 'math',
    available: false
  },
  {
    name: 'географія',
    icon: '🌋',
    id: 'math',
    available: false
  },
  {
    name: 'англійська мова',
    icon: '🗽',
    id: 'math',
    available: false
  },
  {
    name: 'німецька мова',
    icon: '🎻',
    id: 'math',
    available: false
  },
  {
    name: 'французька мова',
    icon: '🥐',
    id: 'math',
    available: false
  }
];

const AppPage = (props) => {

  const [openSubjectsDialog, setOpenSubjectsDialog] = React.useState(false);

  const handleClickSubjectsDialog = () => {
    setOpenSubjectsDialog(true);
  };

  const handleSubjectsDialogClosed = (subject) => {
    setOpenSubjectsDialog(false);
    props.setSelectedSubject(subject);
  };

  return (
        <Page {...props}>

          <Grid container>

            <Box display="flex" alignItems="center" width="100%">

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
              onClick={handleClickSubjectsDialog}
            >
              { props.subject.name }
            </RoundButton>

            <SubjectsDialog selectedSubject={props.subject} subjects={subjects} open={openSubjectsDialog} onClose={handleSubjectsDialogClosed} />
            </Grid>

          </Grid>

          <Box py={2}>
            <Alert severity="success" icon={<FlashOnRoundedIcon fontSize="inherit" />} >
              <AlertTitle><strong>Стратегія підготовки для тебе 💪</strong></AlertTitle>
              Чудові ЗНОшники минулих років підібрали серію порад, які допомогли їм потрапити в їх омріяні універи. <strong><Link href={strategy_url}>→ Читай тут!</Link></strong>
            </Alert>
          </Box>

          {props.children}
        </Page>
  );
}

export default AppPage;
