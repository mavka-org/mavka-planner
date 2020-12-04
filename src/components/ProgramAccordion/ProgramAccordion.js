import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import classes from "../../screens/Login/Login.module.css";
import TopicContents from "../TopicContents/TopicContents";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Accordion = withStyles({
    root: {
        // border: '1px solid rgba(0, 0, 0, .125)',
        // boxShadow: 'none',
        // '&:not(:last-child)': {
        //     borderBottom: 0,
        // },
        '&:before': {
            display: 'none',
            backgroundColor: "white"
        },
        // '&$expanded': {
        //     margin: 'auto',
        // },
        
    },

    expanded: {},
})(MuiAccordion);


const AccordionSummary = withStyles({
    expandIcon: {
        order: -1
    },
    root: {
        //backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

// props: program
export default function ProgramAccordion(props) {
    const [expanded, setExpanded] = React.useState('panel0');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const items = [];
    let global_panel_index = 0

    for (const [index, module] of props.program.modules.entries()) {

        // display module name
        items.push(
            <Typography variant="h3">
                {module.name}
            </Typography>
        )

        // display chapter name and index
        for (const [index, chapter] of module.chapters.entries()) {
            items.push(
                <Typography variant="subtitle1">
                    {increment_string_number(chapter.id) + ". " + chapter.name}
                </Typography>
            )

            // display topics in accordion
            for (const [index, topic] of chapter.topics.entries()) {
                items.push(
                    <Accordion classes={{root: classes.MuiAccordionroot}} square expanded={expanded === 'panel' + global_panel_index}
                               onChange={handleChange('panel' + global_panel_index)}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={"panel" + global_panel_index + "d-content"}
                                          id={"panel" + global_panel_index + "d-header"}>
                            <Typography>{increment_string_number(chapter.id)+ "." + increment_string_number(topic.order_n) + " " + topic.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TopicContents dense={true} topic_json = {topic}/>
                        </AccordionDetails>
                    </Accordion>
                )
                global_panel_index++
            }

        }
    }
    return (
        <div className={classes.Layout}>
            <div>{items}</div>
        </div>
    )
}

function increment_string_number(str_number){
    return (parseInt(str_number)+1).toString()
}