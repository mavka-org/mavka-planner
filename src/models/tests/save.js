// import React from "react";
//
// // export default class Question extends React.Component {
// export default class Question {
//
//     constructor(data) {
//         // super(props);
//         // this.order_id = props.data.order_id
//         // this.type = props.data.type
//         // this.strapi_id = props.data.strapi_id
//         // this.primary_question = props.data.primary_question
//         // this.options = props.data.options
//         // this.correct_answer = props.data.correct_answer
//         // this.tasks = props.data.tasks
//         // this.topic = props.data.topic
//         // this.test = props.data.test
//
//         this.order_id = data.order_id
//         this.type = data.type
//         this.strapi_id = data.strapi_id
//         this.primary_question = data.primary_question
//         this.options = data.options
//         this.correct_answer = data.correct_answer
//         this.tasks = data.tasks
//         this.topic = data.topic
//         this.test = data.test
//
//         this.user_answer = undefined
//         this.isSubmitted = false
//         this.user_answer = undefined
//         this.score = 0
//
//     }
//
//
//     handleSubmitQuestionClick() {
//         if (!this.user_answer) {
//             this.isSubmitted = true
//             this.calculateScore()
//         }
//     }
//
//     calculateScore() {
//         if (this.user_answer==this.correct_answer) return 1
//         return 0
//     }
//
//     // isOptionChosen(answerOption, userAnswer) {
//     //     return this.userAnswer.contains(answerOption)
//     //     // if (answerOption==userAnswer) {return true}
//     // }
//
//     isOptionChosen(answer_option) {
//         if (this.user_answer) {
//             return this.user_answer.includes(answer_option)
//         }
//         else return false
//     }
//
//     isOptionCorrect(answer_option) {
//         return answer_option==this.correct_answer
//     }
//
//     displayOption(answer_option, setUserAnswer) {
//         console.log("answer_option in displayOption ", answer_option, this.isOptionChosen(answer_option))
//         if (this.isSubmitted) {
//             if (this.isOptionChosen(answer_option)) {
//                 if (this.isOptionCorrect(answer_option)) {
//                     // display as chosen correct
//                     return <button onClick={() => setUserAnswer(answer_option)} > {answer_option} chosen & correct </button>
//                 } else {
//                     // display as chosen incorrect
//                     return <button onClick={() => setUserAnswer(answer_option)} > {answer_option} chosen & incorrect </button>
//                 }
//             } else  {
//                 // display as normal
//                 return <button onClick={() => setUserAnswer(answer_option)} > {answer_option}  </button>
//             }
//         }
//         else {
//             if (this.isOptionChosen(answer_option)) {
//                 // display as chosen
//                 return <button onClick={() => setUserAnswer(answer_option)} > {answer_option} chosen  </button>
//             }
//             else {
//                 // display as normal
//                 return <button onClick={() => setUserAnswer(answer_option)} > {answer_option}  </button>
//             }
//
//         }
//
//     }
//
//     display(userAnswer, setUserAnswer, handleChangeQuestion) {
//         // render() {
//         console.log("user_answer ", userAnswer)
//         this.user_answer = userAnswer
//
//         return (
//             <>
//                 <div className='question-section'>
//                     <div className='question-count'>
//                         <span>Question 1</span>
//                     </div>
//                     {/*TODO show text as html*/}
//                     {/*<div className='question-text' dangerouslySetInnerHTML={{ __html: {testQuestions[currentQuestion].primary_question} }} ></div>*/}
//                     {this.primary_question}
//
//                 </div>
//                 <div className='answer-section'>
//                     {/*TODO question.displayOptions*/}
//                     {this.options.map( (answer_option) => this.displayOption(answer_option, setUserAnswer))}
//                 </div>
//
//                 {
//                     this.isSubmitted ? "hey" : ""
//                 }
//                 <div>
//                     <button onClick={() => this.handleSubmitQuestionClick()}>Перевірити</button>
//                 </div>
//                 <div>
//                     <button onClick={() => handleChangeQuestion(this.order_id + 1)}>Наступне питання</button>
//                 </div>
//                 <div>
//                     <button onClick={() => handleChangeQuestion(this.order_id - 1)}>Попереднє питання</button>
//                 </div>
//             </>
//
//         )
//     }
//
// }
//
//
//
//
//
//
//
//
//
// import React, {useContext} from "react";
// import {UserContext} from "../../providers/UserProvider";
// import {SubjectContext} from "../../providers/SubjectProvider";
// import {getProgram, getTopic} from "../../services/API/httpRequests";
// import Topic from "../../models/program/topic";
// import Program from "../../models/program/program";
// import { getQuestionsByTest } from "../../services/API/httpRequests.js"
// import Loading from "../../components/Loading/Loading";
// import Question from "../../models/tests/QuestionData.js"
//
// export default function PracticeTestPage(props) {
//
//     const [topic, setTopic] = React.useState(null)
//     const user = useContext(UserContext);
//     const subject = useContext(SubjectContext)[0]
//
//     const [testQuestions, setTestQuestions] = React.useState(null)
//     const [currentQuestion, setCurrentQuestion] = React.useState(null)
//     const [userAnswer, setUserAnswer] = React.useState(null)
//
//     const handleNextQuestionClick = () => {
//         if (currentQuestion + 1 < testQuestions.length) {
//             setCurrentQuestion(currentQuestion + 1)
//         }
//     }
//
//     // const handlePreviousQuestionClick = () => {
//     //     if (currentQuestion - 1 >= 0) {
//     //         setCurrentQuestion(currentQuestion - 1)
//     //         // TODO recalibrate all currentQuestion-related states
//     //     }
//     // }
//
//     // const handleAnswerOptionClick = (answerOption) => {
//     //     // TODO
//     //     setUserAnswer(userAnswer + answerOption)
//     // }
//
//     // const handleCheckQuestionClick = () => {
//     //     // TODO check if the answer is correct
//     //     // TODO display
//     // }
//
//     const handleChangeQuestion = (new_q_id) => {
//         if (new_q_id >=0 && new_q_id < testQuestions.length) {
//             console.log("handleChangeQuestion")
//             console.log("new_q_id ", new_q_id)
//             setCurrentQuestion(testQuestions[new_q_id])
//         }
//     }
//
//     if (!testQuestions) {
//         console.log('hip')
//         // TODO load actual test questions
//         getQuestionsByTest("math_TODO", "strapi_id_TODO").then( (testQuestionsResponse) => {
//
//             // TODO load data into some object (Test --> has Question
//             let test_qs = []
//             testQuestionsResponse.forEach(q_data => {
//                 test_qs.push(new Question(q_data))
//                 // test_qs.push(<Question data={q_data}/>)
//             })
//             setTestQuestions(test_qs)
//         })
//
//     }
//
//     if (!currentQuestion && testQuestions) {
//         console.log("testQuestions ", testQuestions)
//         //TODO set current question based on url
//         setCurrentQuestion(testQuestions[0])
//     }
//
//
//     return (
//         currentQuestion ?
//             currentQuestion.display(userAnswer,setUserAnswer, handleChangeQuestion)
//
//             : <Loading/>
//     );
// }