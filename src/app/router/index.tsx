import { createHashRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";

import Layout from "../../components/layout/Index";
import Courses from "../../pages/Courses";
import About from "../../pages/About";
import CoursePath from "../../pages/CoursePath";

// Lazy load components
const Home = lazy(() => import("../../pages/Home"));


const Loading = () => <div>Loading...</div>;

const routes = createHashRouter([
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
             <Courses/>
          </Suspense>
        ),
      },
      {
        path: "/Courses/:CourseId",
        element: (
          <Suspense fallback={<Loading />}>
             <CoursePath/>
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loading />}>
             <About/>
          </Suspense>
        ),
      },
      
      {
        path: "*", // Catch-all route for 404 pages
        element: (
          <Suspense fallback={<Loading />}>
        
            <div>NotFound</div>
          </Suspense>
        ),
      },
    ],
  },
]);

export default routes;
