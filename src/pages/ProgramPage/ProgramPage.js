import React, {useContext, useEffect} from "react";
import ProgramAccordion from "./ProgramAccordion";
import Program from '../../models/program/program';
import AppPage from './../../components/AppPage/AppPage';
import ProgramHeader from './../../assets/img/program-header.png';
import Loading from './../../components/Loading/Loading';
import {addAnalyticsEvent, getProgram} from './../../services/API/httpRequests';
import {UserContext} from "../../providers/UserProvider";
import {SubjectContext} from "../../providers/SubjectProvider";


export default function ProgramPage(props) {

  const [program, setProgram] = React.useState(null)
  const user = useContext(UserContext);
  const subject = useContext(SubjectContext)[0]

  if (!program) {
      getProgram().then((programResponse) => {
      setProgram(new Program(programResponse.data))
    })
  }

    useEffect(
        () => {
            if(user) {
                addAnalyticsEvent(user, "ProgramPageOpened", {"subject_id":subject.id})
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
