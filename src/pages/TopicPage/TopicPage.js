import NavBar from '../../components/NavBar/NavBar'
import LoginPng from './../../assets/img/login.png'
import Button from './../../components/Button/Button';
import { Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Program from "../../models/program/program";
import Page from "../../components/Page/Page";
import ProgramAccordion from "../ProgramPage/ProgramAccordion";
import TopicContents from "../../components/TopicContents/TopicContents";
import Topic from '../../models/program/topic';
import React, {useContext, useEffect} from "react";
import Box from "@material-ui/core/Box";
import Paper from '@material-ui/core/Paper';
import AppPage from './../../components/AppPage/AppPage';
import Loading from './../../components/Loading/Loading';
import {getProgram, getTopic} from './../../services/API/httpRequests';
import {addAnalyticsEvent} from "../../services/API/httpRequests";
import {UserContext} from "../../providers/UserProvider";
import {SubjectContext} from "../../providers/SubjectProvider";


export default function TopicPage(props) {

    const [topic, setTopic] = React.useState(null)
    const user = useContext(UserContext);
    const subject = useContext(SubjectContext)[0]

    if (!topic) {
        getTopic(props.match.params.id).then((topicResponse) => {
            setTopic(new Topic(topicResponse["data"]))
        })
    }

    useEffect(
        () => {
            if(user) {
                // TODO add subject
                addAnalyticsEvent(user, "TopicPageOpened", {"subject_id":subject.id, "topic_id": props.match.params.id})
            }
        },
        [user]
    )

    return (
        topic ?
        <Page selected="program">

            <Box pt={3}> <Typography  variant="h1" color={"primary"}>{topic.getTitle()}</Typography> </Box>

            {/*display buttons*/}
            <Box pt={3} pb={3}>
                <Grid container spacing={3} p={3}>
                    <Grid item xs={6}>
                        <Button onClick={(e)=>addAnalyticsEvent(user, "TopicTestsButtonClicked", {"subject_id":subject.id, "event_id":topic.id})} fullWidth size="big"  variant="contained" color="primary" target="_blank" href={topic.practice_link}>тести</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={(e)=>addAnalyticsEvent(user, "TopicStudyGuidesButtonClicked", {"subject_id":subject.id,"event_id":topic.id})} fullWidth size="medium" variant="contained" color="primary" target="_blank" href={topic.study_guide_link}>конспекти</Button>
                    </Grid>
                </Grid>
            </Box>

            <TopicContents topic_json = {topic}/>
        </Page> : <Loading/>
    )
}

function increment_string_number(str_number){
    return (parseInt(str_number)+1).toString()
}
