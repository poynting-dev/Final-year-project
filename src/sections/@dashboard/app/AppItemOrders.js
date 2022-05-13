// material
import { alpha, styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
// utils
import { fShortenNumber } from "../../../utils/formatNumber";
//
import Iconify from "../../../components/Iconify";
import { Link } from "react-router-dom";

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(5, 0),
  color: theme.palette.warning.darker,
  backgroundColor: theme.palette.warning.lighter,
}));

const IconWrapperStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
  color: theme.palette.warning.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(
    theme.palette.warning.dark,
    0
  )} 0%, ${alpha(theme.palette.warning.dark, 0.24)} 100%)`,
}));

// ----------------------------------------------------------------------

const TOTAL = 1723315;

export default function AppItemOrders() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Iconify icon="fluent:mail-arrow-up-16-filled" width={32} height={32} />
      </IconWrapperStyle>
      <Typography variant="h6">
        {/* {fShortenNumber(TOTAL)} */}
        Total Applications received: <br />
        20
      </Typography>
      <Typography variant="subtitle2 h6" sx={{ opacity: 0.72 }}>
        Application Requisition
      </Typography>
    </RootStyle>
  );
}
