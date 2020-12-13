import React, { useContext} from 'react';
import { SubjectContext, allSubjects } from './../../providers/SubjectProvider';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

const SubjectsDialog = (props) => {

  const classes = useStyles();

  const [subject, setSubject] = useContext(SubjectContext)
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (selectedSubject) => {
    setSubject(selectedSubject)
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="subjects-dialog-title" open={open}>
      <DialogTitle id="subjects-dialog-title">Обери предмет:</DialogTitle>

      <List>
        {allSubjects.map((subjectOption, idx) => (

          <ListItem
            button
            onClick={() => handleListItemClick(subjectOption)}
            key={subjectOption.id}
            disabled={!subjectOption.available}
            >

            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                {subjectOption.icon}
              </Avatar>
            </ListItemAvatar>

            <ListItemText primary={subjectOption.name} />

          </ListItem>

        ))}
      </List>

    </Dialog>
  );
}

SubjectsDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedSubject: PropTypes.string.isRequired,
};

export default SubjectsDialog
