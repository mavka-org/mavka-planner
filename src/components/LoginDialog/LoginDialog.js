import TelegramLoginButton from 'react-telegram-login';
import { bot_id } from './../../config'
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography, Grid} from '@material-ui/core';
import { useHistory } from 'react-router-dom'

const LoginDialog = (props) => {

  const history = useHistory()

  const handleTelegramLogin = (response) => {
    props.handleTelegramResponse(response)
    props.onClose()
    if (props.goToLanding){
      history.push('/')
    }
  }

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="login-dialog-title"
    >
      <Grid container
        spacing={0}
        align="center"
        justify="center"
        direction="column">
        <Grid item>
          <DialogTitle id="login-dialog-title">Увійти</DialogTitle>
        </Grid>

        <Grid item>
          <Box p={1}>
            <TelegramLoginButton dataOnauth={handleTelegramLogin} botName={bot_id} buttonSize="large" usePic={false} />
          </Box>

          <Box p={1}>
            <Typography variant="subtitle2">* При реєстрації ти погоджуєшся з обробкою персональних даних. Ми не отримуємо доступу до твого номеру телефону</Typography>
          </Box>
        </Grid>

      </Grid>

    </Dialog>
  )
}

export default LoginDialog
