import NavBar from '../../components/NavBar/NavBar'
import LoginPng from './../../assets/img/login.png'
import {LargeButton, Button} from './../../components/Button/Button';
import { Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Program from "../../models/program/program";
import Page from "../../components/Page/Page";
import ProgramAccordion from "../../components/ProgramAccordion/ProgramAccordion";
import TopicContents from "../../components/TopicContents/TopicContents";
import Topic from '../../models/program/topic';
import React from "react";
import Box from "@material-ui/core/Box";
import Paper from '@material-ui/core/Paper';


let sample_topic_json = require('.//sample_topic_json.json')
let topic = new Topic(sample_topic_json)
console.log("original topic json", topic)

export default function TopicPage() {
    return (
        <Page >

            <Typography paragraph variant="h3" color={"primary"}>{increment_string_number(topic.chapter_id)+ "." + increment_string_number(topic.order_n) + " " + topic.name}</Typography>

            {/*display buttons*/}
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Button  fullWidth size="medium"  variant="contained" color="primary">тести</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button  fullWidth size="medium" variant="contained" color="primary">конспекти</Button>
                    </Grid>
                </Grid>

            <TopicContents topic_json = {topic}/>
        </Page>
    )
}

function increment_string_number(str_number){
    return (parseInt(str_number)+1).toString()
}
