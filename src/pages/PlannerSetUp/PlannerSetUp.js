import NavBar from '../../components/NavBar/NavBar'
import LoginPng from './../../assets/img/login.png'
import { LargeButton } from '../../components/Button/Button';
import { Box, Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TelegramLoginButton from 'react-telegram-login';
import Demo from "../../assets/img/giphy.gif";
import React from "react";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import ChooseTopic from "../../assets/img/choose-topics.png";
import Page from './../../components/Page/Page';


const useStyles = makeStyles((theme) => ({
    Grid: {
        width: "100%",
        justifyContent: "center",
    },
    Img: {
        width: "250px",
    },
    dropDown: {
        width: '100%'
    },
    noPadding: {
        padding: 0,
    }
}));




const LoginUI = (props) => {
  const classes = useStyles();
  return (
    <div>
        <Page>

     <Grid container direction="column" alignItems="left"  className={classes.Grid}>
         <Grid item>
             <HeaderImage src={ChooseTopic} alt={'Вибрати тему'}/>
         </Grid>

          <Grid item>
              <Box pb={3} pt={3}>
                  <Typography >
                      Ми створимо тобі персональний планер
                  </Typography>
              </Box>
              <Box pb={3}>
                  <Typography>
                      Починаючи від цього тижня, планер показує тобі, які саме теми треба вчити, щоб встигнути все до ЗНО
                  </Typography>
              </Box>
              <Box width="40%" >
                  <img width="100%" src={Demo} />
              </Box>

          </Grid>

         <Grid item>
             <Box pb={3} pt={3}>
                 <Typography>
                     Коли тема вивчена, викреслюй її з списку
                 </Typography>
             </Box>
             <Box width="40%" >
                 <img width="100%" src={Demo} />
             </Box>

         </Grid>

         <Grid item>
             <Box pb={3} pt={3}>
                 <Typography >
                     До кожної теми ми підібрали конспекти, теорію і пробні ЗНО — тицяй на “Вчити”
                 </Typography>
             </Box>
             <Box width="40%" >
                 <img width="100%" src={Demo} />
             </Box>

         </Grid>


         <Grid item>
             <Box pb={3} pt={3}>
                 <Typography >
                     До кожної теми ми підібрали конспекти, теорію і пробні ЗНО — тицяй на “Вчити”
                 </Typography>
             </Box>
             <Box width="40%" >
                 <img width="100%" src={Demo} />
             </Box>

         </Grid>

      </Grid>
        </Page>
    </div>
  )
}

export default LoginUI