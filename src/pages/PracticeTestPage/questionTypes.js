import React, { useContext, useReducer } from "react";
import { ABCD, ABCDE, LangMultipleChoice, OneOutOfSeven, TrueFalse } from "../../models/tests/Question/MultipleChoice";
import { Matching, Matching3x5 } from "../../models/tests/Question/Matching";
import { Open } from "../../models/tests/Question/Open";
import { Free } from "../../models/tests/Question/Free";
import { MultipleChoice } from "../../models/tests/Question/MultipleChoice";

export const questionTypes = {
    "ABCD": ABCD,
    "ABCDE": ABCDE,
    "LangMultipleChoice": LangMultipleChoice,
    "OneOutOfSeven": OneOutOfSeven,
    "TrueFalse": TrueFalse,
    "MultipleChoice": MultipleChoice,
    "Open": Open,
    "Free": Free
}

export function getQuestionComponent(question_type) {
    if (question_type.includes("Matching")) return Matching
    if (question_type.includes("Open")) return Open
    else return questionTypes[question_type]
}