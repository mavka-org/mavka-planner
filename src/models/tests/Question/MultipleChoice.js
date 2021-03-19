import React from "react";
import {QuestionComponent} from "./QuestionComponent";

export class MultipleChoice extends QuestionComponent {

    constructor(props, answer_options) {
        super(props)
        this.answer_options_data = this.formAnswerOptionsData(answer_options)
    }

    formAnswerOptionsData(answer_options) {
        let answer_options_data = []
        this.props.question.data.options.map( (text_option, idx) => {
            answer_options_data.push({ "answer" : answer_options[idx], "text" : text_option})
        })
        return answer_options_data
    }

    handleAnswerOptionClick = (answer_option_data) => {
        if (!this.state.is_submitted) {
            this.setState({user_answer: answer_option_data.answer})
        }
    }

    displayOptions() {
        // TODO put buttons in a grid
        return this.answer_options_data.map( (answer_option_data) => this.getAnswerOption(answer_option_data) )
    }

    getNormalOption(answer_option_data) {
        // TODO front
        return <button onClick={() => this.handleAnswerOptionClick(answer_option_data)}> {answer_option_data.answer + ": " + answer_option_data.text} </button>
    }

    getClickedOption(answer_option_data) {
        // TODO front
        return <button
            onClick={() => this.handleAnswerOptionClick(answer_option_data)}> {answer_option_data.answer + ": " + answer_option_data.text} chosen </button>
    }

    getCorrectOption(answer_option_data) {
        // TODO front
        return <button onClick={() => this.handleAnswerOptionClick(answer_option_data)}> {answer_option_data.answer + ": " + answer_option_data.text + " "}
              correct {"\n\n "} </button>
    }

    getSubmittedIncorrectOption(answer_option_data) {
        // TODO front
        return <button onClick={() => this.handleAnswerOptionClick(answer_option_data)}> {answer_option_data.answer + ": " + answer_option_data.text + " "}
              incorrect </button>
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
        return [{ "answer" : "True", "text" : ""},
            { "answer" : "False", "text" : ""}]
    }
}


export class Open extends QuestionComponent {
    displayOptions() {
        // TODO front
    }
}
export class SingleOpen extends Open {}
export class DoubleOpen extends Open {}

export class Free extends QuestionComponent {}

export class Sequencing extends QuestionComponent {}
export class Sequencing4x4 extends Sequencing {}

export class ThreeOutOfSeven extends QuestionComponent {}
export class TripleMultipleChoice extends QuestionComponent {}






