import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {ListSubheader, Typography} from '@material-ui/core';
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import Program from "../../models/program/program"
import IndeterminateCheckBoxRoundedIcon from '@material-ui/icons/IndeterminateCheckBoxRounded';
import CheckBoxRoundedIcon from '@material-ui/icons/CheckBoxRounded';
import {getProgram} from "../../services/API/httpRequests";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
        width: "90%",
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
    },
    halfHeight: {
        height: "50%"
    },

    }
));

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




export default function TopicMultipleSelect(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [selectedTopicIds, setSelectedIds] = React.useState([]);

    const handleChange = (event) => {
        console.log(selectedTopicIds)
        console.log(event)
        setSelectedIds(event.target.value);
        props.handleChange(event.target.value);
    };


    const [program, setProgram] = React.useState(null)

    if (program) {
        var topicIds = [];
        for (const [index, topic] of program.topics.entries()) {
            topicIds.push(topic.id)
        }
    } else {
        getProgram().then((programResponse) => {
            setProgram(new Program(programResponse["data"]))
        })
    }


    const getTopicNames = (ids_list) => {
        var names_list = [];
        for (const id of ids_list.entries()) {
            names_list.push(program.topics[id[1]].getTitle())
        }
        return names_list
    }


    return (
        program ?
        <div>
            <FormControl className={classes.formControl} id='formcontroltonya'>
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
                    className={classes.halfHeight}
                >
                    {topicIds.map((id) => (
                        <MenuItem key={id} value={(id)} style={{whiteSpace: 'normal'}}>
                            <Checkbox
                                checked={selectedTopicIds.indexOf(id) > -1}
                                icon={<CheckBoxRoundedIcon/>}
                                checkedIcon={<IndeterminateCheckBoxRoundedIcon color="error" />}
                                inputProps={{ "aria-label": "indeterminate checkbox" }}
                            />
                          <ListItemText primary={program.topics[id].getTitle()} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div> : <Typography>Loading</Typography>
    );
}
