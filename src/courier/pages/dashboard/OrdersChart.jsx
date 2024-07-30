import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project import
import MainCard from '../../components/MainCard';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options
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
      text: 'Number of Orders'
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
    name: 'On Time',
    data: [15, 20, 18, 25, 22, 30]
  },
  {
    name: 'Delayed',
    data: [5, 8, 6, 10, 7, 12]
  }
];

// ==============================|| SALES COLUMN CHART ||============================== //

export default function OrdersChart() {
  const theme = useTheme();

  const [legend, setLegend] = useState({
    onTime: true,
    delayed: true
  });

  const { onTime, delayed } = legend;

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
    if (onTime && delayed) {
      setSeries(initialSeries);
    } else if (onTime) {
      setSeries([
        {
          name: 'On Time',
          data: [15, 20, 18, 25, 22, 30]
        }
      ]);
    } else if (delayed) {
      setSeries([
        {
          name: 'Delayed',
          data: [5, 8, 6, 10, 7, 12]
        }
      ]);
    } else {
      setSeries([]);
    }
  }, [onTime, delayed]);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: !(onTime && delayed) && delayed ? [primaryMain] : [warning, primaryMain],
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
  }, [primary, secondary, line, warning, primaryMain, successDark, onTime, delayed, xsDown]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%'}}>
      <MainCard sx={{ mt: 1, width: '100%' }} content={false}>
        <Box sx={{ p: 2.5, pb: 0 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack spacing={1.5}>
            </Stack>
            <FormControl component="fieldset">
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox color="warning" checked={onTime} onChange={handleLegendChange} name="onTime" />}
                  label="On Time"
                />
                <FormControlLabel control={<Checkbox checked={delayed} onChange={handleLegendChange} name="delayed" />} label="Delayed" />
              </FormGroup>
            </FormControl>
          </Stack>
          <Box id="chart" sx={{ bgcolor: 'transparent' }}>
            <ReactApexChart options={options} series={series} type="bar" height={450} />
          </Box>
        </Box>
      </MainCard>
    </Box>
  );
}
