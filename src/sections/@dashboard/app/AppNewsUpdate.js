import { faker } from "@faker-js/faker";
import PropTypes from "prop-types";
import { formatDistance } from "date-fns";
import { Link as RouterLink } from "react-router-dom";
// material
import {
  Box,
  Stack,
  Link,
  Card,
  Button,
  Divider,
  Typography,
  CardHeader,
} from "@mui/material";
// utils
import { mockImgCover } from "../../../utils/mockImages";
//
import Scrollbar from "../../../components/Scrollbar";
import Iconify from "../../../components/Iconify";
import a from "../../../_mocks_/a.jpg";
import b from "../../../_mocks_/b.jpg";
import c from "../../../_mocks_/c.jpg";
import d from "../../../_mocks_/d.jpg";
import e from "../../../_mocks_/e.jpg";

// ----------------------------------------------------------------------

const NEWS = [
  {
    title: "INTERNATIONAL CONFERENCE ON 29″TH APRIL AND 30TH APRIL”2022",
    description:
      "This was a two days virtual conference, which was held on 29 & 30 April’22 respectively. The aim of the ICCRMCS-2022 is to bring together Mathematics and Computer Science researchers .",
    image: a,
    postedAt: faker.date.soon(),
  },
  {
    title:
      "“MOU SIGNING CEREMONY SEMINAR” AND SEMINAR ON HOW TO STAND OUT IN A COMPETITIVE JOB ENVIRONMENT",
    description:
      "#SRMSCET #MOUSigningCeremony Shri Ram Murti Smarak College of Engineering and Technology (Pharmacy) Bareilly on 26th February, 2022 systematised the #seminar on “How To Stand Out in A Competitive Job Environment”. ",
    image: b,
    postedAt: faker.date.soon(),
  },
  {
    title: "DESIGNING EDUCATION SYSTEM IN INDIA WITH NEW EDUCATION POLICY 2020",
    description:
      "23rd April,2022 | #Designing #Education #System In #India Education is fundamental for #achieving full human potential, developing an equitable and just society, and promoting #national #development. Shri Ram Murti Smarak College of Engineering and Technology.",
    image: c,
    postedAt: faker.date.soon(),
  },
  {
    title:
      "TECHNOLOGY KEEPS INTEGRATING IN TECHVYOM 2022 AND TECHFEST MAKES IT INTERESTING",
    description:
      "Techvyom which is designated to be a National level technical fest     was organised in Shri Ram Murti Smarak College of engineering and     Technology, Bareilly on 7 th May, 2022 which offered all the students a     wholesome advantage to out-shine their technical skills on a bigger     platform.",
    image: d,
    postedAt: faker.date.soon(),
  },
  {
    title: "INTERNATIONAL CONFERENCE ON 29″TH APRIL AND 30TH APRIL”2022",
    description:
      "SRMS CET, Bareilly organised “International Conference on Contemporary Research on Mathematics and Computer Science” (ICCRMCS-2022), jointly organised by the department of mathematics & computer science. This was a two days virtual conference.",
    image: e,
    postedAt: faker.date.soon(),
  },
];

// ----------------------------------------------------------------------

NewsItem.propTypes = {
  news: PropTypes.object.isRequired,
};

function NewsItem({ image, title, description, postedAt }) {
  // const { image, title, description, postedAt } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        component="img"
        alt={title}
        src={image}
        sx={{ width: 48, height: 48, borderRadius: 1.5 }}
      />
      <Box sx={{ minWidth: 240 }}>
        <a href="https://www.srms.ac.in/cet/techvyom-2022/">
          <Link to="" color="inherit" underline="hover" component={RouterLink}>
            <Typography variant="subtitle2" noWrap>
              {title}
            </Typography>
          </Link>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {description}
          </Typography>
        </a>
      </Box>

      <Typography
        variant="caption"
        sx={{ pr: 3, flexShrink: 0, color: "text.secondary" }}
      >
        {formatDistance(postedAt, new Date())}
      </Typography>
    </Stack>
  );
}

export default function AppNewsUpdate() {
  return (
    <Card>
      <CardHeader title="News Update" />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {NEWS.map((news, image) => (
            <NewsItem
              key={news.title}
              image={news.image}
              title={news.title}
              description={news.description}
              postedAt={news.postedAt}
            />
          ))}
        </Stack>
      </Scrollbar>

      <Divider />

      <Box sx={{ p: 2, textAlign: "right" }}>
        <a href="https://www.srms.ac.in/cet/news-events/">View All</a>
        {/* <Iconify icon="eva:arrow-ios-forward-fill" /> */}

        {/* <Button
          to="/https://www.srms.ac.in/cet/news-events/"
          size="small"
          color="inherit"
          component={RouterLink}
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
        >
          View all
        </Button> */}
      </Box>
    </Card>
  );
}
