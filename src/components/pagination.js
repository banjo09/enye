import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  avatar: {
    color: red[500],
  },
}));

export default function PaginationControlled({totalPages, onPageChange, page}) {
  const classes = useStyles();
  const handleChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <div className={classes.root}>
      <Pagination count={totalPages} page={page} onChange={handleChange} size="large" showFirstButton showLastButton color="secondary"/>
    </div>
  );
}