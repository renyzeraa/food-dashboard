import { createBrowserRouter } from "react-router";

import { SignIn } from "./pages/auth/sign-in";
import { Dashboard } from "./pages/app/dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/signin",
        element: <SignIn />,
    }
])