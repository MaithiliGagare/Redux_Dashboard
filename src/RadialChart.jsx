
import { PieChart } from '@mui/x-charts/PieChart';

const months = [
  'Jan', 'Feb', 'Mar', 'Apr',
  'May', 'Jun', 'Jul', 'Aug',
  'Sep', 'Oct', 'Nov', 'Dec',
];

const clothing = [3, 5, 7, 8, 12, 15, 18, 16, 13, 9, 6, 4];
const electronics = [12, 15, 18, 16, 13, 10, 6, 4, 3, 5, 7, 9];
const furniture = [7, 9, 12, 15, 18, 16, 13, 11, 6, 4, 3, 5];

function createMonthData(values) {
  return values.map((value, index) => ({
    id: index,
    value,
    label: months[index],
  }));
}

function RadialChart() {
  return (
    <div className="chart-card">
      <h3>Monthly Sales by Category</h3>

      <div className="radial-chart-container">
        <PieChart
          width={350}
          height={350}
          series={[
            {
              data: createMonthData(clothing),
              innerRadius: 35,
              outerRadius: 75,
              paddingAngle: 2,
              cornerRadius: 3,
              highlightScope: {
                highlight: 'item',
                fade: 'global',
              },
              valueFormatter: (item) => `${item.value}`,
            },
            {
              data: createMonthData(electronics),
              innerRadius: 85,
              outerRadius: 125,
              paddingAngle: 2,
              cornerRadius: 3,
              highlightScope: {
                highlight: 'item',
                fade: 'global',
              },
              valueFormatter: (item) => `${item.value}`,
            },
            {
              data: createMonthData(furniture),
              innerRadius: 135,
              outerRadius: 170,
              paddingAngle: 2,
              cornerRadius: 3,
              highlightScope: {
                highlight: 'item',
                fade: 'global',
              },
              valueFormatter: (item) => `${item.value}`,
            },
          ]}
          hideLegend
        />
      </div>

      <div className="radial-legend">
        <span>
          <i className="legend-clothing"></i>
          Clothing
        </span>

        <span>
          <i className="legend-electronics"></i>
          Electronics
        </span>

        <span>
          <i className="legend-furniture"></i>
          Furniture
        </span>
      </div>
    </div>
  );
}

export default RadialChart;
