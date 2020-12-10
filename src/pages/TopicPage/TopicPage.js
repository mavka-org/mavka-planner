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
import React from "react";
import Box from "@material-ui/core/Box";
import Paper from '@material-ui/core/Paper';
import AppPage from './../../components/AppPage/AppPage';
import {getProgram, getTopic} from './../../services/API/httpRequests';


export default function TopicPage(props) {

    const [topic, setTopic] = React.useState(null)

    if (!topic) {
        getTopic(props.match.params.id).then((topicResponse) => {
            setTopic(new Topic(topicResponse["data"]))
        })
    }

    return (
        topic ?
        <Page selected="program">

            <Box pt={3}> <Typography  variant="h1" color={"primary"}>{topic.getTitle()}</Typography> </Box>

            {/*display buttons*/}
            <Box pt={3} pb={3}>
                <Grid container spacing={3} p={3}>
                    <Grid item xs={6}>
                        <Button  fullWidth size="big"  variant="contained" color="primary" target="_blank" href={topic.practice_link}>тести</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button  fullWidth size="medium" variant="contained" color="primary" target="_blank" href={topic.study_guide_link}>конспекти</Button>
                    </Grid>
                </Grid>
            </Box>

            <TopicContents topic_json = {topic}/>
        </Page> : <Typography>Loading</Typography>
    )
}

function increment_string_number(str_number){
    return (parseInt(str_number)+1).toString()
}
