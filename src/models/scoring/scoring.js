
const passing_scores = {
    "математика" : 10,
    "українська мова" : 10,
    "історія" : 10,
}

const max_scores = {
    "математика" : 62,
    "українська мова" : 104,
    "історія" : 94,
}

const ZNO_lin_approx = {
    "математика" : [1.87163, 89.1309],
    "українська мова" : [1.24982, 73.73645],
    "історія" : [1.33898, 81.74258]
}


export function score(subj, test_year, test_session, questionsData) {
    var test_score = sum_score(questionsData)
    var zno, dpa


    if (test_score < passing_scores.subject) {
        zno = "Менше прохідного"
    } 
    else {
        zno = getZNO(subj, test_year, test_session, test_score)
    }

    return zno
}

export function sum_score(questionsData, subj) {
    let user_score, user_true_score, total_score = 0

    questionDatas.map( (question) => {
        if (question.data.type.slug != "Free") {
            user_true_score += question.user_score
        } 
    })

    user_score = user_true_score + accountForFree(user_true_score, total_score, subj)
    return user_score

}


// deal with Free templates
export function accountForFree(user_true_score, total_score, subj) {
    let success_ratio = user_true_score/total_score
    let score_diff = max_scores.subj - total_score
    return success_ratio * score_diff
}

export function getZNO(subj, test_year, test_session, test_score) {
    lin_coeff = ZNO_lin_approx.subj
    return Math.ceil(lin_coeff[0]*test_score + lin_coeff[1])
}

console.log('hu')