import React from "react";
import ProgramAccordion from "../../components/ProgramAccordion/ProgramAccordion";
import Program from '../../models/program/program';
import NavBar from '../../components/NavBar/NavBar'
import AppPage from './../../components/AppPage/AppPage';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import { Typography } from '@material-ui/core';
import Page from "../../components/Page/Page";
import ProgramHeader from './../../assets/img/program-header.png';
import { getProgram } from './../../services/API/httpRequests';


export default function ProgramPage(props) {

  const program = new Program(getProgram())

  return (
    <AppPage
      headerImageSrc={ProgramHeader}
      selected="program"
      {...props}
    >
          <ProgramAccordion program={program}/>;
    </AppPage>
  )
}
