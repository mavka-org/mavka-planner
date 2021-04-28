
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

function getMaxScore(subj) {
    return max_scores[subj]
}

const ZNO_lin_approx = {
    "математика" : [1.87163, 89.1309],
    "українська мова" : [1.24982, 73.73645],
    "історія" : [1.33898, 81.74258]
}


export function getScore(subj, test_year, test_session, questionsData) {
    console.log('questionsData inside score', questionsData)
    let test_score = sum_score(questionsData, subj)
    let zno, dpa


    if (test_score < passing_scores[subj]) {
        zno = "Менше прохідного"
    } 
    else {
        zno = getZNO(subj, test_year, test_session, test_score)
        if (zno > 200) zno = 200 // needs better solution -- eg, take success_rate*max_score 
    }

    console.log('ZNOOOOO', zno)

    return [test_score, getMaxScore(subj), zno]
}



export function sum_score(questionsData, subj) {
    let user_score = 0, user_true_score = 0 , total_score = 0

    questionsData.map( (question) => {
        if (question.data.question_type != "Free") {
            user_true_score += question.user_score
            total_score += question.max_score
        } 
    })
    console.log('SUM USER SCORE before FREE', user_true_score)

    user_score = user_true_score + accountForFree(user_true_score, total_score, subj)
    console.log('SUM USER SCORE after free', user_true_score)
    return user_score

}


// deal with Free templates
export function accountForFree(user_true_score, total_score, subj) {
    let success_ratio = user_true_score/total_score
    let score_diff = getMaxScore(subj) - total_score
    return success_ratio * score_diff
}

export function getZNO(subj, test_year, test_session, test_score) {
    let lin_coeff = ZNO_lin_approx[subj]
    return Math.ceil(lin_coeff[0]*test_score + lin_coeff[1])
}
