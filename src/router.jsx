import { createBrowserRouter } from "react-router-dom";
import Calendar from "./calendar";
import Edit from "./edit";
import Record from "./record";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Calendar,
  },
  {
    path: "/record",
    Component: Record,
  },
  {
    path: "/edit",
    Component: Edit,
  },
]);

export default router;
