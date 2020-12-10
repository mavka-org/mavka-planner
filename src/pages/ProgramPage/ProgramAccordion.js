import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import TopicContents from "../../components/TopicContents/TopicContents";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from "../../components/Button/Button";
import Box from '@material-ui/core/Box';
import { ExpansionPanelSummary } from '@material-ui/core';
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import Link from '@material-ui/core/Link';


const Accordion = withStyles({
    root: {
        '&:before': {
            display: 'none'
        },
    },

    expanded: {},
})(MuiAccordion);

const noMarginIconButton = withStyles({
    root: {
        margin: "20px",
        marginLeft: "0",
        padding: "10px",
    }
})(IconButton);


const AccordionSummary = withStyles({
    expandIcon: {
        order: -1
    },
    root: {
        //backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(255, 255, 255, 1)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
        padding: "0px"
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

    items.push(
        <Box pt={3}><Typography variant="h3" target="_blank" href="https://www.notion.so/mavkaorg/446a53ca1add46f093f49dfbf4c6fd73"><Link color="secondary" target="_blank" href="https://www.notion.so/mavkaorg/446a53ca1add46f093f49dfbf4c6fd73"
        >0. Читати стратегію підготовки від топ-ЗНОшників</Link></Typography></Box>
    )

    for (const [index, module] of props.program.modules.entries()) {

        // display module name
        items.push(
            <Box pt={3}>
                <Typography variant="h1">
                    {module.name}
                </Typography>
            </Box>
        )

        // display chapter name and index
        for (const [index, chapter] of module.chapters.entries()) {
            items.push(
                <Box pt={3} pb={1} >
                    <Typography  variant="h3">
                        {increment_string_number(chapter.id) + ". " + chapter.name}
                    </Typography>
                </Box>
            )

            // display topics in accordion
            for (const [index, topic] of chapter.topics.entries()) {
                items.push(

                    <Accordion elevation={0} border='none' square expanded={expanded === 'panel' + global_panel_index}
                               onChange={handleChange('panel' + global_panel_index)}>

                        <Box borderBottom = {1}>
                            <AccordionSummary aria-controls={"panel" + global_panel_index + "d-content"}>
                            <div style={{ width: '100%' }}>
                                <Box display="flex" alignItems="center" background="primary" py={1}>
                                    <Box >
                                        <noMarginIconButton > <ExpandMoreIcon /> </noMarginIconButton>
                                    </Box>
                                    <Box flexGrow={1} pr={2} pl={1}>
                                        {/*display topic name*/}
                                        <Typography variant="body1">{topic.getTitle()}</Typography>
                                    </Box>
                                    <Box>
                                        <Button size="small" variant="contained" color="primary" href={"/math/topic/"+topic.id}>вчити</Button>
                                    </Box>
                                </Box>
                            </div>
                        </AccordionSummary>
                        </Box>

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
