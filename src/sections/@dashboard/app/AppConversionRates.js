import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// material
import { Box, Card, CardHeader } from "@mui/material";
// utils
import { fNumber } from "../../../utils/formatNumber";
//
import { BaseOptionChart } from "../../../components/charts";

// ----------------------------------------------------------------------

const CHART_DATA = [{ data: [500, 430, 448, 470] }];

export default function AppConversionRates() {
  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => fNumber(seriesName / 10),
        title: {
          formatter: (seriesName) => `${seriesName} %`,
        },
      },
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: "28%", borderRadius: 2 },
    },
    xaxis: {
      categories: ["CSE", "EC", "ME", "EN"],
    },
  });

  return (
    <Card>
      <CardHeader
        title="Performance Improvement of Departments"
        subheader="(+43%) than last year"
      />
      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart
          type="bar"
          series={CHART_DATA}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
