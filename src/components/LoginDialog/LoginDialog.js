import TelegramLoginButton from 'react-telegram-login';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography, Grid} from '@material-ui/core';

const LoginDialog = (props) => {

  const handleTelegramLogin = (response) => {
    props.handleTelegramResponse(response)
    props.onClose()
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
            <TelegramLoginButton dataOnauth={handleTelegramLogin} botName="kukolya_bot" buttonSize="large" usePic={false} />
          </Box>

          <Box p={1}>
            <Typography variant="subtitle2">* При реєстрації ти погоджуєшся з обробкою персональних даних</Typography>
          </Box>
        </Grid>   

      </Grid>    

    </Dialog>
  )
}

export default LoginDialog
