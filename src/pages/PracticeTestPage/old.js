import React, {useContext} from "react";
import {UserContext} from "../../providers/UserProvider";
import {SubjectContext} from "../../providers/SubjectProvider";
import {getProgram, getTopic} from "../../services/API/httpRequests";
import Topic from "../../models/program/topic";
import Program from "../../models/program/program";
import { getQuestionsByTest } from "../../services/API/httpRequests.js"
import Loading from "../../components/Loading/Loading";
import QuestionData from "../../models/tests/QuestionData.js"
import QuestionComponent from "../../models/tests/Question/QuestionComponent";

export default function PracticeTestPage(props) {

    const [topic, setTopic] = React.useState(null)
    const user = useContext(UserContext);
    const subject = useContext(SubjectContext)[0]

    const [questionComponents, setQuestionComponents] = React.useState(undefined)
    const [currentQuestionIdx, setCurrentQuestionIdx] = React.useState(undefined)
    const [userAnswer, setUserAnswer] = React.useState(undefined)
    const testQuestionDatabase = []

    const handleNextQuestionClick = () => {
        if (currentQuestionIdx + 1 < questionComponents.length) {
            setCurrentQuestionIdx(currentQuestionIdx + 1)
        }
    }

    // const handlePreviousQuestionClick = () => {
    //     if (currentQuestion - 1 >= 0) {
    //         setCurrentQuestion(currentQuestion - 1)
    //         // TODO recalibrate all currentQuestion-related states
    //     }
    // }

    const handleAnswerOptionClick = (answerOption) => {
        // TODO
        setUserAnswer(userAnswer + answerOption)
    }

    const handleCheckQuestionClick = () => {
        // TODO check if the answer is correct
        // TODO display
    }

    const handleChangeQuestion = (new_q_id) => {
        if (new_q_id >=0 && new_q_id < questionComponents.length) {
            setCurrentQuestionIdx(questionComponents[new_q_id])
        }
    }


    if (questionComponents === undefined) {
        // TODO load actual test questions
        getQuestionsByTest("math_TODO", "strapi_id_TODO").then( (testQuestionsResponse) => {

            // TODO load data into some object (Test --> has Question
            let qComponents = []
            testQuestionsResponse.forEach(q_data => {

                let questionData = new QuestionData(q_data)
                testQuestionDatabase.push(questionData)
                qComponents.push(<QuestionComponent question={questionData}/>)

            })
            console.log("questionComponents 67 ", questionComponents)
            console.log("qComponents ", qComponents)
            setQuestionComponents("setQuestionComponents")
        })

    }

    if (currentQuestionIdx === undefined && questionComponents !== undefined) {
        //TODO set current question based on url
        console.log("questionComponents 77 ", questionComponents)
        setCurrentQuestionIdx(0)
    }


    return (

        currentQuestionIdx ?  <Loading/>

            : <Loading/>
    );
}

/*<QuestionComponent question={currentQuestionComponent} handleChangeQuestion={handleChangeQuestion}/>*/
// currentQuestion.display(userAnswer,setUserAnswer, handleChangeQuestion)