import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import ManageCards from "./ManageCards";
import CreateCards from "./CreateCards";
import Layout from "./Layout";
import LandingPage from "./LandingPage";
import AdminLayout from "./AdminLayout";
import AdminDashboard from "./AdminDashboard";
import CreateAccount from "./CreateAccount";
import ArrowBox from "./ArrowBox";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/arrowBox", element: <ArrowBox /> },
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
  {
    path: "admin/dashboard",
    element: <AdminLayout />,
    children: [{ index: true, element: <AdminDashboard /> }],
  },
  {
    path: "admin/newAccount",
    element: <AdminLayout />,
    children: [{ index: true, element: <CreateAccount /> }],
  },
]);
export default router;
