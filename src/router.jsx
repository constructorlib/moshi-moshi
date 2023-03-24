import { createBrowserRouter } from "react-router-dom";
import Record from "./record";
import Edit from "./edit";
import Calendar from "./calendar";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Record,
  },
  {
    path: "/record",
    Component: Record,
  },
  {
    path: "/calendar",
    Component: Calendar,
  },
  {
    path: "/edit",
    Component: Edit,
  },
]);

export default router;
