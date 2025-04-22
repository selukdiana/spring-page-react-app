import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { Layout } from "./pages/Layout";
import { PrivateRoutes } from "./utils/PrivateRoutes";

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
