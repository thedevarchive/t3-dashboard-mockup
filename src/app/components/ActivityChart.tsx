"use client";

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { trpc } from '@/lib/trpc/client';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export const ActivityChart = () => {
  const { data: userActivityData, isLoading } = trpc.info.getUserActivityData.useQuery();

  if (isLoading) return <div>Loading...</div>;

  const chartData = {
    labels: userActivityData?.map(item => item.dayOfWeek),
    datasets: [
      {
        label: 'User Activity',
        data: userActivityData?.map(item => item.value),
        borderColor: '#3b82f6',
        backgroundColor: '#3b82f6',
        borderWidth: 3,
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'white',
        titleColor: '#111827',
        bodyColor: '#111827',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        cornerRadius: 4,
        padding: 10,
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#6b7280',
          font: {
            size: 12
          }
        }
      },
      y: {
        display: false
      }
    }
  };

  return (
    <div className="w-165 h-[180px]">
      <Line data={chartData} options={options} />
    </div>
  );
};