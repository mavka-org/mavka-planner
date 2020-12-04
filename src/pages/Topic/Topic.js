import NavBar from '../../components/NavBar/NavBar'
import LoginPng from './../../assets/img/login.png'
import { LargeButton } from './../../components/Button/Button';
import { Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Program from "../../models/program/program";
import Page from "../../components/Page/Page";
import ProgramAccordion from "../../components/ProgramAccordion/ProgramAccordion";
import TopicContents from "../../components/TopicContents/TopicContents";
import Topic from '../../models/program/topic';
import React from "react";

let sample_topic_json = require('.//sample_topic_json.json')
let topic = new Topic(sample_topic_json)
console.log("original topic json", topic)

export default function TopicPage() {
    return (
        <Page >
            <Typography variant="h3" color={"primary"}>{increment_string_number(topic.chapter_id)+ "." + increment_string_number(topic.order_n) + " " + topic.name}</Typography>
            <TopicContents topic_json = {topic}/>;
        </Page>
    )
}

function increment_string_number(str_number){
    return (parseInt(str_number)+1).toString()
}
