import { PieChart as MUIPieChart } from '@mui/x-charts/PieChart';

function PieChart() {

    return (

        <div className="chart-card">

            <h3>Sum of Quantity by Category</h3>

            <MUIPieChart
                series={[
                    {
                        data: [
                            { id: 0, value: 63, label: 'Clothing' },
                            { id: 1, value: 21, label: 'Electronics' },
                            { id: 2, value: 17, label: 'Furniture' },
                        ],
                    },
                ]}
                width={300}
                height={200}
            />

        </div>

    );

}

export default PieChart;