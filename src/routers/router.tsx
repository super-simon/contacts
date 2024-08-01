import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainPage from "../pages/MainPage";

const routes: RouteObject[] = [
  {
    path: "",
    element: <App />,
    children: [{ path: "", element: <MainPage /> }],
  },
];

export const router = createBrowserRouter(routes);
