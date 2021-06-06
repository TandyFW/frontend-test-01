import React from 'react';
import Highcharts from 'highcharts';
// import drilldown from 'highcharts/modules/drilldown';
import HighchartsReact from 'highcharts-react-official';

// drilldown(Highcharts);

const options = {
  // chart: {
  //   type: 'collumn',
  // },
  xAxis: {
    tickInterval: 24 * 3600 * 1000, // one day
    type: 'datetime',
  },
  title: {
    text: '',
  },
  series: [
    {
    name: 'Profit',
    data: [100, 25, 40, 60, 30, 100, 120],
    pointStart: Date.UTC(2010, 0, 1),
    pointInterval: 24 * 3600 * 1000,
    },
    {
    name: 'Second',
    data: [50, 45, 10, 35, 45, 80, 100],
    pointStart: Date.UTC(2010, 0, 1),
    pointInterval: 24 * 3600 * 1000,
    }
  ]
};

function Chart() {
  return(
    <div>
      <HighchartsReact highcharts={ Highcharts } options={options} />
    </div>
  );
}

export default Chart;
