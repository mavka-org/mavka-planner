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

// props: texts_list
export default function TextList(props) {
    const classes = useStyles();

    return (
        <div >
            <List>
                <div>

                    {/*display standart skill reqs*/}
                    <Typography fontWeight="fontWeightBold" color={"primary"}>стандарт</Typography>
                    {props.standart_texts_list.map(function(standart_text, i){
                        return <div>
                                <ListItem className={classes.ListItem}>
                            <ListItemText
                                className={classes.ListItemText}
                                primary={"— " + standart_text}
                            />
                        </ListItem>
                        </div>;
                    })}

                    {/* display pro skill reqs*/}
                    {!props.pro_texts_list === undefined || props.pro_texts_list.length !== 0 &&
                        <div>
                        <Typography fontWeight="fontWeightBold" color={"primary"}>про</Typography>
                        {props.pro_texts_list.map(function(pro_text, i){
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

                </div>
            </List>
        </div>
    )
}
