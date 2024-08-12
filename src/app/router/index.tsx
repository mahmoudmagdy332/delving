import { createHashRouter } from "react-router-dom";
import  { lazy, Suspense } from "react";

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
import Account from "../../pages/account/Account";

// Lazy load components
const Home = lazy(() => import("../../pages/Home"));


const Loading = () => <div>Loading...</div>;

const routes = createHashRouter([{
  path: "/",
  element: <MainLayout/>,
  children:[
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
          path: "/jop-application",
          element: (
            <Suspense fallback={<Loading />}>
               <JopApplication/>
            </Suspense>
          ),
        },
        {
          path: "/privacy",
          element:(
            <Suspense fallback={<Loading />}>
               <Privacy/>
            </Suspense>
          ),
        },
        {
          path: "/terms",
          element:(
            <Suspense fallback={<Loading />}>
               <Terms/>
            </Suspense>
          ),
        },
        {
          path: "/faq",
          element: (
            <Suspense fallback={<Loading />}>
               <FAQ/>
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
          path: "/testimonials",
          element: (
            <Suspense fallback={<Loading />}>
               <Testimonials/>
            </Suspense>
          ),
        },
        {
          path: "/account",
          element: <AccountLayout />,
          children: [
            {
              path: "/", // Catch-all route for 404 pages
              element: (
                <Account/>   
              ),
            }
          ]
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
    {  
      children: [
      {
      path: "/welcome",
      element:(
        <Suspense fallback={<Loading />}>
           <Welcome/>
        </Suspense>
      ),
    }]}
  ]}
 
]);

export default routes;
