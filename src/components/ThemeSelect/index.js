import React, { useState, useRef } from "react";
import { createMuiTheme } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = createMuiTheme((theme) => {
console.log(theme);
  return (
    {
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      }
    });
});

function ThemeSelect () {
  const inputRef = useRef('light');
  const classes = useStyles();
  const [theme, setTheme] = useState('');

  const handleChange = (e) => {
    setTheme(inputRef.current.value);
    console.log(theme);
  }


  return (
    <div className="ml-auto">
      <FormControl className={classes.formControl}>
        <InputLabel id="simple-select-label">Theme</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          ref={inputRef}
          onChange={handleChange}
          defaultValue=''
        >
          <MenuItem value={'light'}>Light</MenuItem>
          <MenuItem value={'dark'}>Dark</MenuItem>
          <MenuItem value={'blue'}>Blue</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default ThemeSelect;