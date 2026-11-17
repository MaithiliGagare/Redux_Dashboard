import { LineChart } from '@mui/x-charts/LineChart';

function LineChartComponent() {

    const dataset = [
        { month: 'Jan', profit: 10000 },
        { month: 'Feb', profit: 8700 },
        { month: 'Mar', profit: 8000 },
        { month: 'Apr', profit: 4500 },
        { month: 'May', profit: -3500 },
        { month: 'Jun', profit: 500 },
        { month: 'Jul', profit: -1800 },
        { month: 'Aug', profit: 2300 },
        { month: 'Sep', profit: -1200 },
        { month: 'Oct', profit: 3200 },
        { month: 'Nov', profit: 10500 },
        { month: 'Dec', profit: -1700 }
    ];

    return (

        <div className="chart-card">

            <h3>Profit by Month</h3>

            <LineChart
                dataset={dataset}
                xAxis={[
                    {
                        scaleType: 'point',
                        dataKey: 'month'
                    }
                ]}
                series={[
                    {
                        dataKey: 'profit',
                        label: 'Profit',
                        color: '#168EFF',
                        showMark: true
                    }
                ]}
                height={300}
                grid={{
                    horizontal: true
                }}
            />

        </div>

    );

}

export default LineChartComponent;