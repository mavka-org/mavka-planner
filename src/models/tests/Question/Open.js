import { QuestionComponent } from "./QuestionComponent";
import React from "react";
import s from './Open.module.css'
import { Typography } from "@material-ui/core";
export class Open extends QuestionComponent {

    constructor(props) {
        super(props)
        // let inputsNumber = props.inputsNumber
    }

    formAnswerOptionsData(answer_options) {
        // answer_options are ["A", "B", "C"...]

        let answer_options_datas = []
        this.props.question.data.options.map((text_option, idx) => {
            answer_options_datas.push({ "answer": answer_options[idx], "text": text_option, "comment": this.getComment(idx) })
        })

        return answer_options_datas
    }

    subquestionExists(i) {
        return (this.props.question.data.subquestions && this.props.question.data.subquestions[i])
    }

    getSubquestion(i) {
        if (this.subquestionExists(i)) {
            return <Typography variant="subtitle1" dangerouslySetInnerHTML={{ __html: this.props.question.data.subquestions[i] }}></Typography>
        }

    }

    // slices input string to separate brtween n-1 and n-th semicolumn
    cutBySemicolumn(input, untilOccurance) {
        for (let i = 0; i <= untilOccurance; i++) {
            if (i === untilOccurance) {
                if (input.indexOf(";") !== -1) {
                    input = input.slice(0, input.indexOf(";"))
                }
            } else {
                input = input.slice(input.indexOf(";") + 1)
            }
        }
        return input
    }

    displayOptions() {

        let toDisplay = []

        if (this.state.is_submitted) {

            for (let subq_n = 0; subq_n < 3; subq_n++) {

                toDisplay.push(this.getSubquestion(subq_n))

                let id = "openInput" + subq_n
                let subq_user_answer = this.cutBySemicolumn(this.state.user_answer, subq_n)
                let subq_correct_answer = this.cutBySemicolumn(this.props.question.data.correct_answer, subq_n)
                if (subq_user_answer === subq_correct_answer) {
                    toDisplay.push(this.getCorrectInputField(subq_n, id, subq_user_answer, subq_correct_answer))
                } else {
                    toDisplay.push(this.getIncorrectInputField(subq_n, id, subq_user_answer, subq_correct_answer))
                }
            }
        }
        else {

            for (let subq_n = 0; subq_n < 3; subq_n++) {
                let id = "openInput" + subq_n
                toDisplay.push(this.getSubquestion(subq_n))
                toDisplay.push(this.getEmptyInputField(subq_n, id))
            }
        }






        return <div>
            {toDisplay}
        </div>

    }

    // isOptionChosen() {return true}

    handleUserAnswerUpdate = () => {
        if (!this.state.is_submitted) {
            let user_answer = ""

            for (let i = 0; i < 3; i++) {
                let id = "openInput" + i
                user_answer += document.getElementById(id).value + ";"
            }

            if (!this.state.is_submitted) {
                this.updateUserAnswer(user_answer)
                // this.setState({ user_answer: answer_option_data.answer }, () => this.updateUserAnswerStarted())
            }
            console.log('user answer update', user_answer, this.state.user_answer)
        }
    }


    // handleSubmitQuestionClick = () => {

    //     this.setState({ user_answer: user_answer }, () => {
    //         super.updateData(user_answer);})
    // }

    getUserInput = (id) => {
        return this.cutBySemicolumn(this.state.user_answer, id)
    }



    /////// TODO FRONT
    // стилизовать тут
    getEmptyInputField(subq_n, id) {
        // TODO front -- звичайний, незаповнений input field
        return <><input className={s.normalInput} id={id} type="text" value={this.getUserInput(subq_n)} onChange={this.handleUserAnswerUpdate} maxLength="512" /></>
    }

    getCorrectInputField(subq_n, id, user_answer, correct_answer) {
        // TODO front -- коли питання засабмічене і юзер-відповідь правильна
        return <div>
            <Typography variant="subtitle1">ти ж моя умнічка, харош</Typography>
            <input className={s.correctInput} id={id} type="text" value={this.getUserInput(subq_n)} maxLength="512" />
            {this.getComment(subq_n)}
            <p></p>
        </div>
    }

    getIncorrectInputField(subq_n, id, user_answer, correct_answer) {
        // TODO front -- коли питання засамбічене, але юзер-відповідь неправильна
        return <div>
            <div><Typography variant="subtitle1" style={{margin:'10px 0'}}>лох непраивльно!!!</Typography>  </div>
            <input className={s.incorrectInput} id={id} type="text" value={this.getUserInput(subq_n)} maxLength="512" />
            <Typography variant="subtitle1" style={{margin:'10px 0'}}>Правильна відповідь: <b>  {correct_answer}</b></Typography>
            {this.getComment(subq_n)}
        </div>

    }

    getComment(subq_n) {
        // TODO front -- комент до підпитання
        if (this.props.question.data.comments && this.props.question.data.comments[subq_n]) {
            return <div style={{margin:'10px 0'}}><Typography variant="subtitle1">Коментар {this.props.question.data.comments[subq_n]}</Typography> </div>
        }
    }

}

export class SingleOpen extends Open { }
export class DoubleOpen extends Open { }