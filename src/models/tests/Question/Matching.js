import { QuestionComponent } from "./QuestionComponent";
import React from "react";
import s from './Question.module.css'
import { Grid, Typography } from "@material-ui/core";

export class Matching extends QuestionComponent {

    constructor(props) {
        super(props)
        this.optionNames = ["A", "B", "C", "D", "E", "F", "G"]
        this.taskNames = ["1", "2", "3", "4", "5", "6", "7"]
        this.options = this.formOptions()
        this.tasks = this.formTasks()
    }

    formOptions() {
        let options = []
        this.props.question.data.options.map((option, idx) => {
            options.push({ "name": this.optionNames[idx], "option": option, "comment": this.getOptionComment(idx) })
        })
        return options
    }

    getOptionComment(idx) {
        let comment = undefined
        if (this.props.question.data.active_explanation && this.props.question.data.active_explanation.option_explanations
             && this.props.question.data.active_explanation.option_explanations[idx] !== "") {
            comment = this.props.question.data.active_explanation.option_explanations[idx]
        }
        return comment

    }

    formTasks() {
        let tasks = []
        this.props.question.data.tasks.map((task, idx) => {
            tasks.push({ "name": this.taskNames[idx], "task": task, "comment": this.getTaskComment(idx) })
        })

        return tasks
    }

    getTaskComment(idx) {
        let comment = undefined
        if (this.props.question.data.active_explanation && this.props.question.data.active_explanation.task_explanations
            && this.props.question.data.active_explanation.task_explanations[idx] !== "") {
            comment = this.props.question.data.active_explanation.task_explanations[idx]
        }
        return comment

    }

    displayComment(answer_option_data) {

        // стилизовать тут
        if (this.state.is_submitted) {
            if (answer_option_data.active_explanation && answer_option_data.active_explanation.comment) {
                return <Grid item className="comment"> --- {answer_option_data.active_explanation.comment}</Grid>
            }
        }
    }

    displayOptions() {
        let toDisplay = []
        let tableRow = []
        let value, name;
        // TODO front
        // display options (aka "A: text for option A")
        toDisplay.push(this.options.map((option_data) => {
            return <Grid container direction="column" className={s.Button__MatchingText}>
                <Grid item container direction="row">
                    <Grid item> <Typography style={{ marginRight: '20px' }} variant="h6">{option_data.name}: </Typography></Grid>
                    <Grid item><Typography variant="subtitle1">{option_data.option}</Typography></Grid>
                </Grid>
                <Grid item container direction="column">
                    {this.displayComment(option_data)}
                </Grid>
            </Grid>
        }))

        // display tasks (aka "1: text for task 1")
        // toDisplay.push(this.tasks.map( (task_data) => {
        //     return <div>{task_data.name}: {task_data.task}</div>

        toDisplay.push(this.tasks.map((task_data) => {
            return <div className={s.Button__MatchingText}>
                <Typography style={{ marginRight: '20px' }} variant="h6">{task_data.name}:</Typography>
                <Typography variant="subtitle1">{task_data.task}</Typography>
                {this.displayComment(task_data)}
            </div>
        }))

        toDisplay.push(
            <div class={s.table}>
                <table class={s.select_answer}>
                    <tbody>
                        <tr>
                            <th></th>
                            {this.options.map((option_data) => {
                                return <th><Typography variant="h2">{option_data.name}</Typography></th>
                            })}

                        </tr>
                        {this.tasks.map((task_data) => {
                            tableRow = (
                                <tr>
                                    <th class={s.r}><Typography variant="h2">{task_data.name}</Typography></th>
                                    {this.options.map((option_data) => {
                                        value = task_data.name + option_data.name
                                        name = task_data.name
                                        let answer_option_data = task_data.name + option_data.name + ";"
                                        return <>
                                            <td>
                                                {this.getAnswerOption(answer_option_data, name)}
                                            </td>
                                        </>
                                    })}
                                </tr>
                            )

                            return tableRow
                        })}
                    </tbody>
                </table></div>)

        return toDisplay
    }


