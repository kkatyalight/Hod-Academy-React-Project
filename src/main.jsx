import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx'
import AllCourses from './pages/AllCourses/AllCourses.jsx'
import CoursePage from './pages/CoursePage/CoursePage.jsx'
import AllEvents from './pages/AllEvents/AllEvents.jsx'
import EventPage from './pages/EventPage/EventPage.jsx'
import AllNews from './pages/AllNews/AllNews.jsx'
import NewsPage from './pages/NewsPage/NewsPage.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx'
import Login from './pages/Login/Login.jsx'


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/all-courses",
      element: <AllCourses/>,
    },
    {
      path: "/all-courses/:courseId", 
      element: <CoursePage /> 
    },
    {
      path: "/all-events",
      element: <AllEvents/>,
    },
    {
      path: "/all-events/:eventId", 
      element: <EventPage /> 
    },
    {
      path: "/all-news",
      element: <AllNews/>,
    },
    {
      path: "/all-news/:newsId", 
      element: <NewsPage /> 
    },
    {
      path: "/about-us",
      element: <AboutUs/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
   ],
   {
    basename: "/Hod-Academy-React-Project/",
  }
  );

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>


)
