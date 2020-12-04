import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import MuiAccordion from "@material-ui/core/Accordion/Accordion";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    ListItemText: {
        marginTop: "1px",
        marginBottom: "1px"
    },
    ListItem: {
        paddingTop: "1px",
        paddingBottom: "1px",

    }
}));

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

// props: topic_json
export default function TopicContents(props) {
    const classes = useStyles();

    return (
        <div >
            <List>
                <div>

                    <Typography gutterBottom fontWeight="fontWeightBold" variant="h5" color="text.secondary">що треба знати і вміти</Typography>

                    {/*display standart skill reqs*/}
                    <Typography gutterBottom  color={"textSecondary"}>стандарт</Typography>
                    {props.topic_json.skills_reqs_standard.map(function(standart_text, i){
                        return <div>
                                <ListItem className={classes.ListItem}>
                            <ListItemText
                                className={classes.ListItemText}
                                primary={"— " + standart_text}
                            />
                        </ListItem>
                        </div>
                    })}

                    {/* display pro skill reqs*/}
                    {!props.topic_json.skills_reqs_pro === undefined || props.topic_json.skills_reqs_pro.length !== 0 &&
                        <div>
                            <Typography gutterBottom />
                        <Typography gutterBottom color={"textSecondary"}>профільний</Typography>
                        {props.topic_json.skills_reqs_pro.map(function(pro_text, i){
                            return <div>
                                <ListItem className={classes.ListItem}>
                                    <ListItemText
                                        className={classes.ListItemText}
                                        primary={"— " + pro_text}
                                    />
                                </ListItem>
                            </div>
                        })}
                        </div>
                    }
                    <Typography gutterBottom />
                    <Typography color={"textSecondary"} variant = "body2">{"* зміст та компетентності згідно з офіційним документом УЦЯО"}</Typography>

                </div>
            </List>
        </div>
    )
}
