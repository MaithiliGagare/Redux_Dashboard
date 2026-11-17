import { BarChart } from '@mui/x-charts/BarChart';

const dataset = [
    { subCategory: 'Printers', profit: 100 },
    { subCategory: 'Bookcases', profit: 78 },
    { subCategory: 'Saree', profit: 49 },
    { subCategory: 'Accessories', profit: 40 },
    { subCategory: 'Tables', profit: 38 }
];

const chartSetting = {
    xAxis: [
        {
            label: 'Profit',
        },
    ],
    height: 200,
    margin: {
        left: 100,
        right: 20,
        top: 10,
        bottom: 30
    },
};

function HorizontalBars() {

    return (

        <div className="chart-card">

            <h3>Sum of Profit by Sub-Category</h3>

            <BarChart
                dataset={dataset}

                yAxis={[
                    {
                        scaleType: 'band',
                        dataKey: 'subCategory'
                    }
                ]}

                series={[
                    {
                        dataKey: 'profit',
                        label: 'Profit',
                        color: '#168EFF',
                        valueFormatter: (value) => `${value}`
                    }
                ]}

                layout="horizontal"

                {...chartSetting}
            />

        </div>

    );

}

export default HorizontalBars;