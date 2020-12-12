import Button from './../../components/Button/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from '@material-ui/core/Link';
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box'

const PlannerSettingsDialog = (props) => {
  const {open, onClose, handleClickDeletePlanner} = props;

  return (
    <Dialog
      open={open}
      onClose={onClose}
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

          <Button size="medium" onClick={onClose} color="primary" variant="contained" autoFocus>
            назад
          </Button>

          <Button size="medium" onClick={handleClickDeletePlanner} href="" variant="outlined" color="primary">
            перестворити планер
          </Button>

      </DialogActions>

    </Dialog>
  )
}

export default PlannerSettingsDialog
