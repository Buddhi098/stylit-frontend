import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options
// Chart options
const areaChartOptions = {
    chart: {
      height: 450,
      type: 'line',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.9,
          opacityTo: 0.7,
          colorStops: [
            {
              offset: 0,
              color: '#C0A888',
              opacity: 1
            },
            {
              offset: 100,
              color: '#E0D2C0',
              opacity: 0.6
            }
          ]
        }
      },
      grid: {
        strokeDashArray: 0
      }
    };
  
  export default function IncomeAreaChart({ slot }) {
    const theme = useTheme();
    const { primary, secondary } = theme.palette.text;
    const line = theme.palette.divider;
  
    const [options, setOptions] = useState(areaChartOptions);
  
    useEffect(() => {
      setOptions((prevState) => ({
        ...prevState,
        colors: [theme.palette.primary.main],
        xaxis: {
          categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          labels: {
            style: {
              colors: [secondary, secondary, secondary, secondary, secondary, secondary, secondary]
            }
          },
          axisBorder: {
            show: true,
            color: line
          },
          tickAmount: 6
        },
        yaxis: {
          labels: {
            style: {
              colors: [secondary]
            }
          }
        },
        grid: {
          borderColor: line
        }
      }));
    }, [primary, secondary, line, theme]);
  
    const [series] = useState([
      {
        name: 'Sales',
        data: [31, 40, 28, 51, 42, 109, 100]
      }
    ]);

  return <ReactApexChart options={options} series={series} type="line" height={260} />;
}

IncomeAreaChart.propTypes = { slot: PropTypes.string };
