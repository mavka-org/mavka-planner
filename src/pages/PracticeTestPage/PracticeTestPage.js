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
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from "@material-ui/core";

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
                    return <button onClick={() => setCurrentQuestionIdx(idx)}>{questionData.data.order_id} green </button>
                }
                else {
                    return <button onClick={() => setCurrentQuestionIdx(idx)}>{questionData.data.order_id} red </button>
                }
            }
            else {
                if (questionData.user_answer_started) {
                    return <button onClick={() => setCurrentQuestionIdx(idx)}>{questionData.data.order_id} touched </button>
                }
                else {
                    return <button onClick={() => setCurrentQuestionIdx(idx)}>{questionData.data.order_id} </button>
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
    return (
        (currentQuestionIdx !== undefined) ? (
            <Container maxWidth="xs">
                <Grid container direction="column" >
                    <Grid item style={{ width: 'inherit' }}><Typography variant="h2">завдання {currentQuestionIdx}</Typography></Grid>
                    <div style={{ width: 'inherit' }}> NavBar {getNavBar()} </div>
                    <Button onClick={handleClickOpen}>click</Button>
                    {getQuestionComponents(currentQuestionIdx)}

                </Grid>
                {/* navbar будет */}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >

                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Disagree
                        </Button>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        )
            : <Loading />
    );

}