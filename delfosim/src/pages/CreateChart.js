import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { Button, FormControl, FormControlLabel, FormLabel, Input, InputLabel, Radio, RadioGroup } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SeriesChart from '../components/SeriesChart';
import { addChart } from '../actions';

const TODAY = new Date(Date.now());
const TODAY_DATE = `${String(TODAY.getFullYear())}-${String(TODAY.getMonth()).padStart(2, '0')}-${String(TODAY.getDate()).padStart(2, '0')}`;

function CreateChart() {
  const DAY_TIME = 24 * 3600 * 1000;
  const dates = {
    day: DAY_TIME,
    week: DAY_TIME * 7,
    month: DAY_TIME * 30,
    year: DAY_TIME * 365,
  };

  const [series, setSeries] = useState([0]);
  const [title, setTitle] = useState('');
  const [selectedValue, setSelectedValue] = useState('day');
  const [backHome, setBackHome] = useState(false);
  const [name, setName] = useState(['']);
  const [values, setValues] = useState(['']);
  const [date, setDate] = useState([TODAY_DATE]);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleClick = () => {
    setSeries([...series, series[series.length - 1] + 1]);
  }

  const saveSeries = () => {
    const options = {
      interval: dates[selectedValue],
      name,
      data: values.map((value) => value.split(', ')),
      start: date,
    };
    const chart = { title, options };
    dispatch(addChart(chart));
  }

  return (
    <div>
      {backHome ? <Redirect to='/' /> : ''}
      {console.log(name)}
      <form className="form">
        <button type='button' onClick={() => setBackHome(true)}>
          <ArrowBackIcon />
        </button>
        <FormControl>
          <InputLabel htmlFor="title">Title</InputLabel>
          <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">Interval</FormLabel>
          <RadioGroup row aria-label="interval" name="interval" value={ selectedValue } onChange={ handleChange }>
            <FormControlLabel value="day" control={<Radio />} label="Days" />
            <FormControlLabel value="week" control={<Radio />} label="Weeks" />
            <FormControlLabel value="month" control={<Radio />} label="Months" />
            <FormControlLabel value="year" control={<Radio />} label="Years" />
          </RadioGroup>
        </FormControl>
        { series.map((serie) => <SeriesChart
          onClick={handleClick}
          setStates={{setName, setValues, setDate}}
          value={{name, values, date}}
          serie={serie}
          lastSerie={series[series.length - 1]} />) }
          <Button variant="contained" color="primary" onClick={ saveSeries }>
            Salvar
          </Button>
      </form>
    </div>
  );
}

export default CreateChart;
