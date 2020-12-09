import TelegramLoginButton from 'react-telegram-login';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

const LoginDialog = (props) => {

  const handleTelegramLogin = (response) => {
    props.handleTelegramResponse(response).then(() => {
      props.loginProvider()
    })
  }

  return (
    <Dialog
      open={props.open}
      aria-labelledby="login-dialog-title"
    >
      <DialogTitle id="login-dialog-title">Увійти</DialogTitle>

      <Box p={1}>
        <TelegramLoginButton dataOnauth={handleTelegramLogin} botName="kukolya_bot" buttonSize="large" usePic={false}/>
      </Box>

    </Dialog>
  )
}

export default LoginDialog
