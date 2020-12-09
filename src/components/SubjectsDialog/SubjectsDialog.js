import React from 'react';
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
  const { onClose, selectedSubject, open, subjects } = props;

  const handleClose = () => {
    onClose(selectedSubject);
  };

  const handleListItemClick = (subject) => {
    onClose(subject);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="subjects-dialog-title" open={open}>
      <DialogTitle id="subjects-dialog-title">Обери предмет:</DialogTitle>

      <List>
        {subjects.map((subject, idx) => (

          <ListItem button onClick={() => handleListItemClick(subject.id)} key={subject.id} disabled={!subject.available}>

            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                {subject.icon}
              </Avatar>
            </ListItemAvatar>

            <ListItemText primary={subject.name} />

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
