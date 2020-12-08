import React from 'react'
import AppPage from './../../components/AppPage/AppPage';
import Week from './Week';
import Button from './../../components/Button/Button';
import PlannerHeader from './../../assets/img/planner-header.png';
import { Grid } from '@material-ui/core';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from '@material-ui/core/Link';
import Alert from '@material-ui/lab/Alert';

const PlannerScreen = () => {

  const json = require('./sample.json')

  const [settingsOpen, setSettingsOpen] = React.useState(false);

  const handleClickSettingsOpen = () => {
    setSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
  };

  const getWeeks = () => {
    return json.weeks.map((weekJson, weekIdx) => { return ( <Week idx={weekIdx} json={weekJson} /> )} )
  }

  return (
    <AppPage
      headerIcon={<SettingsRoundedIcon />}
      handleIconClick={handleClickSettingsOpen}
      headerImageSrc={PlannerHeader}
      selected="planner"
    >

      <Grid container spacing="2">
          {getWeeks()}
      </Grid>

      <Dialog
        open={settingsOpen}
        onClose={handleSettingsClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Оновлення планера</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">

            <Alert severity="warning">
              Щоб видалити вже вивчені теми з свого планера або зсунути усі дедлайни, треба <strong>видалити теперішній планер</strong>.
              <br/><br/>
              Якщо хочеш іншу допомогу з своїм планером, просто напиши нам в <Link href="http://t.me/tonia_zakorchemna">Telegram</Link>. Ми раді допомогти!
            </Alert>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button size="medium" onClick={handleSettingsClose} color="primary" variant="contained" autoFocus>
            назад
          </Button>
          <Button size="medium" onClick={handleSettingsClose} href="" variant="outlined" color="primary">
            видалити планер та створити новий
          </Button>
        </DialogActions>
      </Dialog>

    </AppPage>
  )
}

export default PlannerScreen
