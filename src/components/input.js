import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '13ch',
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '15ch',
  },
}));

export default function StateTextFields({searchFormSubmit}) {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  };
  const onSearchFormSubmit = (e) => {
    e.preventDefault();
    searchFormSubmit(searchTerm);
    setSearchTerm('');
  };

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={onSearchFormSubmit}>
      <div>
        {/* <TextField
          id="filled-searchTerm"
          label="Search"
          value={searchTerm}
          onChange={handleChange}
          variant="filled"
          color='secondary'
          InputLabelProps={{ shrink: true }}
        /> */}
        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
          <InputLabel htmlFor="filled-adornment-search" color='secondary'>Search</InputLabel>
          <FilledInput
            id="filled-adornment-search"
            type='text'
            value={searchTerm}
            onChange={handleChange}
            variant="filled"
            color='secondary'
            inputlabelprops={{ shrink: true }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle search visibility"
                  disabled={!searchTerm}
                  type="submit"
                  edge="end"
                  color='secondary'
                >
                  <CheckBoxIcon/>
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </form>
  );
}
