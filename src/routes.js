import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/Error";
import StepperPage from "./pages/Stepper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StepperPage />,
  },

  {
    path: "*",
    element: <Error />,
  },
]);
