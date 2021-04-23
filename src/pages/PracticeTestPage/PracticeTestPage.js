import React, { useContext, useReducer } from "react";
import { getQuestionsByTest } from "../../services/API/httpRequests.js"
import Loading from "../../components/Loading/Loading";
import QuestionData from "../../models/tests/QuestionData.js"
import { ABCD, ABCDE, LangMultipleChoice, OneOutOfSeven, TrueFalse } from "../../models/tests/Question/MultipleChoice";
import { Matching } from "../../models/tests/Question/Matching";
import { Open } from "../../models/tests/Question/Open";
import { Free } from "../../models/tests/Question/Free";
import { MultipleChoice } from "../../models/tests/Question/MultipleChoice";
import Page from "../../components/Page/Page.js";
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Typography } from "@material-ui/core";
import s from './PracticeTestPage.module.css'
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
// TODO dave it somewhere
let questionDatas = []

const questionTypes = {
    "ABCD": ABCD,
    "ABCDE": ABCDE,
    "LangMultipleChoice": LangMultipleChoice,
    "OneOutOfSeven": OneOutOfSeven,
    "TrueFalse": TrueFalse,
    "Matching": Matching,
    "MultipleChoice": MultipleChoice,
    "Open": Open,
    "Free": Free
}
const useStyles = makeStyles((theme) => ({
    root: {
        width: '415px',
        margin: '0 auto',
    },
}));

export default function PracticeTestPage(props) {

    const [isDataLoaded, setDataLoaded] = React.useState(false)
    const [currentQuestionIdx, setCurrentQuestionIdx] = React.useState(0)
    const [, forceUpdate] = useReducer(x => x + 1, 0);


    if (!isDataLoaded) {

        // TODO load actual test questions
        getQuestionsByTest("math_TODO", "strapi_id_TODO").then((testQuestionsResponse) => {

            testQuestionsResponse.forEach(function (q_data, idx) {

                let questionData = new QuestionData(q_data)
                questionDatas.push(questionData)

            })
            setDataLoaded(true)

        })


    }

    if (currentQuestionIdx === undefined && isDataLoaded) {
        //TODO set current question based on url or NavBar
        setCurrentQuestionIdx(0)
    }


    const handleChangeQuestion = (new_q_id) => {
        console.log('handleChangeQuestion', new_q_id)

        if (new_q_id >= 0 && new_q_id < questionDatas.length) {
            setCurrentQuestionIdx(new_q_id)
        }
    }

    const getQuestionComponents = (currentQuestionIdx) => {


        return questionDatas.map((questionData, idx) => {
            let QuestionType = questionTypes[questionData.data.type.slug]

            return <QuestionType
                question={questionData}
                hidden={currentQuestionIdx != idx}
                currentQuestionIdx={currentQuestionIdx}
                idx={idx}
                handleChangeQuestion={handleChangeQuestion}
                forceUpdate={forceUpdate}
            />

        })

    }

    const getNavBar = () => {
        // TODO front
        return questionDatas.map((questionData, idx) => {

            // стилизовать тут
            if (questionData.is_submitted) {
                if (questionData.is_correct) {
                    return <button className={s.correctButton} onClick={() => setCurrentQuestionIdx(idx)}>{questionData.data.order_id}</button>
                }
                else {
                    return <button className={s.incorrectButton} onClick={() => setCurrentQuestionIdx(idx)}>{questionData.data.order_id}</button>
                }
            }
            else {
                if (questionData.user_answer_started) {
                    return <button className={s.answeredButton} onClick={() => setCurrentQuestionIdx(idx)}>{questionData.data.order_id} </button>
                }
                else {
                    return <button className={s.normalButton} onClick={() => setCurrentQuestionIdx(idx)}>{questionData.data.order_id}</button>
                }
            }
        })


    }

    console.log('rerender')
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles()

    return (
        (currentQuestionIdx !== undefined) ? (
            <Container maxWidth="xs">
                <Grid container direction="column" >
                    <Grid item container direction="row" justify="flex-end" style={{ width: 'inherit' }}>
                        <IconButton onClick={handleClickOpen}>
                            <MenuIcon></MenuIcon>
                        </IconButton>
                    </Grid>
                    <Grid item style={{ width: 'inherit' }}><Typography variant="h2">завдання {currentQuestionIdx}</Typography></Grid>

                    {getQuestionComponents(currentQuestionIdx)}

                </Grid>
                {/* navbar будет */}
                <Dialog
                    PaperProps={{
                        style: { borderRadius: '28px' }
                    }}
                    maxWidth="xs"
                    className={classes.root}
                    paper={classes.paper}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"вибери тест:"}</DialogTitle>
                    <DialogContent>

                        <Grid container direction="row" justify="flex-start" >
                            {getNavBar()}
                        </Grid>
                    </DialogContent>

                </Dialog>
            </Container>
        )
            : <Loading />
    );

}