import React, { useContext, useEffect } from "react";
import ProgramAccordion from "./ProgramAccordion";
import Program from '../../models/program/program';
import AppPage from './../../components/AppPage/AppPage';
import ProgramHeader from './../../assets/img/program-header.png';
import Loading from './../../components/Loading/Loading';
import { getProgram } from './../../services/API/httpRequests';
import { UserContext } from "../../providers/UserProvider";
import { TrackingContext } from '@vrbo/react-event-tracking'


export default function ProgramPage(props) {

  const [program, setProgram] = React.useState(null)
  const user = useContext(UserContext);
  const tracking = useContext(TrackingContext)

  if (!program) {
      getProgram().then((programResponse) => {
      setProgram(new Program(programResponse.data))
    })
  }

    useEffect(
        () => {
            if(user) {
                tracking.trigger("ProgramPageViewed")
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
