import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import s from './Question.module.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import './QuestionComponent.css'
import  navButton from '../../../assets/img/navButton.svg'
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

        this.setState({ is_submitted: true })
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


    getAnswerOption(answer_option_data, name) {

        if (this.state.is_submitted) {

            if (this.isOptionCorrect(answer_option_data)) {
                return this.getCorrectOption(answer_option_data, name)
            }

            if (this.isOptionChosen(answer_option_data)) {
                return this.getSubmittedIncorrectOption(answer_option_data,name)
            } else {
                return this.getNormalSubmittedOption(answer_option_data,name)
            }

        }
        else {
            if (this.isOptionChosen(answer_option_data)) {
                return this.getClickedOption(answer_option_data,name)
            } else {
                return this.getNormalOption(answer_option_data,name)
            }
        }
    }



    render() {
        // this.IsUserAnswerStarted()
        // this.user_answer = this.state.is_submitted

        return (
            (!this.props.hidden) ?
                <>
                    <Grid container direction="column">
                        {/*<div>{this.props.question.data.primary_question}</div>*/}
                        <Grid item container className={s.imgContainer} dangerouslySetInnerHTML={{ __html: this.props.question.data.primary_question }} />
                        <Grid item><Typography variant="h2">обери одну відповідь:</Typography> </Grid>
                    </Grid>
                    <Grid container>
                        {this.displayOptions()}
                    </Grid>


                    {this.props.question.is_submitted ? (
                        <Grid container>
                            <Grid item><Typography variant='subtitle1'> <b> Тема:</b>  {this.props.question.data.topic.name}</Typography> </Grid>

                            {this.props.question.data.hasOwnProperty("general_comment") ? (
                                <Typography variant='subtitle1'><b>  Загальний коментар:</b> {this.props.question.data.general_comment}</Typography>
                            ) : (null)}
                            {/* стилизовать тут */}
                        </Grid>
                    ) : (null)}



                    <div className={s.ButtonContainer}>
                        <button className={s.RoundedButton} onClick={() => this.props.handleChangeQuestion(this.props.question.data.order_id - 1)}><PlayArrowIcon style={{ transform: 'rotate(60deg)' }} /></button>
                        <button className={s.CheckButton} onClick={() => this.handleSubmitQuestionClick()}><Typography style={{ color: 'white' }} variant="h3">перевірити</Typography> </button>
                        <button className={s.RoundedButton} onClick={() => this.props.handleChangeQuestion(this.props.question.data.order_id + 1)}><PlayArrowIcon /></button>
                    </div>
                </>
                : null

        )

    }

}


// TODO -----------------------------------------------------------------------------------------------------------------






