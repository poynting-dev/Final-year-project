import React, { Fragment } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { AuthProvider } from "./contexts/AuthContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
//
// routes
import { HelmetProvider } from "react-helmet-async";
import RouterCustom from "./routes";
// theme
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
// components
import ScrollToTop from "./components/ScrollToTop";
import { BaseOptionChartStyle } from "./components/charts/BaseOptionChart";
////
// layouts
import DashboardLayout from "./layouts/dashboard";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
//
// import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardApp from "./pages/DashboardApp";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import User from "./pages/User";
import NotFound from "./pages/Page404";

function FirebaseApp() {
  return (
    <HelmetProvider>
      <Router>
        <ThemeConfig>
          <ScrollToTop />
          <GlobalStyles />
          <BaseOptionChartStyle />
          {/* <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          > */}
          {/* <div className="w-100" style={{ maxWidth: "400px" }}> */}
          {/* <Router> */}
          <Fragment>
            <AuthProvider>
              <Routes>
                <Route exact path="/" element={<PrivateRoute />}>
                  <Route path="/" element={<DashboardLayout />}>
                    <Route path="/" element={<DashboardApp />} />
                    <Route path="/blog" element={<Blog />} />
                  </Route>
                  {/* <Route exact path="/" element={<Dashboard />} /> */}
                  <Route path="/update-profile" element={<UpdateProfile />} />
                </Route>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
            </AuthProvider>
          </Fragment>
          {/* </Router> */}
          {/* </div> */}
          {/* </Container> */}
        </ThemeConfig>
      </Router>
    </HelmetProvider>
  );
}

export default FirebaseApp;
