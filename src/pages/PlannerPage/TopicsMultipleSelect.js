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
import IndeterminateCheckBoxRoundedIcon from '@material-ui/icons/IndeterminateCheckBoxRounded';
import CheckBoxRoundedIcon from '@material-ui/icons/CheckBoxRounded';
import CircularProgress from '@material-ui/core/CircularProgress';

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
    },
    getContentAnchorEl: null
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
    const { program } = props

    const [selectedTopicIds, setSelectedIds] = React.useState([]);

    const handleChange = (event) => {
        setSelectedIds(event.target.value);
        props.handleChange(event.target.value);
    };


    if (program) {
        var topicIds = [];
        for (const [index, topic] of program.topics.entries()) {
            topicIds.push(topic.id)
        }
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
            <FormControl className={classes.formControl}>
                <InputLabel id="topics-mutiple-checkbox-label"></InputLabel>
                <Select
                    labelId="topics-mutiple-checkbox-label"
                    id="topics-mutiple-checkbox"
                    name="TopicsMultipleSelect"
                    multiple
                    displayEmpty={true}
                    value={selectedTopicIds}
                    onChange={handleChange}
                    input={<Input/>}
                    renderValue={(selected) => selected.length ? getTopicNames(selected).join(", ") : 'Вибери теми'}
                    MenuProps={MenuProps}
                    className={classes.halfHeight}
                >
                    {topicIds.map((id) => (
                        <MenuItem key={id} value={(id)} style={{whiteSpace: 'normal'}}>
                            <Checkbox
                                name={id + 'TopicMenuItemCheckbox'}
                                checked={selectedTopicIds.indexOf(id) == -1}
                                checkedIcon={<CheckBoxRoundedIcon />}
                                inputProps={{ "aria-label": "indeterminate checkbox" }}
                            />
                          <ListItemText primary={program.topics[id].getTitle()} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div> : <CircularProgress />
    );
}
