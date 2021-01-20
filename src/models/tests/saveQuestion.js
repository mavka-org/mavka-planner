import React from "react";

export default class QuestionComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { user_answer: undefined, is_submitted: false }
    }

    handleAnswerOptionClick = (answer_option) => {
        // TODO check is answer option was already selected, then add or delete it
        this.setState({user_answer: answer_option})
    }

    handleSubmitQuestionClick = () => {
        // record essential data to QuestionData that was passes thru props
        this.props.question.is_submitted = true
        this.props.question.submitted_user_answer = this.state.user_answer
        this.props.question.score = this.score()
        this.props.question.user_answer_correct = this.isQuestionCorrect()

        this.setState({is_submitted: true})
    }


    score() {
        if (this.state.user_answer==this.props.question.correct_answer) return 1
        return 0
    }

    isQuestionCorrect() {
        if (this.state.user_answer==this.props.question.correct_answer) return true
        return false
    }


    isOptionChosen(answer_option) {
        if (this.state.user_answer) {
            return this.state.user_answer.includes(answer_option)
        }
        else return false
    }

    isOptionCorrect(answer_option) {
        // TODO in Question: isOptionCorrect(answer_option)
        return answer_option == this.props.question.correct_answer
    }

    showInfo() {
        console.log("/n/n Question ", this.props.question.order_id)
        console.log("this.state.is_submitted ", this.state.is_submitted)
        console.log("this.state.user_answer ", this.state.user_answer)

    }

    displayOption(answer_option) {
        console.log("displayOption ", answer_option, this.isOptionChosen(answer_option))

        if (this.state.is_submitted) {
            if (this.isOptionChosen(answer_option)) {
                if (this.isOptionCorrect(answer_option)) {
                    // display as chosen correct (disabled)
                    return <button onClick={() => this.handleAnswerOptionClick(answer_option)}> {answer_option} chosen &
                        correct </button>
                } else {
                    // display as chosen incorrect(disabled)
                    return <button onClick={() => this.handleAnswerOptionClick(answer_option)}> {answer_option} chosen &
                        incorrect </button>
                }
            } else {
                // display as normal (disabled)
                return <button onClick={() => this.handleAnswerOptionClick(answer_option)}> {answer_option}  </button>
            }
        } else {
            if (this.isOptionChosen(answer_option)) {
                // display as chosen
                return <button
                    onClick={() => this.handleAnswerOptionClick(answer_option)}> {answer_option} chosen </button>
            } else {
                // display as normal
                return <button onClick={() => this.handleAnswerOptionClick(answer_option)}> {answer_option}  </button>
            }

        }
    }


    render() {
        console.log("\n\n question rerenders", this.props)
        this.user_answer = this.state.is_submitted
        console.log("this.props.hidden ", this.props.hidden)
        console.log("this.props.currentQuestionIdx", this.props.currentQuestionIdx)



        return (
            (!this.props.hidden) ?
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question 1</span>
                        </div>
                        {/*TODO show text as html*/}
                        {/*<div className='question-text' dangerouslySetInnerHTML={{ __html: "<div>{testQuestions[currentQuestion].primary_question}</div>" }} ></div>*/}
                        {this.props.question.primary_question}

                    </div>
                    <div className='answer-section'>
                        {/*TODO question.displayOptions*/}
                        {this.showInfo()}

                        {this.props.question.options.map( (answer_option) => this.displayOption(answer_option))}
                    </div>

                    {
                        // this.isSubmitted ? "hey" : ""
                    }
                    <div>
                        <button onClick={() => this.handleSubmitQuestionClick()}>Перевірити</button>
                    </div>
                    <div>
                        <button onClick={() => this.props.handleChangeQuestion(this.props.question.order_id + 1)}>Наступне питання</button>
                    </div>
                    <div>
                        <button onClick={() => this.props.handleChangeQuestion(this.props.question.order_id - 1)}>Попереднє питання</button>
                    </div>
                </>
                : null

        )

    }

}

export class Test extends QuestionComponent {
    constructor(props) {
        super(props);
        console.log("\n\nWOWYAY THIS WORKS \n\n")
    }

