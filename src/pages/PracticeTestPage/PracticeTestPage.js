import React, { useContext, useReducer } from "react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getQuestionsByTest } from "../../services/API/httpRequests.js"
import Loading from "../../components/Loading/Loading";
import QuestionData from "../../models/tests/QuestionData.js"

import { makeStyles } from '@material-ui/core/styles';
import QuestionNavigation from "../../models/tests/QuestionNavigation";
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Typography } from "@material-ui/core";
import { getScore } from '../../models/scoring/scoring'

import { questionTypes, getQuestionComponent } from "./questionTypes"



// TODO save it somewhere
let questionDatas = []




const useStyles = makeStyles((theme) => ({
    root: {
        width: '415px',
        margin: '0 auto',
    },
}));

export default function PracticeTestPage(props) {
    const testId = useParams().id
    const questionId = useParams().questionId
    const [isDataLoaded, setDataLoaded] = React.useState(false)
    const [isDataRequested, setDataRequested] = React.useState(false)
    const [currentQuestionIdx, setCurrentQuestionIdx] = React.useState(undefined)
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    let [test_score, max_score, zno] = [0, 0, 0]

    // score: "not scored", "initialized", "individial questions scored", "ready for first-time display", "ready for display"
    const [score, setScore] = React.useState("not scored")


    if (!isDataRequested) {

        // TODO load actual test questions
        getQuestionsByTest("608177e96717352a740bde77").then((testQuestionsResponse) => {
            console.log(testQuestionsResponse)

            testQuestionsResponse.data.forEach(function (q_data, idx) {

                let questionData = new QuestionData(q_data)
                questionDatas.push(questionData)

            })
            setDataLoaded(true)
            console.log("DATA LOADED", questionDatas)

        })
        setDataRequested(true)
        console.log("DATA REQUESTED", questionDatas)

    }

    if (currentQuestionIdx === undefined && isDataLoaded) {
        //TODO set current question based on url or NavBar
        setCurrentQuestionIdx(questionId)
    }


    const handleChangeQuestion = (new_q_id) => {
        console.log('handleChangeQuestion to', new_q_id)

        if (new_q_id >= 0 && new_q_id < questionDatas.length) {
            window.history.replaceState({}, 'Question', `${window.location.origin}/practice/test/${testId}/question/${new_q_id}`)
            setCurrentQuestionIdx(new_q_id)
        }
    }

    const handleTestFinishClick = () => {
        console.log('handleTestFinishClick', score)

        if (score === "not scored") {
            setScore("initialized")
        } else if (score === "ready for display") {
            setCurrentQuestionIdx("display test finish page")
        }
    }


    const getQuestionComponents = (currentQuestionIdx) => {

        return questionDatas.map((questionData, idx) => {
            // let QuestionType = questionTypes[questionData.data.question_type]
            let QuestionType = getQuestionComponent(questionData.data.question_type)

            return <QuestionType
                question={questionData}
                hidden={currentQuestionIdx != idx}
                currentQuestionIdx={currentQuestionIdx}
                idx={idx}
                isLast={idx == (questionDatas.length - 1)}
                handleChangeQuestion={handleChangeQuestion}
                forceUpdate={forceUpdate}
                setScore={setScore}
                score={score}
            />

        })

    }

    const shouldDisplayTestFinish = () => {
        if (score === "individial questions scored" && currentQuestionIdx !== "display test finish page") {
            // TODO -- add real data to getScore
            let scores = getScore("математика", '2019', 'основна', questionDatas)
            test_score = scores[0]
            max_score = scores[1]
            zno = scores[2]
            console.log("HJHJHJHJ", test_score, max_score, zno)
            setScore("ready for first-time display")

        }

        else if (score === "ready for first-time display" && currentQuestionIdx !== "display test finish page") {
            setCurrentQuestionIdx("display test finish page")
            setScore("ready for display")

        }
    }


    console.log('rerender PracticeTestPage')

    return (

        (currentQuestionIdx !== undefined) ? (

            <Container maxWidth="xs">
                <Grid container direction="column" >

                    {shouldDisplayTestFinish()}

                    {(currentQuestionIdx === "display test finish page") ? (
                        <div>
                            <div>finish test page </div>
                            <QuestionNavigation
                                testId={testId}
                                withButton={false}
                                questionDatas={questionDatas}
                                setCurrentQuestionIdx={setCurrentQuestionIdx}
                                handleTestFinishClick={handleTestFinishClick}
                                getOnlyIncorrectQs={true}
                            />
                            {/* // finish test page*/}
                        </div>

                    ) : (
                        <div>
                            <QuestionNavigation
                                testId={testId}
                                withButton={true}
                                questionDatas={questionDatas}
                                setCurrentQuestionIdx={setCurrentQuestionIdx}
                                handleTestFinishClick={handleTestFinishClick}
                                getOnlyIncorrectQs={false}
                                isTestScored={score === "ready for display"}
                            />

                            <Grid item style={{ width: 'inherit' }}><Typography variant="h2">завдання {currentQuestionIdx}</Typography></Grid>
                        </div>
                    )}

                    {getQuestionComponents(currentQuestionIdx)}

                </Grid>
            </Container>



        )
            : <Loading />
    );

}