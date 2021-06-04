import React, { useState } from 'react';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import SeriesChart from '../components/SeriesChart';

function CreateChart() {
  
  const [series, setSeries] = useState([0]);

  const handleClick = () => {
    setSeries([...series, 0]);
  }

  return (
    <div>
      <form>
        <FormControl>
          <InputLabel htmlFor="title">Title</InputLabel>
          <Input id="title" />
        </FormControl>
        { series.map(() => <SeriesChart onClick={handleClick} />) }
      </form>
    </div>
  );
}

export default CreateChart;
