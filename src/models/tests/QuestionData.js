import React from "react";

export default class QuestionData {

    constructor(data) {

        this.data = data

        // this.order_id = data.order_id
        // this.type = data.type
        // this.strapi_id = data.strapi_id
        // this.primary_question = data.primary_question
        // this.options = data.options
        // this.correct_answer = data.correct_answer
        // this.tasks = data.tasks
        // this.topic = data.topic
        // this.test = data.test

        this.is_submitted = false
        this.submitted_user_answer = undefined
        this.is_correct = undefined
        this.score = 0

    }


}

