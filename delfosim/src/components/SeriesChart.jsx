import { FormControl, FormHelperText, Input, InputLabel, TextField } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';

function SeriesChart({ onClick, serie, lastSerie }) {
  const TODAY = new Date(Date.now());
  const TODAY_DATE = `${String(TODAY.getFullYear())}-${String(TODAY.getMonth()).padStart(2, '0')}-${String(TODAY.getDate()).padStart(2, '0')}`;

  return (
    <>
    <FormControl>
      <InputLabel htmlFor="name">Name</InputLabel>
      <Input id='name' />
    </FormControl>
    <FormControl>
      <InputLabel htmlFor="values">Values</InputLabel>
      <Input id='values'/>
      <FormHelperText id="my-helper-text">Separe os valores por vírgula. Ex: 4, 8, 12, 12.8, 13...</FormHelperText>
    </FormControl>
    <form noValidate>
      <TextField
        id="date"
        label="Start Date"
        type="date"
        defaultValue={ TODAY_DATE }
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    { serie === lastSerie ?
    <IconButton onClick={onClick}>
      <AddIcon />
    </IconButton>
    : ''}
    </>
  );
}

export default SeriesChart;
