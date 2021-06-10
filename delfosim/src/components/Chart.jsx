import React from 'react';
import { useSelector } from 'react-redux';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
      
function Chart() {

  const { charts } = useSelector(((state) => state.chartReducer));

  const optionStored = ({ interval, name, data, start }) => ({
    interval,
    name,
    data: data.map((dat) => dat.map((da) => Number(da))),
    start: start.map((date) => {
      const arrayDate = date.split('-');
      arrayDate.map((dat) => Number(dat));
      return Date.UTC(arrayDate[0], arrayDate[1], arrayDate[2]);
    }),
  });

  const optionsconfig = (options) => ({
    xAxis: {
      tickInterval: options.interval,
      type: 'datetime',
    },
    title: {
      text: '',
    },
    series: options.name.map((serie, index) => ({
      name: serie,
      data: options.data[index],
      pointStart: options.start[index],
      pointInterval: options.interval,
    }))
  });

  let optionsConfigurated;

  if (charts.length > 0) {
    const option = optionStored(charts[0].options);
    optionsConfigurated = optionsconfig(option);
  }

  return(
    <div>
      { charts.length > 0 ? <HighchartsReact highcharts={ Highcharts } options={ optionsConfigurated } /> : ''}
    </div>
  );
}

export default Chart;
