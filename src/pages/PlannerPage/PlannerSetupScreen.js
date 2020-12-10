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
import MobileStepper from '@material-ui/core/MobileStepper';



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
        bottom: "0px",
        width: "100%",
        left:"0",
        position:"fixed",
        bgcolor:"white"
    },
    GifContainer: {
        width: "70%"
    },
    Stepper: {
        maxWidth: 400,
        flexGrow: 1,
        justifyContent: "center",
        backgroundColor: "white",
    },

}));




const PlannerSetupScreen = (props) => {
    const classes = useStyles();

    const [currentCard, setCurrentCard] = React.useState(0);

    const cards = [
        {
            "Card": InfoCard,
            "props": {
                "text": "Хееей! Ми створимо тобі особистий планер. Він твій, тільки твій ",
                "img": WeeksDemo,
                "order": 0
            }
        },
        {
            "Card": InfoCard,
            "props": {
                "text": "Починаючи від цього тижня, планер показує тобі, які саме теми треба вчити, щоб встигнути все до ЗНО",
                "img": WeeksDemo,
                "order": 1
            }
        },
        {
            "Card": InfoCard,
            "props": {
                "text": "Коли тема вивчена, викреслюй її з списку",
                "img": CheckboxDemo,
                "order": 2
            }
        },
        {
            "Card": InfoCard,
            "props": {
                "text": "До кожної теми ми підібрали конспекти, теорію і пробні ЗНО — тицяй на “Вчити”",
                "img": CheckboxDemo,
                "order": 3
            }
        },
        {
            "Card": InputCard,
            "props": {
                "name" : "exclude topics demo",
                "order": 4
            }
        }
    ]

    const handleProceed = (selectedTopicIds) => {
        // if selectedTopics were returned, it's the last card, so call parent function
        if (selectedTopicIds) {
            props.createNewPlanner(selectedTopicIds);
        } else {
            setCurrentCard(currentCard+1)
        }
    }

    const Card = cards[currentCard]["Card"]
    const CardProps = cards[currentCard]["props"]

    return (
        <Card {...CardProps} handleProceed={handleProceed}/>
    )

}

// --------------------------------------------------------------------------------------------------------------------------

const InfoCard = (props) => {
    const classes = useStyles();

    const handleProceed = () => {
        props.handleProceed()
    }

    return(
        <Page>
            <Box>
            <Grid container
                  spacing={0}
                  align="center"
                  justify="center"
                  direction="column">
            <Grid item>

                <Box display="flex" justifyContent="center" pb={10} pt={15}>
                    <Typography variant="subtitle1">
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

            <Box pb={2} pl={2} className={classes.bottom} >
                <ScalableLargeButton
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleProceed}
                >
                    Далі
                </ScalableLargeButton>
            </Box>


            <Grid item>
                <MobileStepper
                    variant="dots"
                    steps={5}
                    position="static"
                    activeStep={props.order}
                    className={classes.Stepper}/>
            </Grid>

            </Grid>
            </Box>
        </Page>
    )

}

//------------------------------------------------------------------------------------------------------------------------

const InputCard = (props) => {
    const classes = useStyles();

    const [selectedTopicIds, setSelectedIds] = React.useState([]);

    const handleChange = (newSelectedTopicIds) => {
        setSelectedIds(newSelectedTopicIds);
    }

    const handleProceed = () => {
        props.handleProceed(selectedTopicIds)
    }

    return(
        <Page>
            <Grid container
                  spacing={0}
                  align="center"
                  justify="center"
                  direction="column">
            <Grid item>
                <Box pb={3} pt={15}>
                    <Typography variant="subtitle1" >
                        І останнє, обери теми, які вже знаєш, щоб ми не додавали їх в твій планер
                    </Typography>
                </Box>
                <Box pb={10}>
                    <TopicsMultipleSelect handleChange={handleChange}/>
                </Box>
            </Grid>

            <Box pb={2} pl={2} className={classes.bottom} > 
                <ScalableLargeButton
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleProceed}
                >
                    Далі
                </ScalableLargeButton>
            </Box>

            <Grid item>
                <MobileStepper
                    variant="dots"
                    steps={5}
                    position="static"
                    activeStep={props.order}
                    className={classes.Stepper}/>
            </Grid>

            </Grid>
        </Page>
    )

}


export default PlannerSetupScreen
