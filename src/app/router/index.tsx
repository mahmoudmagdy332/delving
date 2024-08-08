import { createHashRouter } from "react-router-dom";
import  { lazy, Suspense } from "react";

import Layout from "../../components/layout/Index";
import Courses from "../../pages/Courses";
import About from "../../pages/About";
import CoursePath from "../../pages/CoursePath";
import Pricing from "../../pages/Pricing";
import Careers from "../../pages/Careers";
import SingleJop from "../../pages/SingleJop";

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
        path: "/pricing",
        element: (
          <Suspense fallback={<Loading />}>
             <Pricing/>
          </Suspense>
        ),
      },
      {
        path: "/jop/:jopId",
        element: (
          <Suspense fallback={<Loading />}>
             <SingleJop/>
          </Suspense>
        ),
      },
      {
        path: "/careers",
        element: (
          <Suspense fallback={<Loading />}>
             <Careers/>
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