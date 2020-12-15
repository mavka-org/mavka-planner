import Button from './../../components/Button/Button';
import { Grid, Typography } from '@material-ui/core';
import TopicContents from "../../components/TopicContents/TopicContents";
import Topic from '../../models/program/topic';
import React, {useContext, useEffect} from "react";
import Box from "@material-ui/core/Box";
import Loading from './../../components/Loading/Loading';
import {getTopic} from './../../services/API/httpRequests';
import {addAnalyticsEvent} from "../../services/API/httpRequests";
import {UserContext} from "../../providers/UserProvider";
import {SubjectContext} from "../../providers/SubjectProvider";
import Page from '../../components/Page/Page';


export default function TopicPage(props) {
    console.log("TopicPage props ", props)

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
