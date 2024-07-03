import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import UpcomingTickets from "./pages/UpcomingTickets.jsx";
import Tickets from "./pages/Tickets.jsx";
import Theaters from "./pages/Theathers.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/upcoming-tickets", element: <UpcomingTickets /> },
  { path: "/tickets", element: <Tickets /> },
  { path: "/theaters", element: <Theaters /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
