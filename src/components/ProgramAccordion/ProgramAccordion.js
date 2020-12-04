import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import TopicContents from "../TopicContents/TopicContents";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from "../Button/Button";
import Box from '@material-ui/core/Box';
import MavkaTextLogo from "../../assets/img/mavka-text-logo.png";
import MavkaSmallLogo from "../../assets/img/mavka-small-logo.png";
import Grid from "@material-ui/core/Grid";

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
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const items = [];
    let global_panel_index = 0

    for (const [index, module] of props.program.modules.entries()) {

        // display module name
        items.push(
            <Typography paragraph variant="h4">
                {module.name}
            </Typography>
        )

        // display chapter name and index
        for (const [index, chapter] of module.chapters.entries()) {
            items.push(
                <Typography paragraph variant="h5">
                    {increment_string_number(chapter.id) + ". " + chapter.name}
                </Typography>
            )

            // display topics in accordion
            for (const [index, topic] of chapter.topics.entries()) {
                items.push(
                    <Accordion  square expanded={expanded === 'panel' + global_panel_index}
                               onChange={handleChange('panel' + global_panel_index)}>

                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={"panel" + global_panel_index + "d-content"}
                                          id={"panel" + global_panel_index + "d-header"}>
                            <div style={{ width: '100%' }}>
                                <Box display="flex" alignItems="center" background="primary" py={1}>
                                    <Box flexGrow={1}>
                                        {/*display topic name*/}
                                        <Typography >{increment_string_number(chapter.id)+ "." + increment_string_number(topic.order_n) + " " + topic.name}</Typography>
                                    </Box>
                                    <Box>
                                        <Button size="small" variant="contained" color="primary">вчити</Button>
                                    </Box>
                                </Box>
                            </div>
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
        <div >
            <div>{items}</div>
        </div>
    )
}

function increment_string_number(str_number){
    return (parseInt(str_number)+1).toString()
}
