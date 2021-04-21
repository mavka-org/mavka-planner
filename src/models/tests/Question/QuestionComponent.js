import React from "react";
import { Container, Typography } from "@material-ui/core";
import s from './Question.module.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';


export class QuestionComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { user_answer: '', is_submitted: false, test_state: "yo" }
    }

    updateUserAnswerStarted() {
        console.log(this.state.user_answer)
        //used for navbar: when user enters some answer but doesn't submit it ye, the question is marked "touched" in navbar
        if (this.state.user_answer && this.state.user_answer !== "") {
            this.props.question.user_answer_started = true
        } else {
            this.props.question.user_answer_started = false
        }
        this.props.forceUpdate() // ugh not ideal, but needed to update question navigation panel
    }




    getUserAnswerState() {
        return this.state.user_answer
    }

    getIsSubmittedState() {
        return this.state.user_answer
    }

    handleAnswerOptionClick = (answer_option_data) => { }

    updateUserAnswer = (new_user_answer) => {
        this.setState({ user_answer: new_user_answer }, () => this.updateUserAnswerStarted())
    }


    updateData(user_answer) {

        // record essential data to QuestionData that was passes thru props
        this.props.question.is_submitted = true
        this.props.question.submitted_user_answer = this.state.user_answer
        this.props.question.score = this.score()
        this.props.question.is_correct = this.isQuestionCorrect()
        
        console.log("handleSubmitQuestionClick", this.props.question)

        this.setState({is_submitted: true})
        this.props.forceUpdate() // ugh not ideal, but needed to update question navigation panel
    }


    handleSubmitQuestionClick = () => {
        // weird work-around, but needed for Open template
        this.updateData()
    }

    score() { }

    isQuestionCorrect() { }

    isOptionChosen(answer_option_data) { }

    isOptionCorrect(answer_option_data) { }

    getCorrectOption(answer_option_data) { }

    getSubmittedIncorrectOption(answer_option_data) { }

    getClickedOption(answer_option_data) { }

    getNormalOption(answer_option_data) { }

    getNormalSubmittedOption(answer_option_data) { }


    getAnswerOption(answer_option_data) {

        if (this.state.is_submitted) {

            if (this.isOptionCorrect(answer_option_data)) {
                return this.getCorrectOption(answer_option_data)
            }

            if (this.isOptionChosen(answer_option_data)) {
                return this.getSubmittedIncorrectOption(answer_option_data)
            } else {
                return this.getNormalSubmittedOption(answer_option_data)
            }

        }
        else {
            if (this.isOptionChosen(answer_option_data)) {
                return this.getClickedOption(answer_option_data)
            } else {
                return this.getNormalOption(answer_option_data)
            }
        }
    }



    render() {
        // this.IsUserAnswerStarted()
        // this.user_answer = this.state.is_submitted

        return (
            (!this.props.hidden) ?
                <>
                    <div className='question-section' style={{width:'inherit'}}>
                        <div className='question-count'>


                            {/* <span>Question {this.props.question.data.order_id} of type {this.props.question.data.type.slug}</span> */}
                        </div>
                        {/*<div>{this.props.question.data.primary_question}</div>*/}
                        <div dangerouslySetInnerHTML={{ __html: this.props.question.data.primary_question }} />
                        <Typography style={{width:'inherit'}} variant="h2">обери одну відповідь:</Typography>
                    </div>
                    <div className='answer-section'>
                        {this.displayOptions()}
                    </div>


                    {this.props.question.is_submitted ? (
                        <div>
                            <div style={{width:'inherit'}}>Тема: {this.props.question.data.topic.name}</div>

                            {this.props.question.data.hasOwnProperty("general_comment") ? (
                                <div style={{width:'inherit'}} >Загальний коментар: {this.props.question.data.general_comment}</div>
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






