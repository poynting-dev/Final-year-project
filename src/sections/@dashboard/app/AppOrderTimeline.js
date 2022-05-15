import { faker } from "@faker-js/faker";
import PropTypes from "prop-types";
// material
import { Card, Typography, CardHeader, CardContent } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineDot,
} from "@mui/lab";
// utils
import { fDateTime } from "../../../utils/formatTime";

// ----------------------------------------------------------------------

const TIMELINES = [
  {
    title: "Application Submitted",
    time: faker.date.past(),
    type: "order1",
  },
  {
    title: "In Progess",
    time: faker.date.past(),
    type: "order2",
  },
  {
    title: "Apprlication Approved",
    time: faker.date.past(),
    type: "order3",
  },
];

// ----------------------------------------------------------------------

OrderItem.propTypes = {
  item: PropTypes.object,
  isLast: PropTypes.bool,
};

function OrderItem({ item, isLast }) {
  const { type, title, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          sx={{
            bgcolor:
              (type === "order1" && "primary.main") ||
              (type === "order2" && "success.main") ||
              (type === "order3" && "info.main") ||
              (type === "order4" && "warning.main") ||
              "error.main",
          }}
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {fDateTime(time)}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function AppOrderTimeline() {
  return (
    <Card
      sx={{
        "& .MuiTimelineItem-missingOppositeContent:before": {
          display: "none",
        },
      }}
    >
      <CardHeader title="Latest Application Status" />
      <CardContent>
        <Timeline>
          {TIMELINES.map((item, index) => (
            <OrderItem
              key={item.title}
              item={item}
              isLast={index === TIMELINES.length - 1}
            />
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
}
