import React from "react";
import ProgramAccordion from "./../components/ProgramAccordion";
import Program from './../models/program/program';
import { Typography } from '@material-ui/core';
import classes from "../screens/Login/Login.module.css";


let sample_program_json = require('.//sample_program_json.json')
let program_object = new Program(sample_program_json)
console.log("program_object", program_object)

export default function ProgramPage() {
    return (
        <div className={classes.Layout}>
            <ProgramAccordion program={program_object}/>;
        </div>
    )
}
