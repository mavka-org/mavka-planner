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
import Program from "../../models/program/program.js"

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 400,
        width: "90%"

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



let topicIds = [];
let sample_program_json = require('../ProgramPage/sample_program_json.json')
let loaded_program = new Program(sample_program_json)
console.log("loaded_program ", loaded_program)

for (const [index, topic] of loaded_program.topics.entries()) {
    topicIds.push(topic.id)
}



function getTopicName(id) {
    return loaded_program.topics[id].name
}

function getTopicNames(ids_list) {
    let names_list = [];
    for (const id of ids_list.entries()) {
        names_list.push(getTopicName(id[1]))
    }
    return names_list

}

export default function TopicMultipleSelect(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [selectedTopicIds, setSelectedIds] = React.useState([]);

    const handleChange = (event) => {
        console.log("event.target.value ", event.target.value)
        setSelectedIds(event.target.value);
        props.handleChange(selectedTopicIds);
        console.log("selectedTopicIds in daughter", selectedTopicIds)
    };


    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-checkbox-label"></InputLabel>
                <Select
                    labelId="demo-mutiple-checkbox-label"
                    id="demo-mutiple-checkbox"
                    multiple
                    value={selectedTopicIds}
                    onChange={handleChange}
                    input={<Input />}
                    renderValue={(selected) => getTopicNames(selected).join(", ")}
                    MenuProps={MenuProps}
                >
                    {topicIds.map((id) => (
                        <MenuItem key={id} value={(id)} style={{whiteSpace: 'normal'}}>
                            <Checkbox
                                checked={selectedTopicIds.indexOf(id) > -1}
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

