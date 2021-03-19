import {QuestionComponent} from "./QuestionComponent";
import React from "react";

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
            options.push({"name": this.optionNames[idx], "option" : option})
        } )
        // console.log("options", options)

        return options
    }

    formTasks() {
        let tasks = []
        this.props.question.data.tasks.map( (task, idx) => {
            tasks.push({"name": this.taskNames[idx], "task" : task})
        } )
        // console.log("tasks", tasks)

        return tasks
    }

    displayOptions() {
        let toDisplay = []

        // TODO front
        // display options (aka "A: text for option A")
        toDisplay.push(this.options.map((option_data) => {
            return <div> {option_data.name}: {option_data.option}</div>
        }))

        // display tasks (aka "1: text for task 1")
        toDisplay.push(this.tasks.map( (task_data) => {
            return <div>{task_data.name}: {task_data.task}</div>
        }))


        toDisplay.push(this.tasks.map( (task_data) => {
            return this.options.map( (option_data) => {

                let answer_option_data = task_data.name + option_data.name + ";"
                return this.getAnswerOption(answer_option_data)
                // return <div> <button> {answer_option_data} </button> </div>

            })
        }))

        console.log("toDisplay", toDisplay)

        return toDisplay
    }


    getNormalOption(answer_option_data) {
        // TODO front
        return <button onClick={() => this.handleAnswerOptionClick(answer_option_data)}> {answer_option_data} </button>
    }

    getClickedOption(answer_option_data) {
        // TODO front
        return <button
            onClick={() => this.handleAnswerOptionClick(answer_option_data)}> {answer_option_data} chosen </button>
    }

    getCorrectOption(answer_option_data) {
        // TODO front
        return <button onClick={() => this.handleAnswerOptionClick(answer_option_data)}> {answer_option_data} correct </button>
    }

    getSubmittedIncorrectOption(answer_option_data) {
        // TODO front
        return <button onClick={() => this.handleAnswerOptionClick(answer_option_data)}> {answer_option_data} incorrect </button>
    }

    handleAnswerOptionClick = (answer_option_data) => {
        if (!this.state.is_submitted) {
            let newUserAnswer = ""

            if (this.getUserAnswerState()) {
                // if the option was already selected, unselect it
                if( this.getUserAnswerState().includes(answer_option_data)) {
                    newUserAnswer = this.getUserAnswerState().replace(answer_option_data, "")
                }

                // if user clicked on row that was already selected, replace it
                // ex, if "1a;" was already selected and user clicked on "1b;", delete "1a;" from user_answer
                else if( this.getUserAnswerState().includes(answer_option_data.substring(0,1)) ) {
                    let start = this.getUserAnswerState().indexOf( answer_option_data.substring(0,1) )
                    let snippet = this.getUserAnswerState().substring(start, start+3)
                    newUserAnswer = this.getUserAnswerState().replace(snippet, answer_option_data)
                } else {
                    newUserAnswer = this.getUserAnswerState() + answer_option_data
                }
            } else {
                newUserAnswer = answer_option_data
            }
            this.setState({user_answer: newUserAnswer})
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
// export class Matching3x4 extends Matching {}
// export class Matching3x5 extends Matching {}
// export class Matching4x4 extends Matching {}
// export class Matching4x5 extends Matching {}
// export class Matching5x5 extends Matching {}