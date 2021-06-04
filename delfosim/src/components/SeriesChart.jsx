import { FormControl, Input, InputLabel } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';

function SeriesChart({ onClick }) {
  return (
    <>
    <FormControl>
      <InputLabel htmlFor="name">Name</InputLabel>
      <Input id='name' />
    </FormControl>
    <FormControl>
      <InputLabel htmlFor="data">Data</InputLabel>
      <Input id='data' />
    </FormControl>
    <IconButton onClick={onClick}>
      <AddIcon />
    </IconButton>
    </>
  );
}

export default SeriesChart;
