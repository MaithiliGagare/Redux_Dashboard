import { BarChart as MUIBarChart } from '@mui/x-charts/BarChart';

function BarChart2() {

    return (

        <div className="chart-card">

            <h3>Sum of Amount by CustomerName</h3>

            <MUIBarChart
                xAxis={[
                    {
                        data: [
                            'Harivansh',
                            'Madhav',
                            'Madan Mohan',
                            'Shiva',
                            'Vishakha',
                            'Vrinda'
                        ],
                    }
                ]}
                series={[
                    {
                        data: [10000, 9500, 7800, 6400, 6200, 5900],
                        label: 'Amount'
                    }
                ]}
                height={200}
            />

        </div>

    );

}

export default BarChart2;