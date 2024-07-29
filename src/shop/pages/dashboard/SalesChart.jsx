import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MainCard from '../../components/MainCard';
import ReactApexChart from 'react-apexcharts';

const columnChartOptions = {
  chart: {
    type: 'bar',
    height: 430,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '30%',
      borderRadius: 4
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 8,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  },
  yaxis: {
    title: {
      text: 'Orders'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter(val) {
        return `${val} orders`;
      }
    }
  },
  legend: {
    show: false
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        yaxis: {
          show: false
        }
      }
    }
  ]
};

const initialSeries = [
  {
    name: 'Accepted Orders',
    data: [180, 90, 135, 114, 120, 145]
  },
  {
    name: 'Ongoing Orders',
    data: [120, 45, 78, 150, 168, 99]
  },
  {
    name: 'Completed Orders',
    data: [90, 60, 120, 180, 75, 50]
  }
];

export default function OrdersChart() {
  const theme = useTheme();
  const [legend, setLegend] = useState({
    accepted: true,
    ongoing: true,
    completed: true
  });

  const { accepted, ongoing, completed } = legend;

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const warning = theme.palette.warning.main;
  const primaryMain = theme.palette.primary.main;
  const successDark = theme.palette.success.dark;

  const [series, setSeries] = useState(initialSeries);

  const handleLegendChange = (event) => {
    setLegend({ ...legend, [event.target.name]: event.target.checked });
  };

  const xsDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [options, setOptions] = useState(columnChartOptions);

  useEffect(() => {
    const updatedSeries = [];
    const colors = [];
    if (accepted) {
      updatedSeries.push(initialSeries[0]);
      colors.push(warning);
    }
    if (ongoing) {
      updatedSeries.push(initialSeries[1]);
      colors.push(primaryMain);
    }
    if (completed) {
      updatedSeries.push(initialSeries[2]);
      colors.push(successDark);
    }
    setSeries(updatedSeries);
    setOptions((prevState) => ({
      ...prevState,
      colors,
      xaxis: {
        labels: {
          style: {
            colors: [secondary, secondary, secondary, secondary, secondary, secondary]
          }
        }
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
      },
      plotOptions: {
        bar: {
          columnWidth: xsDown ? '60%' : '30%'
        }
      }
    }));
  }, [accepted, ongoing, completed, primary, secondary, line, warning, primaryMain, successDark, xsDown]);

  return (
    <MainCard sx={{ mt: 1 }} content={false}>
      <Box sx={{ p: 2.5, pb: 0 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack spacing={1.5}>
            <Typography variant="h6" color="secondary">
              Order States
            </Typography>
            <Typography variant="h4">Monthly Overview</Typography>
          </Stack>
          <FormControl component="fieldset">
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox color="warning" checked={accepted} onChange={handleLegendChange} name="accepted" />}
                label="Accepted Orders"
              />
              <FormControlLabel
                control={<Checkbox checked={ongoing} onChange={handleLegendChange} name="ongoing" />}
                label="Ongoing Orders"
              />
              <FormControlLabel
                control={<Checkbox color="success" checked={completed} onChange={handleLegendChange} name="completed" />}
                label="Completed Orders"
              />
            </FormGroup>
          </FormControl>
        </Stack>
        <Box id="chart" sx={{ bgcolor: 'transparent' }}>
          <ReactApexChart options={options} series={series} type="bar" height={360} />
        </Box>
      </Box>
    </MainCard>
  );
}
