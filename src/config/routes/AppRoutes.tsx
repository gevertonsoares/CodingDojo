import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../pages/Home";
import SignUpPage from "../../pages/Signup";

const router = createBrowserRouter([
    {
        path: '/',
       element: <Home />
    },
    {
        path: '/signup',
       element: <SignUpPage />
    },
]);

export function AppRoutes() {
    return <RouterProvider router={router} />
}