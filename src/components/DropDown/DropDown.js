import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
const DropDown = (props) => {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const useStyles = makeStyles((theme) => ({
    Grid: {
      width: "100%",
      justifyContent: "center",
    },
    Img: {
      height: "66px",
    },
    dropDown:{
      width: "250px",
      marginTop:theme.spacing(2),
    }
  }));
  const classes = useStyles();
  return (
    <div>
        <Select 
          fullWidth
          labelId="dropDown"
          id="dropDown"
          value={age}
          onChange={handleChange}
          className={classes.dropDown}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </div>



  )
}


export default DropDown