    displayOption(answer_option) {
        return <div>
            {super.displayOption(answer_option)}
            <button>RRRRRRRRRRRRRRRRRRRRRR</button>
        </div>
    }


}

export class MultipleChoice extends QuestionComponent {}
export class ABCD extends MultipleChoice {}
export class ABCDE extends MultipleChoice {}
export class TrueFalse extends MultipleChoice {}
export class LangMultipleChoice extends MultipleChoice {}
export class OneOutOfSeven extends MultipleChoice {}


export class Matching extends QuestionComponent {}
export class Matching3x4 extends Matching {}
export class Matching3x5 extends Matching {}
export class Matching4x4 extends Matching {}
export class Matching4x5 extends Matching {}
export class Matching5x5 extends Matching {}


export class Open extends QuestionComponent {}
export class SingleOpen extends Open {}
export class DoubleOpen extends Open {}

export class Free extends QuestionComponent {}

export class Sequencing extends QuestionComponent {}
export class Sequencing4x4 extends Sequencing {}

export class ThreeOutOfSeven extends QuestionComponent {}
export class TripleMultipleChoice extends QuestionComponent {}











//  {
//    "correct_answer": "True",
//    "options": [
//      "True",
//      "False"
//    ],
//    "order_id": 2,
//    "primary_question": "question TrueFalse \n<div class=\"question\"><p><img alt=\"\" src=\"https://zno.osvita.ua/doc/images/znotest/189/18977/profil-demo-math-2021-03.png\" style=\"height: auto;\" width=\"600\"/></p></div>",
//    "strapi_id": "5ffcdb8468bb85204cb5cd85",
//    "tasks": [],
//    "test": {
//      "session": "демонстраційний варіант",
//      "strapi_id": "5ffaf251cf51722ed817be8e",
//      "year": "2021"
//    },
//    "topic": {
//      "name": null
//    },
//    "type": {
//      "slug": "ABCD"
//    }
//  },
//  {
//    "correct_answer": "7",
//    "options": [
//      "1",
//      "2",
//      "3",
//      "4",
//      "5",
//      "6",
//      "7"
//    ],
//    "order_id": 3,
//    "primary_question": "question 1of7 \n<div class=\"question\"><p><img alt=\"\" src=\"https://zno.osvita.ua/doc/images/znotest/189/18978/profil-demo-math-2021-04.png\" style=\"height: auto;\" width=\"600\"/></p></div>",
//    "strapi_id": "5ffcdb8768bb85204cb5cd8e",
//    "tasks": [],
//    "test": {
//      "session": "демонстраційний варіант",
//      "strapi_id": "5ffaf251cf51722ed817be8e",
//      "year": "2021"
//    },
//    "topic": {
//      "name": null
//    },
//    "type": {
//      "slug": "ABCD"
//    }
//  },
//  {
//    "correct_answer": "e",
//    "options": [
//      "",
//      "",
//      "",
//      "",
//      ""
//    ],
//    "order_id": 4,
//    "primary_question": "<div class=\"question\"><p><img alt=\"\" src=\"https://zno.osvita.ua/doc/images/znotest/189/18979/profil-demo-math-2021-05.png\" style=\"height: auto;\" width=\"600\"/></p></div>",
//    "strapi_id": "5ffcdb8a68bb85204cb5cd97",
//    "tasks": [],
//    "test": {
//      "session": "демонстраційний варіант",
//      "strapi_id": "5ffaf251cf51722ed817be8e",
//      "year": "2021"
//    },
//    "topic": {
//      "name": null
//    },
//    "type": {
//      "slug": "ABCDE"
//    }
//  },
//  {
//    "correct_answer": "d",
//    "options": [
//      "",
//      "",
//      "",
//      "",
//      ""
//    ],
//    "order_id": 5,
//    "primary_question": "<div class=\"question\"><p><img alt=\"\" src=\"https://zno.osvita.ua/doc/images/znotest/189/18980/profil-demo-math-2021-06.png\" style=\"height: auto;\" width=\"600\"/></p></div>",
//    "strapi_id": "5ffcdb8e68bb85204cb5cda2",
//    "tasks": [],
//    "test": {
//      "session": "демонстраційний варіант",
//      "strapi_id": "5ffaf251cf51722ed817be8e",
//      "year": "2021"
//    },
//    "topic": {
//      "name": null
//    },
//    "type": {
//      "slug": "ABCDE"
//    }
//  },
//  {
//    "correct_answer": "b",
//    "options": [
//      "",
//      "",
//      "",
//      "",
//      ""
//    ],
//    "order_id": 6,
//    "primary_question": "<div class=\"question\"><p><img alt=\"\" src=\"https://zno.osvita.ua/doc/images/znotest/189/18981/profil-demo-math-2021-07.png\" style=\"height: auto;\" width=\"600\"/></p></div>",
//    "strapi_id": "5ffcdb9168bb85204cb5cdad",
//    "tasks": [],
//    "test": {
//      "session": "демонстраційний варіант",
//      "strapi_id": "5ffaf251cf51722ed817be8e",
//      "year": "2021"
//    },
//    "topic": {
//      "name": null
//    },
//    "type": {
//      "slug": "ABCDE"
//    }
//  },
//  {
//    "correct_answer": "b",
//    "options": [
//      "",
//      "",
//      "",
//      "",
//      ""
//    ],
//    "order_id": 7,
//    "primary_question": "<div class=\"question\"><p><img alt=\"\" src=\"https://zno.osvita.ua/doc/images/znotest/189/18982/profil-demo-math-2021-08.png\" style=\"height: auto;\" width=\"600\"/></p></div>",
//    "strapi_id": "5ffcdb9468bb85204cb5cdb8",
//    "tasks": [],
//    "test": {
//      "session": "демонстраційний варіант",
//      "strapi_id": "5ffaf251cf51722ed817be8e",
//      "year": "2021"
//    },
//    "topic": {
//      "name": null
//    },
//    "type": {
//      "slug": "ABCDE"
//    }
//  },
//  {
//    "correct_answer": "a",
//    "options": [
//      "",
//      "",
//      "",
//      "",
//      ""
//    ],
//    "order_id": 8,
//    "primary_question": "<div class=\"question\"><p><img alt=\"\" src=\"https://zno.osvita.ua/doc/images/znotest/189/18983/profil-demo-math-2021-09.png\" style=\"height: auto;\" width=\"600\"/></p></div>",
//    "strapi_id": "5ffcdb9768bb85204cb5cdc3",
//    "tasks": [],
//    "test": {
//      "session": "демонстраційний варіант",
//      "strapi_id": "5ffaf251cf51722ed817be8e",
//      "year": "2021"
//    },
//    "topic": {
//      "name": null
//    },
//    "type": {
//      "slug": "ABCDE"
//    }
//  },
//  {
//    "correct_answer": "c",
//    "options": [
//      "",
//      "",
//      "",
//      "",
//      ""
//    ],
//    "order_id": 9,
//    "primary_question": "<div class=\"question\"><p><img alt=\"\" src=\"https://zno.osvita.ua/doc/images/znotest/189/18984/profil-demo-math-2021-10.png\" style=\"height: auto;\" width=\"600\"/></p></div>",
//    "strapi_id": "5ffcdb9a68bb85204cb5cdce",
//    "tasks": [],
//    "test": {
//      "session": "демонстраційний варіант",
//      "strapi_id": "5ffaf251cf51722ed817be8e",
//      "year": "2021"
//    },
//    "topic": {
//      "name": null
//    },
//    "type": {
//      "slug": "ABCDE"
//    }
//  },
//  {
//    "correct_answer": "a",
//    "options": [
//      "",
//      "",
//      "",
//      "",
//      ""
//    ],
//    "order_id": 10,
//    "primary_question": "<div class=\"question\"><p><img alt=\"\" src=\"https://zno.osvita.ua/doc/images/znotest/189/18985/profil-demo-math-2021-11.png\" style=\"height: auto;\" width=\"601\"/></p></div>",
//    "strapi_id": "5ffcdb9d68bb85204cb5cdd9",
//    "tasks": [],
//    "test": {
//      "session": "демонстраційний варіант",
//      "strapi_id": "5ffaf251cf51722ed817be8e",
//      "year": "2021"
//    },
//    "topic": {
//      "name": null
//    },
//    "type": {
//      "slug": "ABCDE"
//    }
//  }