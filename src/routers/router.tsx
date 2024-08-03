import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import ContactPage from "../pages/ContactPage";
import MainPage from "../pages/MainPage";

const routes: RouteObject[] = [
  {
    path: "/contacts",
    element: <App />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "contact/:id", element: <ContactPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
