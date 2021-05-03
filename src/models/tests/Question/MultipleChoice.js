import React from "react";
import { QuestionComponent } from "./QuestionComponent";
import s from './Question.module.css'
import { Grid, Typography } from "@material-ui/core";
import clsx from 'clsx'
import RenderHTML from '../RenderHTML'




export class MultipleChoice extends QuestionComponent {
    constructor(props, answer_options) {
        super(props)
        this.answer_options_data = this.formAnswerOptionsData(answer_options)
    }

    formAnswerOptionsData(answer_options) {
        // answer_options are ["A", "B", "C"...]

        let answer_options_datas = []
        this.props.question.data.options.map((text_option, idx) => {
            answer_options_datas.push({ "answer": answer_options[idx], "text": text_option, "comment": this.getComment(idx) })
        })

        return answer_options_datas
    }

    getComment(idx) {
        let comment = undefined
        if (this.props.question.data.comments && this.props.question.data.comments[idx] !== "") {
            comment = this.props.question.data.comments[idx]
        }
        return comment
    }

    handleAnswerOptionClick = (answer_option_data) => {
        if (!this.state.is_submitted) {
            this.updateUserAnswer(answer_option_data.answer)
            // this.setState({ user_answer: answer_option_data.answer }, () => this.updateUserAnswerStarted())
        }

    }

    displayOptions() {
        // TODO put buttons in a grid
        return this.answer_options_data.map((answer_option_data) => this.getAnswerOption(answer_option_data))
    }

    displayComment(answer_option_data) {
        if (answer_option_data.comment) {
            return <Grid item><Typography variant="subtitle1">
            <RenderHTML HTML={answer_option_data.comment} />
            </Typography></Grid>
        }
    }

    getOption(answer_option_data, class_name) {
        return <div className={class_name} onClick={() => this.handleAnswerOptionClick(answer_option_data)}>
            <Grid container direction="row" alignItems="center">
                <Grid item>
                <Typography style={{ marginRight: '20px' }} variant="h6">
                {answer_option_data.answer}:</Typography>
                </Grid>

                <Grid item>            
                <Typography variant="subtitle1" />
                <RenderHTML HTML={answer_option_data.text} />
                </Grid>
            </Grid>
            {this.displayComment(answer_option_data)}
        </div> 
    }

    getNormalOption(answer_option_data) {
        return this.getOption(answer_option_data, s.Button)
    }

    getNormalSubmittedOption(answer_option_data) {
        return this.getOption(answer_option_data, s.Button)
    }

    getClickedOption(answer_option_data) {
        return this.getOption(answer_option_data, clsx(s.Button, s.choosen))
    }

    getCorrectOption(answer_option_data) {
        return this.getOption(answer_option_data, clsx(s.Button, s.correct))
    }

    getSubmittedIncorrectOption(answer_option_data) {
        return this.getOption(answer_option_data, clsx(s.Button, s.incorrect))
    }

    isOptionChosen(answer_option_data) {
        if (this.getUserAnswerState()) {
            return this.getUserAnswerState().includes(answer_option_data.answer)
        }
        else return false
    }

    getCorrectAnswer() {
        return this.props.question.data.correct_answer.toUpperCase()
    }

    isOptionCorrect(answer_option_data) {
        return answer_option_data.answer === this.getCorrectAnswer()
    }

    score() {
        let score = 0
        let max_score = 1

        if (this.getUserAnswerState() === this.getCorrectAnswer()) score = 1
        return [score, max_score]
    }

    isQuestionCorrect() {
        if (this.getUserAnswerState() === this.getCorrectAnswer()) return true
        return false
    }

}






export class EnglishLettersMultipleChoice extends MultipleChoice {
    constructor(props) {
        super(props, ["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L"])
    }
}

export class ABCD extends EnglishLettersMultipleChoice {}
export class ABCDE extends EnglishLettersMultipleChoice {}
export class LangMultipleChoice extends EnglishLettersMultipleChoice {}



export class NumbersMultipleChoice extends MultipleChoice {
    constructor(props) {
        super(props, ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"])
    }
}

export class OneOutOfSeven extends NumbersMultipleChoice {}


export class TrueFalse extends MultipleChoice {
    constructor(props) {
        super(props, ["True", "False"])
    }



    // override
    // TODO check if TrueFalse buttons are displayd the same as ABCD
    // TODO especially to match "answer" string from here with "correct_answer" from strapi
    formAnswerOptionsData(answer_options) {

        let answer_options_datas = []

        answer_options.map((answer_option, idx) => {
            answer_options_datas.push({ "answer": answer_option, "text": "", "comment": this.getComment(idx) })
        })

        return answer_options_datas
    }


}




