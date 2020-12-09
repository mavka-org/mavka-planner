import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300
    },
    chips: {
        display: "flex",
        flexWrap: "wrap"
    },
    chip: {
        margin: 2
    },
    noLabel: {
        marginTop: theme.spacing(3)
    }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    }
};

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium
    };
}



// let topicIds = [];
// let sample_program_json = require('../ProgramPage/sample_program_json.json')
// let loaded_program = new Program(sample_program_json)
//
// for (const [index, topic] of loaded_program.topics.entries()) {
//     topicIds.push(topic.id)
// }
//
// function getTopicName(id) {
//     return loaded_program.topics[id].name
// }
// console.log(getTopicName(0))


let topicIds = ["0", "1", "2"];

function getTopicName(id) {
    return "real topic " + id;
}

export default function TopicMultipleSelect(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [selectedTopicIds, setSelectedIds] = React.useState([]);

    const handleChange = (event) => {
        console.log("event.target.value ", event.target.value)
        setSelectedIds(event.target.value);
        props.handleChange(selectedTopicIds);
        setTimeout(() => { {console.log("selectedTopicIds in daughter", selectedTopicIds)}; }, 6000);
        // console.log(event);
        // console.log(event.target.value);
    };


    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
                <Select
                    labelId="demo-mutiple-checkbox-label"
                    id="demo-mutiple-checkbox"
                    multiple
                    value={selectedTopicIds}
                    onChange={handleChange}
                    input={<Input />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                >
                    {topicIds.map((id) => (
                        <MenuItem key={id} value={getTopicName(id)}>
                            <Checkbox
                                checked={selectedTopicIds.indexOf(getTopicName(id)) > -1}
                                indeterminate
                                inputProps={{ "aria-label": "indeterminate checkbox" }}
                            />
                            <ListItemText primary={getTopicName(id)} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}


