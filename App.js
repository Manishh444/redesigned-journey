import React from "react";
import ReactDom from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import Error from "./src/components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Instamart from "./src/components/Instamart";

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* <Body /> */}
      <Outlet/>
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
        {
            path:'/',
            element: <Body/>
        },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:'/restaurant/:id',
        element: <RestaurantMenu/>
      },
      {
        path:'/instamart',
        element: <Instamart/>
      }
    ]
  }
]);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
