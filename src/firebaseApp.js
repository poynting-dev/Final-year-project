import React, { Fragment } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
// import Login from "./Login";
import Login from "./pages/Login";
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
//firebase blog pages below-----------------------------
import AddArticle from "../src/my-articles/src/AddArticle";
import Articles from "../src/my-articles/src/Articles";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import App from "../src/my-articles/src/App";
import ArticlePage from "./pages/ArticlePage";
import CreateBlog from "./pages/CreateBlog";
import FacultyInfo from "./pages/FacultyInfo";
import NoticePage from "./pages/NoticePage";
import PublishNotice from "./pages/PublishNotice";
import HandleApplication from "./pages/HandleApplication";
import PublishApplication from "./pages/PublishApplication";
import AllApplications from "./pages/AllApplications";
import AllApplicationsAdmin from "./pages/AllApplicationsAdmin";
import Marksheet from "./pages/Marksheet";
import FillMarks from "./pages/FillMarks";

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
                    <Route path="/fillmarks" element={<FillMarks />} />
                    <Route path="/marksheet" element={<Marksheet />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/new-blog" element={<CreateBlog />} />
                    <Route path="/articlepage/:id" element={<ArticlePage />} />
                    <Route path="/faculty" element={<FacultyInfo />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/notice" element={<NoticePage />} />
                    <Route path="/publish" element={<PublishNotice />} />
                    <Route
                      path="/make-application"
                      element={<PublishApplication />}
                    />
                    <Route
                      path="/all-application"
                      element={<AllApplications />}
                    />
                    <Route
                      path="/admin-all-application"
                      element={<AllApplicationsAdmin />}
                    />
                    <Route
                      path="/handle-application/:id"
                      element={<HandleApplication />}
                    />
                    <Route path="/*" element={<NotFound />} />
                    <Route path="/articles" element={<App />}>
                      <Route path="/articles" element={<ToastContainer />} />
                    </Route>
                  </Route>
                  {/* <Route exact path="/" element={<Dashboard />} /> */}
                  <Route path="/update-profile" element={<UpdateProfile />} />
                </Route>
                {/* <Route path="/signup" element={<Signup />} /> */}
                <Route path="/signup" element={<Register />} />
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
