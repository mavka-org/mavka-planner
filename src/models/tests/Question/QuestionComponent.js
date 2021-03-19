import React from "react";
import { Container, Typography } from "@material-ui/core";
import s from './Question.module.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
export class QuestionComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { user_answer: undefined, is_submitted: false, test_state: "yo" }
    }

    getUserAnswerState() {
        return this.state.user_answer
    }

    getIsSubmittedState() {
        return this.state.user_answer
    }

    handleAnswerOptionClick = (answer_option_data) => { }


    handleSubmitQuestionClick = () => {
        // record essential data to QuestionData that was passes thru props
        this.props.question.is_submitted = true
        this.props.question.submitted_user_answer = this.state.user_answer
        this.props.question.score = this.score()
        this.props.question.is_correct = this.isQuestionCorrect()
        console.log("handleSubmitQuestionClick", this.props.question)

        this.setState({is_submitted: true})
        this.props.forceUpdate() // ugh not ideal, but needed to update question navigation panel

    }

    score() { }

    isQuestionCorrect() { }

    isOptionChosen(answer_option_data) { }

    isOptionCorrect(answer_option_data) { }

    showInfo() {
        console.log("\n\n Question ", this.props.question.order_id)
        console.log("this.state.is_submitted ", this.state.is_submitted)
        console.log("this.state.user_answer ", this.state.user_answer)

    }

    getCorrectOption(answer_option_data) { }

    getSubmittedIncorrectOption(answer_option_data) { }

    getClickedOption(answer_option_data) { }

    getNormalOption(answer_option_data) { }


    getAnswerOption(answer_option_data, value, name) {

        if (this.state.is_submitted) {

            if (this.isOptionCorrect(answer_option_data)) {
                return this.getCorrectOption(answer_option_data)
            }

            if (this.isOptionChosen(answer_option_data)) {
                return this.getSubmittedIncorrectOption(answer_option_data)
            } else {
                return this.getNormalOption(answer_option_data)
            }

        }
        else {
            if (this.isOptionChosen(answer_option_data)) {
                return this.getClickedOption(answer_option_data, value, name)
            } else {
                return this.getNormalOption(answer_option_data, value, name)
            }
        }
    }



    render() {
        this.user_answer = this.state.is_submitted

        return (
            (!this.props.hidden) ?
                <>
                    <div className='question-section'>
                        <div className='question-count'>


                            {/* <span>Question {this.props.question.data.order_id} of type {this.props.question.data.type.slug}</span> */}
                        </div>
                        {/*TODO show text as html*/}
                        {/*<div className='question-text' dangerouslySetInnerHTML={{ __html: "<div>{testQuestions[currentQuestion].primary_question}</div>" }} ></div>*/}
                        {this.props.question.data.primary_question}
                        <Typography variant="h2">обери одну відповідь:</Typography>
                    </div>
                    <div className='answer-section'>
                        {this.displayOptions()}
                    </div>


                    {this.props.question.is_submitted ? (
                        <div>
                            <div>Тема: {this.props.question.data.topic.name}</div>

                            {this.props.question.data.hasOwnProperty("general_comment") ? (
                                <div>Загальний коментар: {this.props.question.data.general_comment}</div>
                            ) : (null)}

                        </div>
                    ) : (null) }



                    <div className={s.ButtonContainer}>
                        <div className={s.RoundedButton} onClick={() => this.props.handleChangeQuestion(this.props.question.data.order_id - 1)}><PlayArrowIcon style={{ transform: 'rotate(60deg)' }} /></div>
                        <div className={s.CheckButton} onClick={() => this.handleSubmitQuestionClick()}><Typography style={{ color: 'white' }} variant="h3">перевірити</Typography> </div>
                        <div className={s.RoundedButton} onClick={() => this.props.handleChangeQuestion(this.props.question.data.order_id + 1)}><PlayArrowIcon /></div>

                    </div>
                </>
                : null

        )

    }

}


// TODO -----------------------------------------------------------------------------------------------------------------






