import { QuestionComponent } from "./QuestionComponent";
import React from "react";
import s from './Question.module.css'
import { Typography } from "@material-ui/core";

export class Matching extends QuestionComponent {

    constructor(props) {
        super(props)
        this.optionNames = ["A", "Б", "В", "Г", "Д", "Е"]
        this.taskNames = ["1", "2", "3", "4", "5", "6"]
        this.options = this.formOptions()
        this.tasks = this.formTasks()
    }

    formOptions() {
        let options = []
        this.props.question.data.options.map( (option, idx) => {
            options.push({"name": this.optionNames[idx], "option" : option, "comment" : this.getOptionComment(idx)})
        } )
        return options
    }

    getOptionComment(idx) {
        let comment = undefined
        if (this.props.question.data.optionComments && this.props.question.data.optionComments[idx] !== "") {
            comment = this.props.question.data.optionComments[idx]
        }
        return comment

    }

    formTasks() {
        let tasks = []
        this.props.question.data.tasks.map( (task, idx) => {
            tasks.push({"name": this.taskNames[idx], "task" : task, "comment" : this.getTaskComment(idx)})
        } )

        return tasks
    }

    getTaskComment(idx) {
        let comment = undefined
        if (this.props.question.data.taskComments && this.props.question.data.taskComments[idx] !== "") {
            comment = this.props.question.data.taskComments[idx]
        }
        return comment

    }

    displayComment(answer_option_data) {
        if(this.state.is_submitted) {
            if (answer_option_data.comment) {
                return <Typography> --- {answer_option_data.comment}</Typography>
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
            return <div className={s.Button__MatchingText}>
                <Typography style={{ marginRight: '20px' }} variant="h6">{option_data.name}: </Typography>
                <Typography variant="subtitle1">{option_data.option}</Typography>
                {this.displayComment(option_data)}
            </div>
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
                                                {this.getAnswerOption(answer_option_data, value, name)}
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


    getNormalOption(answer_option_data) {
        // TODO front
        return <>
            <label>
                <input onClick={() => this.handleAnswerOptionClick(answer_option_data)} type="radio" ></input>
                <span class={s.marker}></span>
            </label>
        </>
    }

    getNormalSubmittedOption(answer_option_data) {
        // TODO front
        return <>
            <label>
                <input onClick={() => this.handleAnswerOptionClick(answer_option_data)} type="radio"></input>
                <span class={s.marker}></span>
            </label>
        </>
    }



    getClickedOption(answer_option_data) {
        console.log('CLICKED!')
        // TODO front
        return <>
            <label>
                <input onClick={() => this.handleAnswerOptionClick(answer_option_data)} type="radio"></input>
                <span class={s.marker}></span>
            </label>
        </>
    }

    getCorrectOption(answer_option_data) {
        // TODO front
        return <>
            <label >
                <input onClick={() => this.handleAnswerOptionClick(answer_option_data)} type="radio"></input>
                <span style={{backgroundColor:'#1AB2A8'}} class={s.marker__correct}></span>
            </label>
        </>
    }

    getSubmittedIncorrectOption(answer_option_data) {
        // TODO front
        return <>
            <label>
                <input onClick={() => this.handleAnswerOptionClick(answer_option_data)} type="radio"></input>
                <span  style={{backgroundColor:'#EB5757'}} class={s.marker}></span>
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


    isOptionCorrect(answer_option_data) {
        return this.props.question.data.correct_answer.includes(answer_option_data)
    }

    isOptionChosen(answer_option_data) {
        if (this.getUserAnswerState()) {
            return this.getUserAnswerState().includes(answer_option_data)
        }
        else return false
    }

    score() {
        // TODO
        return 0
    }

    isQuestionCorrect() {
        // TODO
        return false
    }


}

//
// export class Matching3x4 extends Matching { }
// export class Matching3x5 extends Matching { }
// export class Matching4x4 extends Matching { }
// export class Matching4x5 extends Matching { }
// export class Matching5x5 extends Matching { }


{/* <div class={s.table}>
            <table class={s.select_answer}>
                <tbody>
                    <tr>
                        <th></th>
                        <th>А</th>
                        <th>Б</th>
                        <th>В</th>
                        <th>Г</th>

                    </tr>
                    <tr>
                        <th class={s.r}>1</th>
                        <td>
                            <label>
                                <input type="radio" value="1a" name="a[1]" class={s.q_radio} ></input>
                                <span class={s.marker}></span>
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" value="1b" name="a[1]" class={s.q_radio} ></input>
                                <span class={s.marker}></span>
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" value="1c" name="a[1]" class={s.q_radio} ></input>
                                <span class={s.marker}></span>
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" value="1d" name="a[1]" class={s.q_radio}></input>
                                <span class={s.marker}></span>
                            </label>
                        </td>


                    </tr>
                    <tr>
                        <th class={s.r}>2</th>
                        <td>
                            <label>
                                <input type="radio" value="2a" name="a[2]" class={s.q_radio}></input>
                                <span class={s.marker}></span>
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" value="2b" name="a[2]" class={s.q_radio}></input>
                                <span  class={s.marker}></span>
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" value="2c" name="a[2]" class={s.q_radio} ></input>
                                <span  class={s.marker}></span>
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" value="2d" name="a[2]" class={s.q_radio}></input>
                                <span class={s.marker}></span>
                            </label>
                        </td>


                    </tr>
                    <tr>
                        <th class={s.r}>3</th>
                        <td>
                            <label>
                                <input type="radio" value="3a" name="a[3]" class={s.q_radio} ></input>
                                <span  class={s.marker}></span>
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" value="3b" name="a[3]" class={s.q_radio}  ></input>
                                <span  class={s.marker}></span>
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" value="3c" name="a[3]" class={s.q_radio} ></input>
                                <span  class={s.marker}></span>
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" value="3d" name="a[3]" class={s.q_radio} ></input>
                                <span class={s.marker}></span>
                            </label>
                        </td>


                    </tr>
                    <tr>
                        <th class={s.r}>4</th>
                        <td>
                            <label>
                                <input type="radio" value="4a" name="a[4]" class={s.q_radio} ></input>
                                <span  class={s.marker}></span>
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" value="4b" name="a[4]" class={s.q_radio} ></input>
                                <span class={s.marker}></span>
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" value="4c" name="a[4]" class={s.q_radio} ></input>
                                <span class={s.marker}></span>
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" value="4d" name="a[4]" class={s.q_radio} ></input>
                                <span class={s.marker}></span>
                            </label>
                        </td>

                    </tr>
                </tbody>
            </table> 
</div>*/}