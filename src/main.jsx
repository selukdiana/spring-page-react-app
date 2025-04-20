import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, redirect, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { Layout } from "./pages/Layout";
import { redirectToHomePage } from "./components/Login";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ":isAuth?",
        element: <HomePage />,
        loader: ({ request }) => {
          const isAuth = new URL(request.url).searchParams.get("isAuth");
          if (isAuth !== "true") {
            return redirect("/login");
          }
        },
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
    action: redirectToHomePage,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
