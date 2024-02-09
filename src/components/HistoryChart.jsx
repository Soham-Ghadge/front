import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import { useState } from "react"; // Import useState hook
import Skeleton from "./Skeleton";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment'; // Import moment library

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const HistoryChart = () => {
  const { id } = useParams();
  const { response: response7Days, loading: loading7Days } = useAxios(`coins/${id}/market_chart?vs_currency=usd&days=7`); // Fetch data for 7 days
  const { response: response1Day, loading: loading1Day } = useAxios(`coins/${id}/market_chart?vs_currency=usd&days=1`); // Fetch data for 1 day

  if (loading7Days || loading1Day) {
    return (
      <div className="wrapper-container mt-8">
        <Skeleton className="h-72 w-full mb-10" />
      </div>
    );
  }

  const coinChartData7Days = response7Days?.prices?.map(value => ({ x: value[0], y: value[1].toFixed(2) })) || [];
  const coinChartData1Day = response1Day?.prices?.map(value => ({ x: value[0], y: value[1].toFixed(2) })) || [];

  const options = {
    responsive: true
  }

  const pointRadius = 1; // Define the size of the points

  const data7Days = {
    labels: coinChartData7Days.map(value => moment(value.x).format('MMM D, h:mm a')), // Use labels for 7 days
    datasets: [
      {
        fill: false,
        label: `${id} (Last 7 Days)`,
        data: coinChartData7Days.map(val => val.y),
        borderColor: 'rgb(55,162,235)',
        backgroundColor: 'rgba(53,162,235,0.5)',
        pointRadius: pointRadius, // Set point radius
      }
    ]
  }

  const data1Day = {
    labels: coinChartData1Day.map(value => moment(value.x).format('MMM D, h:mm a')), // Use labels for 1 day
    datasets: [
      {
        fill: false,
        label: `${id} (Last 24 Hours)`,
        data: coinChartData1Day.map(val => val.y),
        borderColor: 'rgb(255,99,132)',
        backgroundColor: 'rgba(255,99,132,0.5)',
        pointRadius: pointRadius, // Set point radius
      }
    ]
  }

  return (
    <div>
      <div>
        <h2 className="text-white">Last 7 Days</h2>
        <Line options={options} data={data7Days} />
      </div>
      <div>
        <h2 className="text-white">Last 24 Hours</h2>
        <Line options={options} data={data1Day} />
      </div>
    </div>
 
  )
}

export default HistoryChart;
