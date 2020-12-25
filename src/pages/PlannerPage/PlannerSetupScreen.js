import { Box, Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, {useContext, useEffect} from "react";
import Page from './../../components/Page/Page';
import TopicsMultipleSelect from "./TopicsMultipleSelect.js";
import {ScalableLargeButton, LargeButton} from './../../components/Button/Button.js'
import WeeksDemo from '../../assets/img/weeks.gif'
import CheckboxDemo from '../../assets/img/checkbox.gif'
import StudyMatsDemo from '../../assets/img/study-mats.gif'
import CuteGif from '../../assets/img/giphy.gif'
import MobileStepper from '@material-ui/core/MobileStepper';
import Program from "../../models/program/program"
import { getProgram } from "../../services/API/httpRequests";
import {UserContext} from "../../providers/UserProvider";
import {SubjectContext} from "../../providers/SubjectProvider";


const useStyles = makeStyles((theme) => ({
    Grid: {
        // width: "100%",
        justifyContent: "center",

    },
    Img: {
        width: "70%"
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
    multiSelect: {
        height: "50%",
    },
    boxBorders: {
        boarderWidth: "10px",
        boxShadow: '0px 7px 12px -5px rgba(0,0,0,0.75)',
        filter: 'drop-shadow(4px 4px 12px rgba(0, 0, 0, 0.15))',
      }
}));



const PlannerSetupScreen = (props) => {
    const subject = useContext(SubjectContext)[0]

    const [currentCard, setCurrentCard] = React.useState(0);
    const [program, setProgram] = React.useState(null)

    if (!program) {
        getProgram().then((programResponse) => {
            setProgram(new Program(programResponse["data"]))
        })
    }


    // use effects
    useEffect(
        () => {
               window.gtag('event', 'planner_setup_action', {
                    'action' : 'started',
                    'subject_id' : subject.id,
                })
        }, []
    )




    const cards = [
        // {
        //     "Card": InfoCard,
        //     "props": {
        //         "text": "Хееей! Го створимо тобі твій особистий планер ",
        //         "img": CuteGif,
        //         "order": 0
        //     }
        // },
        {
            "Card": InfoCard,
            "props": {
                "text": "Починаючи від цього тижня, планер показує тобі, які саме теми треба вчити, щоб встигнути все до ЗНО",
                "img": WeeksDemo,
                "order": 0
            }
        },
        // {
        //     "Card": InfoCard,
        //     "props": {
        //         "text": "Коли тема вивчена, викреслюй її зі списку",
        //         "img": CheckboxDemo,
        //         "order": 2
        //     }
        // },
        {
            "Card": InfoCard,
            "props": {
                "text": "До кожної теми ми підібрали конспекти, теорію і пробні ЗНО”",
                "img": StudyMatsDemo,
                "order": 1
            }
        },
        {
            "Card": InputCard,
            "props": {
                "text": "І останнє, можеш виключити теми, які вже знаєш, щоб ми не додавали їх в твій планер. Якщо хочеш вчити все, просто пропусти",
                "order": 2,
                "program": program
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
            <Grid
                container
                align="center"
                justify="center"
                direction="column"
            >

            <Grid item>
                <Box display="flex" justifyContent="center" pb={10} pt={10}>
                    <Typography variant="subtitle1">
                        {props.text}
                    </Typography>
                </Box>

                <Box className={classes.GifContainer} >
                    <img width="100%" className={classes.boxBorders} src={props.img} alt="mavka" />
                </Box>
            </Grid>

                {props.order === 0 ?
                    <Grid item>
                        <Box mt={3}>
                        <Typography variant="subtitle2" >❗ Твій планер не збережеться, якщо ти не увійшов(-ла) </Typography>
                        </Box>
                    </Grid>
                    : null
                }

            <Box className={classes.bottom} >
                <ScalableLargeButton
                    name={"ProceedButton" + props.order}
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleProceed}
                    style={{background: '#000'}}
                >
                    Далі
                </ScalableLargeButton>

                <Box my={1} >
                    <MobileStepper
                        variant="dots"
                        steps={3}
                        position="static"
                        activeStep={props.order}
                        className={classes.Stepper}/>
                </Box>
            </Box>


            </Grid>
            </Box>
        </Page>
    )

}

//------------------------------------------------------------------------------------------------------------------------

const InputCard = (props) => {
    const classes = useStyles();
    const subject = useContext(SubjectContext)[0]
    const user = useContext(UserContext);

    const [selectedTopicIds, setSelectedIds] = React.useState([]);

    const handleChange = (newSelectedTopicIds) => {
        setSelectedIds(newSelectedTopicIds);
    }

    const handleProceed = () => {
        window.gtag('event', 'planner_setup_action', {
            'action' : 'finished',
            'subject_id' : subject.id,
            'topics_to_exclude' : selectedTopicIds,
        })

        props.handleProceed(selectedTopicIds)

    }

    return(
        <Page>
            <Grid container
                  align="center"
                  justify="center"
                  direction="column">
            <Grid item>
                <Box pb={10} pt={10}>
                    <Typography variant="subtitle1" >
                        {props.text}
                    </Typography>
                </Box>
                <Box mt={2}>
                    <TopicsMultipleSelect
                      className={classes.multiSelect}
                      handleChange={handleChange}
                      program={props.program}
                    />
                </Box>
            </Grid>

            <Box className={classes.bottom} >
                <ScalableLargeButton
                    name={"ProceedButton" + props.order}
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleProceed}
                    style={{background: '#000'}}

                >
                    Створити планер 🚀
                </ScalableLargeButton>

                <Box my={1}>
                    <MobileStepper
                        variant="dots"
                        steps={3}
                        position="static"
                        activeStep={props.order}
                        className={classes.Stepper}/>
                </Box>
            </Box>


            </Grid>
        </Page>
    )

}


export default PlannerSetupScreen
