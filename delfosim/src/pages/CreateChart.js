import React, { useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, Input, InputLabel, Radio, RadioGroup } from '@material-ui/core';
import SeriesChart from '../components/SeriesChart';

function CreateChart() {
  const DAY_TIME = 24 * 3600 * 1000;
  const WEEK_TIME = DAY_TIME * 7;
  const MONTH_TIME = DAY_TIME * 30;
  const YEAR_TIME = DAY_TIME * 365;
  const [series, setSeries] = useState([0]);
  const [selectedValue, setSelectedValue] = React.useState('day');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleClick = () => {
    setSeries([...series, series[series.length - 1] + 1]);
  }

  return (
    <div>
      <form className="form">
        <FormControl>
          <InputLabel htmlFor="title">Title</InputLabel>
          <Input id="title" />
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
        { series.map((serie) => <SeriesChart onClick={handleClick} serie={serie} lastSerie={series[series.length - 1]} />) }
      </form>
    </div>
  );
}

export default CreateChart;
