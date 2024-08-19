import { createHashRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import Layout from "../../components/layout/Index";
import Courses from "../../pages/Courses";
import About from "../../pages/About";
import CoursePath from "../../pages/CoursePath";
import Pricing from "../../pages/Pricing";
import Careers from "../../pages/Careers";
import SingleJop from "../../pages/SingleJop";
import { JopApplication } from "../../pages/JopApplication";
import Testimonials from "../../pages/Testimonials";
import FAQ from "../../pages/FAQ";
import Terms from "../../pages/Terms";
import Privacy from "../../pages/Privacy";
import Welcome from "../../pages/Welcome";
import MainLayout from "../../components/layout/MainLayout";
import AccountLayout from "../../components/layout/AccountLayout";
import Avatar from "../../components/Account/Avatar";
import PersonalInfo from "../../components/Account/PersonalInfo";
import ChangePassword from "../../components/Account/ChangePassword";
import MyCourses from "../../components/Account/MyCourses";
import Premium from "../../pages/Premium";

import Beginning from "../../pages/Beginning";

import Signup from "../../pages/Signup";
import Login from "../../pages/Login";
import LoginWith from "../../pages/LoginWith";
import Scorm from "../../pages/Scorm";
import ConfirmSignCode from "../../pages/ConfirmSignCode";
import NotFound from "../../pages/NotFound";
import ResetPassword from "../../pages/ResetPassword";
import Help from "../../pages/Help";

// Lazy load components
const Home = lazy(() => import("../../pages/Home"));

const Loading = () => <div>Loading...</div>;

const routes = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            ),
          },
          {
            path: "/courses",
            element: (
              <Suspense fallback={<Loading />}>
                <Courses />
              </Suspense>
            ),
          },
          {
            path: "/premium",
            element: (
              <Suspense fallback={<Loading />}>
                <Premium />
              </Suspense>
            ),
          },
          {
            path: "/start",
            element: (
              <Suspense fallback={<Loading />}>
                <Beginning />
              </Suspense>
            ),
          },
          {
            path: "/Courses/:CourseId",
            element: (
              <Suspense fallback={<Loading />}>
                <CoursePath />
              </Suspense>
            ),
          },
          {
            path: "/Courses/:CourseId/:ScormId",
            element: (
              <Suspense fallback={<Loading />}>
                <Scorm />
              </Suspense>
            ),
          },
          {
            path: "/pricing",
            element: (
              <Suspense fallback={<Loading />}>
                <Pricing />
              </Suspense>
            ),
          },
          {
            path: "/jop/:jopId",
            element: (
              <Suspense fallback={<Loading />}>
                <SingleJop />
              </Suspense>
            ),
          },
          {
            path: "/careers",
            element: (
              <Suspense fallback={<Loading />}>
                <Careers />
              </Suspense>
            ),
          },
          {
            path: "/jop-application",
            element: (
              <Suspense fallback={<Loading />}>
                <JopApplication />
              </Suspense>
            ),
          },
          {
            path: "/privacy",
            element: (
              <Suspense fallback={<Loading />}>
                <Privacy />
              </Suspense>
            ),
          },
          {
            path: "/terms",
            element: (
              <Suspense fallback={<Loading />}>
                <Terms />
              </Suspense>
            ),
          },
          {
            path: "/faq",
            element: (
              <Suspense fallback={<Loading />}>
                <FAQ />
              </Suspense>
            ),
          },
          {
            path: "/about",
            element: (
              <Suspense fallback={<Loading />}>
                <About />
              </Suspense>
            ),
          },
          {
            path: "/testimonials",
            element: (
              <Suspense fallback={<Loading />}>
                <Testimonials />
              </Suspense>
            ),
          },
          {
            path: "/signup",
            element: (
              <Suspense fallback={<Loading />}>
                <Signup />
              </Suspense>
            ),
          },
          { path: "/signup/confirm-code", element: <ConfirmSignCode /> },

          {
            path: "/Login-with-email",
            element: (
              <Suspense fallback={<Loading />}>
                <LoginWith />
              </Suspense>
            ),
          },
          { path: "/reset-password", element: <ResetPassword /> },
          {
            path: "/login",
            element: (
              <Suspense fallback={<Loading />}>
                <Login />
              </Suspense>
            ),
          },
          {
            path: "account",
            element: <AccountLayout />,
            children: [
              {
                index: true,
                element: <Avatar />,
              },
              {
                path: "personal",
                element: (
                  <Suspense fallback={<Loading />}>
                    <PersonalInfo />
                  </Suspense>
                ),
              },
              {
                path: "password",
                element: (
                  <Suspense fallback={<Loading />}>
                    <ChangePassword />
                  </Suspense>
                ),
              },
              {
                path: "MyCourses",
                element: (
                  <Suspense fallback={<Loading />}>
                    <MyCourses />
                  </Suspense>
                ),
              },
            ],
          },

          {
            path: "*", // Catch-all route for 404 pages
            element: (
              <Suspense fallback={<Loading />}>
                <NotFound />
              </Suspense>
            ),
          },
        ],
      },
      {
        children: [
          {
            path: "/welcome",
            element: (
              <Suspense fallback={<Loading />}>
                <Welcome />
              </Suspense>
            ),
          },
          {
            path: "/Help",
            element: (
              <Suspense fallback={<Loading />}>
                <Help />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

export default routes;
