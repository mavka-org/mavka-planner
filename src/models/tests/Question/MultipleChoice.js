import React from "react";
import { QuestionComponent } from "./QuestionComponent";
import s from './Question.module.css'
import { Grid, Typography } from "@material-ui/core";
import clsx from 'clsx'


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
            return <Grid item><Typography variant="subtitle1">--- {answer_option_data.comment}</Typography></Grid>
        }
    }

    getNormalOption(answer_option_data) {
        // TODO front
        return <div className={s.Button} onClick={() => this.handleAnswerOptionClick(answer_option_data)}>
            <Grid container direction="row" alignItems="center">
                <Grid item>            <Typography style={{ marginRight: '20px' }} variant="h6">{answer_option_data.answer}:</Typography></Grid>
                <Grid item>            <Typography variant="subtitle1">{answer_option_data.text}</Typography></Grid>
            </Grid>
        </div>
    }

    getNormalSubmittedOption(answer_option_data) {
        // TODO front
        return <div className={s.Button} onClick={() => this.handleAnswerOptionClick(answer_option_data)}>
            <Grid container direction="row" alignItems="center">
                <Grid item>            <Typography style={{ marginRight: '20px' }} variant="h6">{answer_option_data.answer}:</Typography></Grid>
                <Grid item>            <Typography variant="subtitle1">{answer_option_data.text}</Typography>                </Grid>
            </Grid>
            {this.displayComment(answer_option_data)}
        </div>

    }

    getClickedOption(answer_option_data) {
        // TODO front
        return <div className={clsx(s.Button, s.choosen)}
            onClick={() => this.handleAnswerOptionClick(answer_option_data)}>
            <Grid container direction="row" alignItems="center">
                <Grid item>            <Typography style={{ marginRight: '20px' }} variant="h6">{answer_option_data.answer}:</Typography></Grid>
                <Grid item>            <Typography variant="subtitle1">{answer_option_data.text}</Typography></Grid>
            </Grid>
        </div>
    }

    getCorrectOption(answer_option_data) {
        // TODO front
        console.log("getCorrectOption")
        return <div className={clsx(s.Button, s.correct)} onClick={() => this.handleAnswerOptionClick(answer_option_data)}>
            <Grid container direction="row" alignItems="center">
                <Grid item>            <Typography style={{ marginRight: '20px' }} variant="h6">{answer_option_data.answer}:</Typography></Grid>
                <Grid item>            <Typography variant="subtitle1">{answer_option_data.text}</Typography>                </Grid>
            </Grid>
            {this.displayComment(answer_option_data)}
        </div>

    }

    getSubmittedIncorrectOption(answer_option_data) {
        // TODO front
        console.log("getSubmittedIncorrectOption")
        return <div className={clsx(s.Button, s.incorrect)} onClick={() => this.handleAnswerOptionClick(answer_option_data)}>
            <Grid container direction="row" alignItems="center">
                <Grid item>                      <Typography style={{ marginRight: '20px' }} variant="h6">{answer_option_data.answer}:</Typography></Grid>
                <Grid item>                       <Typography variant="subtitle1">{answer_option_data.text}</Typography>                </Grid>
            </Grid>
            {this.displayComment(answer_option_data)}
        </div>
    }

    isOptionChosen(answer_option_data) {
        if (this.getUserAnswerState()) {
            return this.getUserAnswerState().includes(answer_option_data.answer)
        }
        else return false
    }

    isOptionCorrect(answer_option_data) {
        return answer_option_data.answer === this.props.question.data.correct_answer
    }

    score() {
        //TODO are they always scored 1?
        if (this.getUserAnswerState() === this.props.question.data.correct_answer) return 1
        return 0
    }

    isQuestionCorrect() {
        if (this.getUserAnswerState() === this.props.question.data.correct_answer) return true
        return false
    }

}



export class ABCD extends MultipleChoice {
    constructor(props) {
        super(props, ["A", "B", "C", "D"])
    }
}


export class ABCDE extends MultipleChoice {
    constructor(props) {
        super(props, ["A", "B", "C", "D", "E"])
    }
}


export class LangMultipleChoice extends MultipleChoice {
    constructor(props) {
        super(props, ["A", "B", "C", "D", "E", "F", "G", "H", "I"])
    }
}

export class OneOutOfSeven extends MultipleChoice {
    constructor(props) {
        super(props, ["1", "2", "3", "4", "5", "6", "7"])
    }
}


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


export class Open extends QuestionComponent {
    displayOptions() {
        // TODO front
    }
}
export class SingleOpen extends Open { }
export class DoubleOpen extends Open { }

export class Free extends QuestionComponent { }

export class Sequencing extends QuestionComponent { }
export class Sequencing4x4 extends Sequencing { }

export class ThreeOutOfSeven extends QuestionComponent { }
export class TripleMultipleChoice extends QuestionComponent { }






