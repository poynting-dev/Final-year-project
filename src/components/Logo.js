import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
// material
import { Box } from "@mui/material";
import logo from "../_mocks_/srp-logo.png";

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({ sx }) {
  return (
    <RouterLink to="/">
      <Box component="img" src={logo} sx={{ width: 40, height: 30, ...sx }} />
    </RouterLink>
  );
}
