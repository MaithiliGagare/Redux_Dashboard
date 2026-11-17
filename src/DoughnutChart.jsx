import { PieChart } from '@mui/x-charts/PieChart';

function DoughnutChart() {

    return (

        <div className="chart-card">

            <h3>Sum of Quantity by Payment Mode</h3>

            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: 44, label: 'COD' },
                            { id: 1, value: 21, label: 'UPI' },
                            { id: 2, value: 13, label: 'Debit Card' },
                            { id: 3, value: 12, label: 'Credit Card' },
                            { id: 4, value: 10, label: 'EMI' }
                        ],

                        innerRadius: 55,
                        outerRadius: 85,
                        paddingAngle: 2,
                        cornerRadius: 4
                    }
                ]}
                width={300}
                height={220}
            />

        </div>

    );

}

export default DoughnutChart;