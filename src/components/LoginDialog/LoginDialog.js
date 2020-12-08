import TelegramLoginButton from 'react-telegram-login';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

export default const LoginDialog = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="login-dialog-title"
    >
      <DialogTitle id="login-dialog-title">Увійти</DialogTitle>
      <TelegramLoginButton dataOnauth={props.handleTelegramResponse} botName="kukolya_bot" buttonSize="large" usePic={false}/>
    </Dialog>
  )
}
