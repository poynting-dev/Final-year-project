// material
import { alpha, styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
// utils
import { fShortenNumber } from "../../../utils/formatNumber";
//
import Iconify from "../../../components/Iconify";

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(5, 0),
  color: theme.palette.error.darker,
  backgroundColor: theme.palette.error.lighter,
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
  color: theme.palette.error.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(
    theme.palette.error.dark,
    0
  )} 0%, ${alpha(theme.palette.error.dark, 0.24)} 100%)`,
}));

// ----------------------------------------------------------------------

const TOTAL = 234;

export default function AppBugReports() {
  return (
    <RootStyle>
      <div className="my-3 py-1.5">
        <IconWrapperStyle>
          <Iconify icon="bx:mail-send" width={48} height={48} />
        </IconWrapperStyle>
        <Typography variant="h4">Your Applications</Typography>
      </div>
    </RootStyle>
  );
}
