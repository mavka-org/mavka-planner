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

    const [currentTutorialCard, setCurrentTutorialCard] = React.useState(0);

    const handleNextCard = () => {
        setCurrentTutorialCard(currentTutorialCard+1)



    }

    const handleChange = (newSelectedTopicIds) => {
        setSelectedIds(newSelectedTopicIds);
    }

    const handleProceed = () => {
        props.createNewPlanner(selectedTopicIds);
    }

    if (currentTutorialCard == "0") {
        return (
            <Page>
                <Box width="100%">
                    {/*<Grid container direction="column" alignItems="left" className={classes.Grid} pb={10}>*/}
                    {/*    <Grid item>*/}
                    {/*        <HeaderImage src={PlannerSetUpHeader} alt={'Створюємо планер'}/>*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}


                    {currentTutorialCard === "0" ?
                        <TutorialCard nextCard="1" handleNextCard={handleNextCard} text="Починаючи від цього тижня, планер показує тобі, які саме теми треба вчити, щоб встигнути все до ЗНО" img={WeeksDemo}></TutorialCard>
                        : <Typography>try again</Typography>}

                </Box>
            </Page>
        )
    }
}

const TutorialCard = (props) => {
    const classes = useStyles();


    return(
        <Page>
            <Grid item>

                <Box display="flex" justifyContent="center"  pb={3} pt={3}>
                    <Typography>
                        {props.text}
                    </Typography>
                </Box>

                <Box className={classes.GifContainer} >
                    <img width="70%" src={props.img} />
                </Box>

            </Grid>

            <LargeButton className={classes.hidden}
                         fullWidth
                         variant="contained"
                         color="primary"
                         display="hidden"
            >
                невидима кнопка
            </LargeButton>

            <Box pb={2} width="100%" position="fixed" bgcolor="white" className={classes.bottom} >
                <ScalableLargeButton
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={props.handleNextCard}
                >
                    Далі
                </ScalableLargeButton>
            </Box>

        </Page>
    )

}

const exculeTopicsCard = (props) => {

    const [selectedTopicIds, setSelectedIds] = React.useState([]);

    const handleChange = (newSelectedTopicIds) => {
        setSelectedIds(newSelectedTopicIds);
    }

    return(
        <Page>

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

            <Box pb={2} width="100%" position="fixed" bgcolor="white" className={classes.bottom} >
                <ScalableLargeButton
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={props.handleNextCard}
                >
                    Далі
                </ScalableLargeButton>
            </Box>
        </Page>
    )


}


export default PlannerSetupScreen
