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
import DropDown from "../../components/DropDown/DropDown";
import Hidden from '@material-ui/core/Hidden';
import Fab from '@material-ui/core/Fab';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import TopicsMultipleSelect from "./TopicsMultipleSelect.js";
import AppPage from './../../components/AppPage/AppPage';
import {ScalableLargeButton} from './../../components/Button/Button.js'
import WeeksDemo from '../../assets/img/weeks.gif'
import CheckboxDemo from '../../assets/img/checkbox.gif'
import StudyMatsDemo from '../../assets/img/study-mats.gif'
import PlannerSetUpHeader from '../../assets/img/plannerSetUpHeader.png'




const useStyles = makeStyles((theme) => ({
    Grid: {
        // width: "100%",
        justifyContent: "center",
    },
    Img: {
        width: "250px",
    },
    dropDown: {
        // width: '100%'
    },
    noPadding: {
        padding: 0,
    },
    hidden: {
        opacity: 0,
    },
    bottom: {
        bottom: "0px"
    },
    GifContainer: {
      width: "70%"
    }

}));




const PlannerSetupScreen = (props) => {
    const classes = useStyles();

    const [selectedTopicIds, setSelectedIds] = React.useState([]);

    const handleChange = (newSelectedTopicIds) => {
        setSelectedIds(newSelectedTopicIds);
    }

    const handleProceed = () => {
      props.createNewPlanner(selectedTopicIds);
    }

    return (
            <Page>
               <Box width="100%">

                   <Grid container direction="column" alignItems="left"  className={classes.Grid} pb={10}>
                       <Grid item>
                           <HeaderImage src={PlannerSetUpHeader} alt={'Створюємо планер'}/>
                       </Grid>

                       <Grid item>
                           <Box pb={3} pt={3}>
                               <Typography>
                                   Персональний планер. Він твій. Повністю твій
                               </Typography>
                           </Box>
                           <Box pb={3}>
                               <Typography>
                                   Починаючи від цього тижня, планер показує тобі, які саме теми треба вчити, щоб встигнути все до ЗНО
                               </Typography>
                           </Box>
                           <Box className={classes.GifContainer} >
                               <img width="100%" src={WeeksDemo} />
                           </Box>
                       </Grid>

                       <Grid item>
                           <Box pb={3} pt={3}>
                               <Typography>
                                   Коли тема вивчена, викреслюй її з списку
                               </Typography>
                           </Box>
                           <Box className={classes.GifContainer} >
                               <img width="100%" src={CheckboxDemo} />
                           </Box>
                       </Grid>

                       <Grid item>
                           <Box pb={3} pt={3}>
                               <Typography >
                                   До кожної теми ми підібрали конспекти, теорію і пробні ЗНО — тицяй на “Вчити”
                               </Typography>
                           </Box>
                           <Box className={classes.GifContainer}>
                               <img width="100%" src={StudyMatsDemo} />
                           </Box>
                       </Grid>


                       <Grid item>
                           <Box pb={3} pt={3}>
                               <Typography >
                                   І останнє, обери теми, які вже знаєш, щоб ми не додавали їх в твій планер
                               </Typography>
                           </Box>
                           <Box pb={10}>
                               <TopicsMultipleSelect handleChange={handleChange}/>
                           </Box>
                       </Grid>



                       <LargeButton className={classes.hidden}
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    display="hidden"
                       >
                           сікрєтний сікрєт невидима кнопка
                       </LargeButton>


                       <Box pb={2} width="100%" position="fixed" bgcolor="white" className={classes.bottom} >

                           <ScalableLargeButton
                               fullWidth
                               variant="contained"
                               color="primary"
                               onClick={handleProceed}
                           >
                               Далі
                           </ScalableLargeButton>

                       </Box>

                   </Grid>
               </Box>
            </Page>
    )
}

export default PlannerSetupScreen
