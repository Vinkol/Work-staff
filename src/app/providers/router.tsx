import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CompaniesPage } from "@/pages/Companies/Companies";
import { IndividualsPage } from "@/pages/Individuals/Individuals";
import { OfficeStaffPage } from "@/pages/Officestaff/OfficeStaff";
import { WorkStaffPage } from "@/pages/Workstaff/WorkStaff";
import { PricesPage } from "@/pages/Prices/Prices";
import { ContactsPage } from "@/pages/Contacts/Contacts";
import { NotFoundPage } from "@/pages/NotFound/NotFound";
import { HomePage } from "@/pages/Home/HomePage";
import { Layout } from "@/widgets/Layout/Layout";
import { ErrorFallback } from "@/widgets/ErrorBoundary/ui/ErrorFallback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorFallback />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "companies", element: <CompaniesPage /> },
      { path: "individuals", element: <IndividualsPage /> },
      { path: "officestaff", element: <OfficeStaffPage /> },
      { path: "workstaff", element: <WorkStaffPage /> },
      { path: "price", element: <PricesPage /> },
      { path: "contacts", element: <ContactsPage /> },
      { path: "not-found", element: <NotFoundPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};