import React from "react";
import ProgramAccordion from "../../components/ProgramAccordion/ProgramAccordion";
import Program from '../../models/program/program';
import NavBar from '../../components/NavBar/NavBar'
import AppPage from './../../components/AppPage/AppPage';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import { Typography } from '@material-ui/core';
import Page from "../../components/Page/Page";
import ProgramHeader from './../../assets/img/program-header.png';


let sample_program_json = require('.//sample_program_json.json')
let loaded_program = new Program(sample_program_json)

export default function ProgramPage() {
    return (
      <AppPage
        headerImageSrc={ProgramHeader}
        selected="program"
      >
            <ProgramAccordion program={loaded_program}/>;
      </AppPage>
    )
}
