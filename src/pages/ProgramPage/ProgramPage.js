import React, {useContext, useEffect} from "react";
import ProgramAccordion from "./ProgramAccordion";
import Program from '../../models/program/program';
import AppPage from './../../components/AppPage/AppPage';
import ProgramHeader from './../../assets/img/program-header.png';
import Loading from './../../components/Loading/Loading';
import {addAnalyticsEvent, getProgram} from './../../services/API/httpRequests';
import {UserContext} from "../../providers/UserProvider";


export default function ProgramPage(props) {

  const [program, setProgram] = React.useState(null)
  const user = useContext(UserContext);

  if (!program) {
      getProgram().then((programResponse) => {
      setProgram(new Program(programResponse.data))
    })
  }

    useEffect(
        () => {
            if(user) {
                addAnalyticsEvent(user, "PlannerPageOpened", {"subject":props.subject.name})
            }
        },
        [user]
    )

  return (
      program ?
    <AppPage
      headerImageSrc={ProgramHeader}
      selected="program"
      {...props}
    >
          <ProgramAccordion program={program}/>
    </AppPage> : <Loading/>
  )
}
