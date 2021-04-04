import React from "react";

export default class QuestionData {

    constructor(data) {

        // all data from json -- like primary_question, options, correct_answer etc
        this.data = data

        this.is_submitted = false
        this.submitted_user_answer = undefined
        this.is_correct = undefined
        this.score = 0

    }


}

