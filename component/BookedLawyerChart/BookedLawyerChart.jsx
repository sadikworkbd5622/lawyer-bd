import React from 'react';
import { Bar, BarChart, CartesianGrid, Cell, Tooltip, XAxis, YAxis } from 'recharts';
import TriangleBar from '../TriangleBar/TriangleBar';



const BookedLawyerChart = ({ lawyersData }) => {

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    
    const formatter = (consultationFeeName, consultationFee) => {
        if (consultationFee === "consultationFee") {
            return [consultationFeeName, "Consultation Fee"];
        } else {
            return [consultationFeeName, consultationFee];
        }
    }

    return (
        <>
            <BarChart width={1100} height={300} data={lawyersData} style={{ maxWidth: '100%', maxHeight: '100%', height: 'auto', width: '100%' }}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Tooltip formatter={formatter} />
                <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                <Bar dataKey={"consultationFee"} fill='#8884d8' shape={<TriangleBar></TriangleBar>}>
                    {lawyersData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </>
    );
};

export default BookedLawyerChart;