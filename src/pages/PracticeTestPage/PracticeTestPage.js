import React, { useContext, useReducer } from "react";
import { useEffect, useState } from 'react';
import { getQuestionsByTest } from "../../services/API/httpRequests.js"
import Loading from "../../components/Loading/Loading";
import QuestionData from "../../models/tests/QuestionData.js"
import { ABCD, ABCDE, LangMultipleChoice, OneOutOfSeven, TrueFalse } from "../../models/tests/Question/MultipleChoice";
import { Matching } from "../../models/tests/Question/Matching";
import { Open } from "../../models/tests/Question/Open";
import { Free } from "../../models/tests/Question/Free";
import { MultipleChoice } from "../../models/tests/Question/MultipleChoice";
import { makeStyles } from '@material-ui/core/styles';
import QuestionNavigation from "../../models/tests/QuestionNavigation";
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Typography } from "@material-ui/core";
// import { score }  from "../../models/scoring/scoring";


// TODO save it somewhere
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
    const [isTestSubmitted, setTestSubmitted] = React.useState(false)
    const [score, setScore] = React.useState(false)


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
        console.log('handleChangeQuestion to', new_q_id)

        if (new_q_id >= 0 && new_q_id < questionDatas.length) {
            setCurrentQuestionIdx(new_q_id)
        }
    }

    const handleTestFinishClick = () => {
        // console.log("isTestSubmitted", isTestSubmitted, "doScore", doScore)

        if (!score) {
            setScore("start")
        }
    }




    
        // if (!isTestSubmitted) {

        //     // idea: score --> render to execute score --> 
        //     if (!doScore) {
                
        //         setDoScore(true)
        //         console.log("enable scoring")

        //     } else {

        //         setTestSubmitted(true)
        //         console.log("submitted")

        //     }
            

            
        // } 
        // setCurrentQuestionIdx("display test finish page")
    // }

    const getQuestionComponents = (currentQuestionIdx) => {

        return questionDatas.map((questionData, idx) => {
            let QuestionType = questionTypes[questionData.data.type.slug]

            return <QuestionType
                question={questionData}
                hidden={currentQuestionIdx != idx}
                currentQuestionIdx={currentQuestionIdx}
                idx={idx}
                isLast={idx==(questionDatas.length-1)}
                handleChangeQuestion={handleChangeQuestion}
                forceUpdate={forceUpdate}
                setScore={setScore}
                score={score}
            />

        })

    }

    const shouldDisplayTestFinish = () => {
        if (score === "done" && currentQuestionIdx !== "display test finish page") {
            console.log("setting idx to display test finish page")
            setCurrentQuestionIdx("display test finish page")
            setScore("finished")
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
                            withButton={true} 
                            questionDatas={questionDatas} 
                            setCurrentQuestionIdx={setCurrentQuestionIdx} 
                            handleTestFinishClick={handleTestFinishClick}
                            getOnlyIncorrectQs={false}
                            />

                            <Grid item style={{ width: 'inherit' }}><Typography variant="h2">завдання {currentQuestionIdx }</Typography></Grid>
                        </div>
                    )}
                    
                    {getQuestionComponents(currentQuestionIdx)}
                    
                </Grid>
            </Container>


        
        )
            : <Loading />
    );

}