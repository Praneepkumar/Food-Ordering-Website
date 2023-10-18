import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Error from "./components/Error";
import Body from "./components/Body";
import RestaurantInfo from "./components/RestaurantInfo";
import UserLogin from "./components/UserLogin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Grocery = lazy(() => import("./components/Grocery"));
const Contact = lazy(() => import("./components/Contact"));
const Cart = lazy(() => import("./components/Cart"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/contact",
        element: (
          <Suspense
            fallback={
              <h2 style={{ textAlign: "center", marginTop: "60px" }}>
                Loading...
              </h2>
            }>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense
            fallback={
              <h2 style={{ textAlign: "center", marginTop: "60px" }}>
                Loading...
              </h2>
            }>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={
              <h2 style={{ textAlign: "center", marginTop: "60px" }}>
                Loading...
              </h2>
            }>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurants/:resID", element: <RestaurantInfo /> },
      { path: "/login", element: <UserLogin /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
