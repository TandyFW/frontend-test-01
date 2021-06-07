import React from 'react';
import Highcharts from 'highcharts';
// import drilldown from 'highcharts/modules/drilldown';
import HighchartsReact from 'highcharts-react-official';

// drilldown(Highcharts);

const optionStored = {
  interval: 24 * 3600 * 1000,
  name: ['Profit', 'Second'],
  data: [[100, 25, 40, 60, 30, 100, 120], [50, 45, 10, 35, 45, 80, 100]],
  start: [Date.UTC(2010, 0, 1), Date.UTC(2010, 0, 3)],
}

const options = {
  xAxis: {
    tickInterval: optionStored.interval, // one day
    type: 'datetime',
  },
  title: {
    text: '',
  },
  series: optionStored.name.map((serie, index) => ({
      name: serie,
      data: optionStored.data[index],
      pointStart: optionStored.start[index],
      pointInterval: optionStored.interval,
    }))
  
  // [
  //   {
  //   name: 'Profit',
  //   data: [100, 25, 40, 60, 30, 100, 120],
  //   pointStart: Date.UTC(2010, 0, 1),
  //   pointInterval: optionStored.interval,
  //   },
  //   {
  //   name: 'Second',
  //   data: [50, 45, 10, 35, 45, 80, 100],
  //   pointStart: Date.UTC(2010, 0, 1),
  //   pointInterval: optionStored.interval,
  //   }
  // ]
};

function Chart() {
  return(
    <div>
      <HighchartsReact highcharts={ Highcharts } options={options} />
    </div>
  );
}

export default Chart;
