import { charts } from "highcharts";

const INITIAL_STATE = {
  charts: [],
  currentChart: [],
};

function chartReducer(state = INITIAL_STATE, action) {
  const {type, payload} = action;
  switch (type) {
    case 'ADD_CHART':
      return { ...state, charts: [...charts, payload] };
    default:
      return state;
  }
}

export default chartReducer;