    getNormalOption(answer_option_data, name) {
        // TODO front
        return <>
            <label>
                <input onClick={() => this.handleAnswerOptionClick(answer_option_data)} name={name} type="radio" ></input>
                <span class={s.marker}></span>
            </label>
        </>
    }

    getNormalSubmittedOption(answer_option_data, name) {
        // TODO front
        return <>
            <label>
                <input onClick={() => this.handleAnswerOptionClick(answer_option_data)} name={name} type="radio"></input>
                <span class={s.marker}></span>
            </label>
        </>
    }



    getClickedOption(answer_option_data, name) {
        // TODO front
        return <>
            <label>
                <input onClick={() => this.handleAnswerOptionClick(answer_option_data)} name={name} type="radio"></input>
                <span class={s.marker}></span>
            </label>
        </>
    }

    getCorrectOption(answer_option_data, name) {
        // TODO front
        return <>
            <label >
                <input onClick={() => this.handleAnswerOptionClick(answer_option_data)}name={name} type="radio"></input>
                <span style={{ backgroundColor: '#1AB2A8' }} class={s.marker__correct}></span>
            </label>
        </>
    }

    getSubmittedIncorrectOption(answer_option_data, name) {
        // TODO front
        return <>
            <label>
                <input onClick={() => this.handleAnswerOptionClick(answer_option_data)} name={name} type="radio"></input>
                <span style={{ backgroundColor: '#EB5757' }} class={s.marker}></span>
            </label>
        </>
    }

    handleAnswerOptionClick = (answer_option_data) => {
        if (!this.state.is_submitted) {
            let newUserAnswer = ""

            if (this.getUserAnswerState()) {
                // if the option was already selected, unselect it
                if (this.getUserAnswerState().includes(answer_option_data)) {
                    newUserAnswer = this.getUserAnswerState().replace(answer_option_data, "")
                }

                // if user clicked on row that was already selected, replace it
                // ex, if "1a;" was already selected and user clicked on "1b;", delete "1a;" from user_answer
                else if (this.getUserAnswerState().includes(answer_option_data.substring(0, 1))) {
                    let start = this.getUserAnswerState().indexOf(answer_option_data.substring(0, 1))
                    let snippet = this.getUserAnswerState().substring(start, start + 3)
                    newUserAnswer = this.getUserAnswerState().replace(snippet, answer_option_data)
                } else {
                    newUserAnswer = this.getUserAnswerState() + answer_option_data
                }
            } else {
                newUserAnswer = answer_option_data
            }
            this.updateUserAnswer(newUserAnswer)
        }
    }

    getCorrectAnswer() {
        return this.props.question.data.correct_answer.toUpperCase() + ";"
    }


    isOptionCorrect(answer_option_data) {
        return this.getCorrectAnswer().includes(answer_option_data)
    }

    isOptionChosen(answer_option_data) {
        if (this.getUserAnswerState()) {
            return this.getUserAnswerState().includes(answer_option_data)
        }
        else return false
    }

    // score() {
    //     let score = 0
    //     let max_score = 0

    //     this.getUserAnswerState().split(";").map( (user_option_answer) => {
    //         max_score += 1
    //         if (user_option_answer != "") {
    //             if(this.props.question.data.correct_answer.includes(user_option_answer)) score += 1
    //         }
    //     } )
    //     return [score, max_score]
    // }

    
    score() {
        let score = 0
        let max_score = 0

        this.getCorrectAnswer().split(";").map( (correct_answer) => {
            if (correct_answer != "") {
                max_score += 1
                if(this.getUserAnswerState().includes(correct_answer)) score += 1
            }
        } )
        return [score, max_score]
    }

    isQuestionCorrect() {
        let isCorrect = true

        if ( this.getUserAnswerState() == "") isCorrect = false

        this.getUserAnswerState().split(";").map( (user_option_answer) => {
            if (user_option_answer != "") {
                if(!this.getCorrectAnswer().includes(user_option_answer)) {
                    isCorrect = false
                } 
            }
        })
        return isCorrect
    }


}


export class Matching3x5 extends Matching {}
