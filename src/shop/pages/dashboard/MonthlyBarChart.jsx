import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options
const barChartOptions = {
  chart: {
    type: 'bar',
    height: 365,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '45%',
      borderRadius: 4
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    show: false
  },
  grid: {
    show: false
  }
};

// ==============================|| MONTHLY BAR CHART ||============================== //

export default function MonthlyBarChart() {
  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;

  const [series] = useState([
    {
      data: [80, 95, 70, 42, 65, 55, 78]
    }
  ]);

  const [options, setOptions] = useState(barChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal', // or 'vertical' for a vertical gradient
          shadeIntensity: 0.5,
          gradientToColors: ['#E2C7A8'], // lighter shade of #C0A888
          inverseColors: false,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [0, 100]
        }
      },
      colors: ['#C0A888'],
      xaxis: {
        labels: {
          style: {
            colors: [secondary, secondary, secondary, secondary, secondary, secondary, secondary]
          }
        }
      }
    }));
  }, [primary, secondary]);

  return (
    <Box id="chart" sx={{ bgcolor: 'transparent' }}>
      <ReactApexChart options={options} series={series} type="bar" height={365} />
    </Box>
  );
}
