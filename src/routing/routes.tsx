import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import ManageCards from "./ManageCards";
import CreateCards from "./CreateCards";
import Layout from "./Layout";
import LandingPage from "./LandingPage";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  {
    path: "dashboard",
    element: <Layout />,
    children: [{ index: true, element: <Dashboard /> }],
  },
  {
    path: "manageCards",
    element: <Layout />,
    children: [{ index: true, element: <ManageCards /> }],
  },
  {
    path: "createCards",
    element: <Layout />,
    children: [{ index: true, element: <CreateCards /> }],
  },
]);
export default router;
