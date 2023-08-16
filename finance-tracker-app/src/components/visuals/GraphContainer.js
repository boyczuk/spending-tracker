import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import '../../styles/GraphContainer.css';

export default function BasicPie() {
    return (
        <div className='pie_chart'>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: 30, label: 'Food' },
                            { id: 1, value: 10, label: 'Entertainment' },
                            { id: 2, value: 60, label: 'Rent' },
                        ],
                    },
                ]}
                width={400}
                height={200}
            />
        </div>
    );
}