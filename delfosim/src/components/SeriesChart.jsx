import { FormControl, FormHelperText, Input, InputLabel, TextField } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react';

function SeriesChart({ onClick, serie, lastSerie, setStates, value }) {
  const TODAY = new Date(Date.now());
  const TODAY_DATE = `${String(TODAY.getFullYear())}-${String(TODAY.getMonth()).padStart(2, '0')}-${String(TODAY.getDate()).padStart(2, '0')}`;
  const {name, values, date} = value;
  const {setName, setValues, setDate} = setStates;
  const [thisName, setThisName] = useState('');

  const handleChange = (value, func, newValue, localSet) => {
    console.log(value, newValue);
    const nValue = value;
    nValue.splice(serie, 1, newValue);
    func(nValue);
    localSet(newValue);
  }

  return (
    <>
    <FormControl>
      <InputLabel htmlFor="name">Name</InputLabel>
      <Input id='name' value={thisName} onChange={(e) => handleChange(name, setName, e.target.value, setThisName)} />
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
